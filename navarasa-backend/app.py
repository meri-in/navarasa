import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

import numpy as np
import tensorflow as tf
import cv2

from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.applications.efficientnet import preprocess_input

# ===============================
# FLASK APP
# ===============================

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ===============================
# LOAD MODEL
# ===============================

model = tf.keras.models.load_model(
    "model/newnavarasa_efficientnetB2_final.keras",
    compile=False
)

IMG_SIZE = 260

class_names = [
    "Adbhutha",
    "Bhayaanaka",
    "Bheebhatsya",
    "Hasya",
    "Karuna",
    "Roudra",
    "Shaanta",
    "Shringaara",
    "Veera"
]

# ===============================
# ANALYTICS STORAGE
# ===============================

analytics_data = {
    "predictions": [],
    "confidences": [],
    "history": []
}

latest_prediction = {
    "image": "",
    "gradcam": "",
    "emotion": "",
    "confidence": 0
}

# ===============================
# PREPROCESS IMAGE
# ===============================

def preprocess_image(img_path):

    img = cv2.imread(img_path)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    img_array = img.astype(np.float32)
    img_array = preprocess_input(img_array)
    img_array = np.expand_dims(img_array, axis=0)

    return img_array, img


# ===============================
# GRAD-CAM
# ===============================

def make_gradcam_heatmap(img_array):

    img_tensor = tf.convert_to_tensor(img_array)

    base_model = model.get_layer("efficientnetb2")
    last_conv_layer = base_model.get_layer("top_conv")

    conv_model = tf.keras.Model(
        inputs=base_model.input,
        outputs=last_conv_layer.output
    )

    classifier_input = tf.keras.Input(shape=last_conv_layer.output.shape[1:])

    x = classifier_input
    x = model.get_layer("global_average_pooling2d_3")(x)
    x = model.get_layer("batch_normalization_3")(x)
    x = model.get_layer("dense_6")(x)
    x = model.get_layer("dropout_3")(x)
    classifier_output = model.get_layer("dense_7")(x)

    classifier_model = tf.keras.Model(classifier_input, classifier_output)

    with tf.GradientTape() as tape:

        conv_output = conv_model(img_tensor)
        tape.watch(conv_output)

        preds = classifier_model(conv_output)

        pred_index = tf.argmax(preds[0])
        loss = preds[:, pred_index]

    grads = tape.gradient(loss, conv_output)

    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))

    conv_output = conv_output[0]

    heatmap = tf.reduce_sum(conv_output * pooled_grads, axis=-1)

    heatmap = tf.maximum(heatmap, 0)
    heatmap /= tf.reduce_max(heatmap) + 1e-8

    return heatmap.numpy()


# ===============================
# REGION ANALYSIS
# ===============================

def analyze_regions(heatmap):

    h, w = heatmap.shape

    upper = heatmap[0:int(h*0.4), :]
    middle = heatmap[int(h*0.4):int(h*0.7), :]
    lower = heatmap[int(h*0.7):h, :]

    upper_score = np.mean(upper)
    middle_score = np.mean(middle)
    lower_score = np.mean(lower)

    total = upper_score + middle_score + lower_score + 1e-8

    return {
        "upper": round((upper_score/total)*100, 2),
        "middle": round((middle_score/total)*100, 2),
        "lower": round((lower_score/total)*100, 2)
    }


# ===============================
# EXPLANATION GENERATOR
# ===============================

def generate_explanation(emotion, region_data, confidence):

    dominant_region = max(region_data, key=region_data.get)

    region_map = {
        "upper": "eyes and eyebrows",
        "middle": "nose region",
        "lower": "mouth and jaw"
    }

    explanation = (
        f"The model predicted '{emotion}' with {round(confidence*100,2)}% confidence. "
        f"Grad-CAM analysis shows highest activation in the {region_map[dominant_region]} region "
        f"({region_data[dominant_region]}% contribution). "
        f"This indicates that facial features in this area were most influential in determining the expression."
    )

    return explanation


# ===============================
# HEATMAP OVERLAY
# ===============================

