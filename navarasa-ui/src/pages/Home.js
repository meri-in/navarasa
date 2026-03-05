import React from "react";
import { Container, Typography, Grid, Button, Box, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ScienceIcon from "@mui/icons-material/Science";
import VisibilityIcon from "@mui/icons-material/Visibility";

const THEME_CORAL = "#FF6C6C";
const THEME_MAGENTA = "#FF007D";
const THEME_ACCENT = "#FFD14D";
const DEEP_NAVY = "#050505";

function Home() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: DEEP_NAVY, color: "white" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage: `
            linear-gradient(180deg, rgba(5,5,5,0.4) 0%, ${DEEP_NAVY} 100%),
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%),
            url('/images/Kathakali dance.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundAttachment: "fixed",
          textAlign: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center">

            <Typography
              variant="overline"
              sx={{
                color: THEME_ACCENT,
                fontWeight: 800,
                letterSpacing: "0.5em"
              }}
            >
              DIGITALIZING THE RASA SUTRA
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3rem", md: "6rem" },
                letterSpacing: "-0.04em",
                background: `-webkit-linear-gradient(45deg, #FFF 30%, ${THEME_CORAL} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              RasaVision
            </Typography>

            <Typography
              variant="h5"
              sx={{
                maxWidth: "750px",
                fontWeight: 300,
                lineHeight: 1.6,
                opacity: 0.8
              }}
            >
              Bridging Ancient Indian Performing Arts with State-of-the-Art Neural Intelligence
            </Typography>

            <Button
              component={Link}
              to="/predict"
              variant="contained"
              size="large"
              sx={{
                background: `linear-gradient(135deg, ${THEME_CORAL}, ${THEME_MAGENTA})`,
                px: 8,
                py: 2,
                borderRadius: "12px",
                fontSize: "1.2rem",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  transform: "translateY(-4px)"
                }
              }}
            >
              Launch Detection Engine
            </Button>

          </Stack>
        </Container>
      </Box>


      {/* ABOUT SECTION */}
      <Container maxWidth="xl" sx={{ mt: 10 }}>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Interpreting the Navarasas
        </Typography>

        <Typography sx={{ opacity: 0.8, mb: 6 }}>
          Using Explainable AI via Grad-CAM, the system highlights the facial regions responsible for emotion prediction.
        </Typography>

        {/* NAVARASA IMAGE GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 4
          }}
        >

          {[
            { img: "/images/hasyam.png"},
            { img: "/images/bhayanakam.png" },
            { img: "/images/adbhutam.png"},
            { img: "/images/karuna.png" },
            { img: "/images/veeram.png"},
            { img: "/images/shantam.png" },
            { img: "/images/bhibhatsam.png"},
            { img: "/images/rowdram.png" },
            { img: "/images/sringaram.png",  }
          ].map((item, index) => (

            <Box
              key={index}
              sx={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.7)"
                }
              }}
            >

              <Box
                component="img"
                src={item.img}
                alt={item.label}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain"
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  bottom: 15,
                  left: 15,
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "0px 4px 12px rgba(0,0,0,0.9)"
                }}
              >
                {item.label}
              </Typography>

            </Box>

          ))}

        </Box>

      </Container>


  {/* WORKFLOW SECTION */}
<Box
  sx={{
    py: 16,
    background: "linear-gradient(180deg,#050505 0%,#0b0b0b 100%)"
  }}
>
  <Container maxWidth="lg">

    <Typography
      variant="h3"
      align="center"
      sx={{
        mb: 12,
        fontWeight: 800,
        letterSpacing: "1px",
        background: "linear-gradient(90deg,#fff,#bbb)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      The Digital Pipeline
    </Typography>


    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 6
      }}
    >

      {[
        {
          icon: <ScienceIcon />,
          title: "Digital Input",
          text: "Upload a facial expression image for analysis.",
          color: "#FF6C6C"
        },
        {
          icon: <AnalyticsIcon />,
          title: "Neural Analysis",
          text: "EfficientNetB2 analyzes facial micro-expressions.",
          color: "#FF007D"
        },
        {
          icon: <VisibilityIcon />,
          title: "Grad-CAM Insight",
          text: "Highlights facial regions influencing predictions.",
          color: "#FFD14D"
        }
      ].map((step, index) => (

        <Box
          key={index}
          sx={{
            position: "relative",
            borderRadius: "30px",
            padding: "1px",
            background: `linear-gradient(135deg, ${step.color}, transparent)`,
            transition: "0.4s"
          }}
        >

          <Paper
            elevation={0}
            sx={{
              p: 7,
              borderRadius: "30px",
              textAlign: "center",

              background: "rgba(20,20,20,0.75)",
              backdropFilter: "blur(20px)",

              border: "1px solid rgba(255,255,255,0.06)",

              transition: "all 0.4s ease",

              "&:hover": {
                transform: "translateY(-12px) scale(1.03)",
                boxShadow: `0 25px 70px rgba(0,0,0,0.7)`
              }
            }}
          >

            {/* ICON */}
            <Box
              sx={{
                width: 90,
                height: 90,
                borderRadius: "22px",
                margin: "0 auto",
                mb: 4,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background: `${step.color}20`,

                boxShadow: `0 0 25px ${step.color}50`
              }}
            >
              {React.cloneElement(step.icon, {
                sx: { fontSize: 45, color: step.color }
              })}
            </Box>

            {/* TITLE */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "white"
              }}
            >
              {step.title}
            </Typography>

            {/* TEXT */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem",
                lineHeight: 1.7
              }}
            >
              {step.text}
            </Typography>

          </Paper>

        </Box>

      ))}

    </Box>

  </Container>
</Box>


      {/* FOOTER */}
      <Box sx={{ py: 4, textAlign: "center", opacity: 0.5 }}>
        <Typography variant="body2">
          © 2026 RasaVision • AI for Cultural Heritage
        </Typography>
      </Box>

    </Box>
  );
}

export default Home;