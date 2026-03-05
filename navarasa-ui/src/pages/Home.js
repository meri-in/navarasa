import React from "react";
import { Container, Typography, Grid, Button, Box, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ScienceIcon from "@mui/icons-material/Science";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Refined Theme Colors
const THEME_CORAL = "#FF6C6C";
const THEME_MAGENTA = "#FF007D";
const THEME_ACCENT = "#FFD14D";
const DEEP_NAVY = "#050505"; // Richer than pure black

function Home() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: DEEP_NAVY, color: "white" }}>
      
      {/* 1. IMMERSIVE HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          /* Multi-layered Background */
          backgroundImage: `
            linear-gradient(180deg, rgba(5, 5, 5, 0.4) 0%, ${DEEP_NAVY} 100%),
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%),
            url('/images/Kathakali dance.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundAttachment: "fixed", // Parallax effect
          textAlign: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg" sx={{ zIndex: 3 }}>
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="overline"
              sx={{ 
                color: THEME_ACCENT, 
                fontWeight: 800, 
                letterSpacing: "0.5em",
                textShadow: "0 0 15px rgba(255, 209, 77, 0.3)" 
              }}
            >
              DIGITALIZING THE RASA SUTRA
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3.5rem", md: "6.5rem" },
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
                mb: 4,
                opacity: 0.8,
                fontSize: { xs: "1.1rem", md: "1.4rem" }
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
                background: `linear-gradient(135deg, ${THEME_CORAL} 0%, ${THEME_MAGENTA} 100%)`,
                boxShadow: `0 10px 40px rgba(255, 0, 125, 0.4)`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${THEME_MAGENTA} 0%, ${THEME_CORAL} 100%)`,
                  transform: "translateY(-4px)",
                  boxShadow: `0 15px 50px rgba(255, 0, 125, 0.6)`,
                },
                px: 10,
                py: 2.5,
                borderRadius: "12px", // Modern semi-rounded
                fontSize: "1.2rem",
                textTransform: "none",
                fontWeight: 700,
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}
            >
              Launch Detection Engine
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* 2. ABOUT SECTION (Integrated Professional Card) */}
      <Container maxWidth="xl" sx={{ mt: -10, pb: 15, position: "relative", zIndex: 5 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            borderRadius: "40px",
            background: "rgba(20, 20, 20, 0.8)", // Dark translucent card
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
            color: "white"
          }}
        >
          <Box sx={{ p: { xs: 4, md: 10 } }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="overline" sx={{ color: THEME_CORAL, fontWeight: 900, fontSize: "1rem", letterSpacing: "0.2em" }}>
                  THE TECHNOLOGY
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 800, mt: 1, mb: 4, letterSpacing: "-0.02em" }}>
                  Interpreting the <Box component="span" sx={{ color: THEME_MAGENTA }}>Navarasas</Box>
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2, mb: 3, opacity: 0.8, fontSize: "1.15rem" }}>
                  RasaVision is an advanced computational system that decodes the subtle language of Indian classical dance. By leveraging <strong>EfficientNetB2</strong>, our model classifies facial expressions into the traditional emotional states meticulously documented in the <em>Natya Shastra</em>.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2, opacity: 0.8, fontSize: "1.15rem" }}>
                  Utilizing Explainable AI (XAI) via Grad-CAM, we highlight the specific facial musculature that informs every prediction, ensuring transparency in heritage computing.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/images/Kathakali dance.jpg"
                  alt="Kathakali Expression"
                  sx={{
                    width: "100%",
                    borderRadius: "24px",
                    boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "transform 0.6s ease",
                    "&:hover": { transform: "scale(1.02)" }
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>

      {/* 3. SYSTEM WORKFLOW (Modern Glass Cards) */}
      <Box sx={{ 
        py: 15, 
        background: `linear-gradient(180deg, ${DEEP_NAVY} 0%, #111 100%)`,
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 900, mb: 10, letterSpacing: "-0.03em" }}>
            The Digital Pipeline
          </Typography>

          <Grid container spacing={6}>
            {[
              { icon: <ScienceIcon />, title: "Digital Input", text: "Upload a high-fidelity image of a classical facial expression for analysis.", color: THEME_CORAL },
              { icon: <AnalyticsIcon />, title: "Neural Analysis", text: "EfficientNetB2 processes micro-expressions for accurate Rasa classification.", color: THEME_MAGENTA },
              { icon: <VisibilityIcon />, title: "XAI Insight", text: "Grad-CAM visualizes the facial regions driving the machine's prediction.", color: THEME_ACCENT }
            ].map((step, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 6, 
                    textAlign: "center", 
                    borderRadius: "32px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    height: "100%",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": { 
                      background: "rgba(255,255,255,0.05)",
                      transform: "translateY(-12px)",
                      borderColor: step.color,
                      boxShadow: `0 20px 40px rgba(0,0,0,0.4)`
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      fontSize: 60, 
                      color: step.color, 
                      mb: 4,
                      display: "inline-flex",
                      p: 2,
                      borderRadius: "20px",
                      background: `rgba(${parseInt(step.color.slice(1,3), 16)}, ${parseInt(step.color.slice(3,5), 16)}, ${parseInt(step.color.slice(5,7), 16)}, 0.1)`
                    }}
                  >
                    {React.cloneElement(step.icon, { sx: { fontSize: "inherit" } })}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "white" }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                    {step.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FOOTER STRIP */}
      <Box sx={{ py: 6, textAlign: "center", opacity: 0.4, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <Typography variant="body2">© 2024 RasaVision • AI for Cultural Heritage</Typography>
      </Box>
    </Box>
  );
}

export default Home;