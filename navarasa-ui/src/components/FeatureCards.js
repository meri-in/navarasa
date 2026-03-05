import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function FeatureCards(){

  const features = [
    {
      title:"Emotion Recognition",
      desc:"Detect 9 Navarasa expressions using EfficientNetB2 deep learning."
    },
    {
      title:"Explainable AI",
      desc:"Grad-CAM highlights facial regions influencing predictions."
    },
    {
      title:"Analytics Dashboard",
      desc:"Visualize emotion distribution and model performance."
    }
  ];

  return(

    <Grid container spacing={4} style={{marginTop:40}}>

      {features.map((f,i)=>(
        <Grid item xs={12} md={4} key={i}>

          <Paper
            elevation={4}
            style={{
              padding:30,
              borderRadius:12
            }}
          >

            <Typography variant="h5" style={{fontWeight:600}}>
              {f.title}
            </Typography>

            <Typography style={{marginTop:10}}>
              {f.desc}
            </Typography>

          </Paper>

        </Grid>
      ))}

    </Grid>

  );
}

export default FeatureCards;