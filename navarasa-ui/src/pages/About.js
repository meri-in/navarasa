import React from "react";
import { Container, Typography } from "@mui/material";

function About() {

  return (
    <Container style={{ marginTop: 40 }}>

      <Typography variant="h4">
        About the Project
      </Typography>

      <Typography style={{ marginTop: 20 }}>
        This system detects Navarasa emotions from facial
        expressions using deep learning. The model is built
        using EfficientNetB2 and Grad-CAM is used for
        explainable AI visualization.
      </Typography>

    </Container>
  );
}

export default About;