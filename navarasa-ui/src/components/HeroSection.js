import React from "react";
import { Link } from "react-router-dom";

function HeroSection(){

  return(

    <div style={{
      background:"linear-gradient(135deg,#4f46e5,#7c3aed)",
      color:"white",
      textAlign:"center",
      padding:"140px 20px"
    }}>

      <h1 style={{
        fontSize:"60px",
        fontWeight:"700",
        marginBottom:"20px"
      }}>
        RasaVision
      </h1>

      <p style={{
        fontSize:"22px",
        maxWidth:"700px",
        margin:"auto",
        opacity:0.9
      }}>
        Discover emotional expressions in Indian classical dance
        using deep learning and explainable AI.
      </p>

      <Link to="/predict">
        <button style={{
          marginTop:"40px",
          background:"white",
          color:"#4f46e5",
          border:"none",
          padding:"14px 30px",
          borderRadius:"30px",
          fontWeight:"600",
          cursor:"pointer"
        }}>
          Try Emotion Detection
        </button>
      </Link>

    </div>

  );
}

export default HeroSection;