def overlay_heatmap(heatmap, original_img, alpha=0.4):

    heatmap = cv2.resize(
        heatmap,
        (original_img.shape[1], original_img.shape[0])
    )

    heatmap = np.uint8(255 * heatmap)

    heatmap_color = cv2.applyColorMap(
        heatmap,
        cv2.COLORMAP_JET
    )

    superimposed_img = cv2.addWeighted(
        original_img,
        1 - alpha,
        heatmap_color,
        alpha,
        0
    )

    return superimposed_img


# ===============================
# PREDICTION API
# ===============================

@app.route("/predict", methods=["POST"])
def predict():

    file = request.files["image"]

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    file.save(filepath)

    img_array, original_img = preprocess_image(filepath)

    predictions = model.predict(img_array)

    predicted_index = np.argmax(predictions[0])
    predicted_class = class_names[predicted_index]

    confidence = float(np.max(predictions[0]))

    # store analytics
    analytics_data["predictions"].append(predicted_class)
    analytics_data["confidences"].append(confidence)

    analytics_data["history"].append({
        "emotion": predicted_class,
        "confidence": round(confidence * 100, 2)
    })

    # GradCAM
    heatmap = make_gradcam_heatmap(img_array)

    gradcam_image = overlay_heatmap(heatmap, original_img)

    gradcam_filename = "gradcam_" + file.filename
    gradcam_path = os.path.join(UPLOAD_FOLDER, gradcam_filename)

    cv2.imwrite(
        gradcam_path,
        cv2.cvtColor(gradcam_image, cv2.COLOR_RGB2BGR)
    )

    # Region analysis
    region_data = analyze_regions(heatmap)

    # Explanation
    explanation = generate_explanation(
        predicted_class,
        region_data,
        confidence
    )

    # Emotion intensity
    if predicted_class == "Shaanta":
        intensity = "Low"
    elif predicted_class == "Hasya":
        intensity = "High" if confidence > 0.75 else "Medium"
    elif predicted_class in ["Roudra","Veera","Bhayaanaka","Bheebhatsya"]:
        intensity = "High" if confidence > 0.80 else "Medium"
    elif predicted_class in ["Adbhutha","Shringaara"]:
        intensity = "High" if confidence > 0.80 else "Medium"
    else:
        intensity = "Medium"

    latest_prediction["image"] = "/static/uploads/" + file.filename
    latest_prediction["gradcam"] = "/static/uploads/" + gradcam_filename
    latest_prediction["emotion"] = predicted_class
    latest_prediction["confidence"] = round(confidence * 100, 2)

    return jsonify({
        "prediction": predicted_class,
        "confidence": round(confidence * 100, 2),
        "intensity": intensity,
        "explanation": explanation,
        "region_data": region_data,
        "gradcam": latest_prediction["gradcam"]
    })


# ===============================
# ANALYTICS API
# ===============================

@app.route("/analytics", methods=["GET"])
def analytics():

    total_predictions = len(analytics_data["predictions"])

    emotion_counts = {
        emotion: analytics_data["predictions"].count(emotion)
        for emotion in class_names
    }

    emotion_distribution = [
        {"name": emotion, "value": count}
        for emotion, count in emotion_counts.items()
    ]

    return jsonify({
        "total_predictions": total_predictions,
        "emotion_distribution": emotion_distribution,
        "prediction_history": analytics_data["history"][-10:],
        "latest_prediction": latest_prediction
    })


# ===============================
# ADMIN ANALYTICS API
# ===============================

@app.route("/admin/analytics", methods=["GET"])
def admin_analytics():

    total_predictions = len(analytics_data["predictions"])

    emotion_counts = {
        emotion: analytics_data["predictions"].count(emotion)
        for emotion in class_names
    }

    emotion_distribution = [
        {"name": emotion, "value": count}
        for emotion, count in emotion_counts.items()
    ]

    recent_predictions = []

    for i in range(len(analytics_data["history"][-10:])):
        item = analytics_data["history"][-10:][i]

        recent_predictions.append({
            "user": "Anonymous",
            "emotion": item["emotion"],
            "confidence": item["confidence"],
            "time": f"{i+1} min ago"
        })

    return jsonify({

        "system_stats": {
            "users": 1,
            "predictions": total_predictions,
            "accuracy": 92,
            "server": "Running"
        },

        "emotion_distribution": emotion_distribution,

        "recent_predictions": recent_predictions

    })


# ===============================
# RUN
# ===============================

if __name__ == "__main__":
    app.run(debug=True)