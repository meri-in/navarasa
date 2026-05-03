// storage.js
class PredictionStorage {
  static savePrediction(prediction) {
    const predictions = this.getPredictions();
    predictions.push(prediction);
    localStorage.setItem('navarasa_predictions', JSON.stringify(predictions));
    // Dispatch event for real-time updates
    window.dispatchEvent(new Event('predictionAdded'));
  }

  static getPredictions() {
    const stored = localStorage.getItem('navarasa_predictions');
    return stored ? JSON.parse(stored) : [];
  }

  static clearPredictions() {
    localStorage.removeItem('navarasa_predictions');
    window.dispatchEvent(new Event('predictionAdded'));
  }

  static getTotalCount() {
    return this.getPredictions().length;
  }
}

export default PredictionStorage;