import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent
} from "@mui/material";

function Predict() {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleImage = (e) => {

    const file = e.target.files[0];

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {

    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      "http://127.0.0.1:5000/predict",
      formData
    );

    setResult(res.data);
  };

  return (

    <Container style={{marginTop:60}}>

      <Typography
        variant="h3"
        align="center"
        style={{fontWeight:700}}
      >
        Emotion Detection
      </Typography>

      <Typography
        align="center"
        style={{marginTop:10,color:"#777"}}
      >
        Upload a facial expression to detect Navarasa emotion
      </Typography>

      {/* Upload Box */}

      <div
        style={{
          border:"2px dashed #6C63FF",
          borderRadius:12,
          padding:40,
          textAlign:"center",
          marginTop:40
        }}
      >

        <input
          type="file"
          onChange={handleImage}
        />

        {preview && (

          <div style={{marginTop:20}}>

            <img
              src={preview}
              alt="preview"
              width="300"
              style={{
                borderRadius:10,
                boxShadow:"0 4px 20px rgba(0,0,0,0.2)"
              }}
            />

          </div>

        )}

        <Button
          variant="contained"
          size="large"
          style={{marginTop:30}}
          onClick={uploadImage}
        >
          Predict Emotion
        </Button>

      </div>

      {/* Result Section */}

      {result && (

        <Card
          style={{
            marginTop:50,
            padding:20,
            borderRadius:12
          }}
        >

          <CardContent>

            <Typography variant="h5">
              Emotion: {result.prediction}
            </Typography>

            <Typography>
              Confidence: {result.confidence}%
            </Typography>

            <Typography>
              Intensity: {result.intensity}
            </Typography>

            <Typography style={{marginTop:10}}>
              {result.explanation}
            </Typography>

            <div style={{marginTop:20}}>

              <img
                src={`http://127.0.0.1:5000/${result.gradcam}`}
                width="350"
                alt="GradCAM"
                style={{borderRadius:10}}
              />

            </div>

          </CardContent>

        </Card>

      )}

    </Container>
  );
}

export default Predict;