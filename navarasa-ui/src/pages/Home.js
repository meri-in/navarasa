import React from "react";
import { Container, Typography, Box, Button, Stack, Chip, Divider, Grid, Link, IconButton, Paper, Avatar, Fade, Slide, Zoom, Grow, alpha, useTheme, Card, CardContent, CardMedia, Badge } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DatasetIcon from '@mui/icons-material/Dataset';
import SpeedIcon from '@mui/icons-material/Speed';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MemoryIcon from '@mui/icons-material/Memory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TimelineIcon from '@mui/icons-material/Timeline';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { keyframes } from '@mui/system';

// Standardized Color Palette - Refined
const BG = "#0A0A0A";
const SURFACE = "#121212";
const ACCENT = "#6366F1";
const ACCENT_GLOW = "#818CF8";
const TEXT_PRIMARY = "#FFFFFF";
const TEXT_SECONDARY = "#A1A1AA";
const BORDER_COLOR = "rgba(255,255,255,0.06)";
const CARD_BG = "rgba(18,18,18,0.8)";

// Animation keyframes - Refined
const float = keyframes`
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.02); }
  100% { transform: translateY(0px) scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
  70% { box-shadow: 0 0 20px 10px rgba(99, 102, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

function Home() {
  const rasas = [
    { img: "/images/sringaram.png", name: "Shringara", desc: "Love & Beauty", id: "shringara" },
    { img: "/images/hasyam.png", name: "Hasya", desc: "Laughter & Mirth", id: "hasya" },
    { img: "/images/karuna.png", name: "Karuna", desc: "Compassion", id: "karuna" },
    { img: "/images/rowdram.png", name: "Raudra", desc: "Anger", id: "raudra" },
    { img: "/images/veeram.png", name: "Veera", desc: "Heroism", id: "veera" },
    { img: "/images/bhayanakam.png", name: "Bhayanaka", desc: "Fear", id: "bhayanaka" },
    { img: "/images/bhibhatsam.png", name: "Bibhatsa", desc: "Disgust", id: "bibhatsa" },
    { img: "/images/adbhutam.png", name: "Adbhuta", desc: "Wonder", id: "adbhuta" },
    { img: "/images/shantam.png", name: "Shanta", desc: "Peace", id: "shanta" }
  ];

  return (
    <Box sx={{ 
      bgcolor: BG, 
      color: TEXT_PRIMARY, 
      minHeight: "100vh",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Sophisticated Background Pattern */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 30%, ${alpha(ACCENT, 0.03)} 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, ${alpha(ACCENT, 0.03)} 0%, transparent 50%),
          repeating-linear-gradient(45deg, ${alpha('#FFFFFF', 0.01)} 0px, ${alpha('#FFFFFF', 0.01)} 1px, transparent 1px, transparent 20px)
        `,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: [
            `linear-gradient(180deg, ${alpha(BG, 0.8)} 0%, ${BG} 100%)`,
            `url('/images/kathakali dance.jpg')`
          ].join(','),
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundAttachment: "fixed",
          backgroundBlendMode: 'overlay',
          "&::before": {
            content: '""', 
            position: "absolute", 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(ACCENT, 0.2)} 0%, ${alpha(BG, 0.9)} 100%)`,
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Live Status Indicator - Refined */}
          <Fade in timeout={800}>
            <Badge
              variant="dot"
              sx={{
                mb: 4,
                '& .MuiBadge-badge': {
                  bgcolor: '#10B981',
                  boxShadow: '0 0 20px #10B981',
                  animation: `${pulse} 2s infinite`,
                  right: -8,
                  top: 8,
                }
              }}
            >
              <Typography variant="caption" sx={{ 
                color: alpha(TEXT_PRIMARY, 0.7), 
                fontWeight: 500, 
                textTransform: "uppercase", 
                letterSpacing: 3,
                bgcolor: alpha('#FFFFFF', 0.03),
                px: 3,
                py: 1,
                borderRadius: '30px',
                border: `1px solid ${alpha('#10B981', 0.2)}`,
              }}>
               
              </Typography>
            </Badge>
          </Fade>
          
          {/* Main Title - Elegant */}
          <Zoom in timeout={1000}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800, 
                mb: 2, 
                fontSize: { xs: "3rem", md: "5.5rem" }, 
                lineHeight: 1.1, 
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #FFFFFF 0%, #E0E7FF 50%, #C7D2FE 100%)",
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent",
                textShadow: `0 20px 40px ${alpha(ACCENT, 0.2)}`,
              }}
            >
              AI Analysis of Indian Rasa Theory
            </Typography>
          </Zoom>

          {/* Subtitle - Refined */}
          <Fade in timeout={1200}>
            <Typography sx={{ 
              color: alpha(TEXT_PRIMARY, 0.6), 
              maxWidth: 700, 
              mx: "auto", 
              fontSize: { xs: "1.1rem", md: "1.3rem" }, 
              mb: 6, 
              lineHeight: 1.7,
              fontWeight: 300,
              letterSpacing: '0.2px',
            }}>
              RasaVision uses cutting-edge deep learning to map, classify, and analyze 
              the intricate facial expressions of Indian classical dance, bridging heritage with technology.
            </Typography>
          </Fade>

          {/* CTA Buttons - Refined */}
          <Slide direction="up" in timeout={1400}>
            <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 8 }}>
              <Button
                component={RouterLink}
                to="/predict"
                variant="contained"
                sx={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, #818CF8 100%)`,
                  px: {xs: 6, md: 8}, 
                  py: {xs: 1.8, md: 2.2}, 
                  borderRadius: "40px", 
                  fontWeight: 600, 
                  fontSize: "1.1rem", 
                  textTransform: "none",
                  boxShadow: `0 20px 30px ${alpha(ACCENT, 0.3)}`,
                  transition: "all 0.3s ease",
                  border: `1px solid ${alpha('#FFFFFF', 0.1)}`,
                  '&:hover': { 
                    background: `linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)`,
                    transform: "translateY(-2px)",
                    boxShadow: `0 30px 40px ${alpha(ACCENT, 0.4)}`,
                  }
                }}
              >
                Analyze Expression
              </Button>

              <Button
                component={RouterLink}
                to="/dashboard"
                variant="outlined"
                sx={{
                  px: { xs: 6, md: 8 },
                  py: { xs: 1.8, md: 2.2 },
                  borderRadius: "40px",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  borderColor: alpha('#FFFFFF', 0.2),
                  color: TEXT_PRIMARY,
                  transition: "all 0.3s ease",
                  '&:hover': {
                    borderColor: ACCENT,
                    background: alpha(ACCENT, 0.1),
                    transform: "translateY(-2px)",
                  }
                }}
              >
                Dashboard
              </Button>
            </Stack>
          </Slide>

          {/* Feature Cards - Elegant */}
          <ProfessionalFeatureCards />
        </Container>
      </Box>

      {/* 2. HOW IT WORKS SECTION - Refined */}
      <Box sx={{ 
        bgcolor: SURFACE, 
        py: {xs: 12, md: 18}, 
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${alpha(ACCENT, 0.3)}, ${alpha('#FFFFFF', 0.1)}, ${alpha(ACCENT, 0.3)}, transparent)`,
        }
      }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Slide direction="down" in timeout={800}>
              <Chip
                label="WORKFLOW"
                sx={{
                  bgcolor: alpha(ACCENT, 0.1),
                  color: ACCENT,
                  fontWeight: 600,
                  letterSpacing: 2,
                  border: `1px solid ${alpha(ACCENT, 0.2)}`,
                  mb: 3,
                  px: 2,
                }}
              />
            </Slide>
            <Slide direction="up" in timeout={1000}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: "linear-gradient(135deg, #FFFFFF, #E0E7FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The RasaVision Pipeline
              </Typography>
            </Slide>
            <Fade in timeout={1200}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: TEXT_SECONDARY, 
                  fontWeight: 400, 
                  maxWidth: 600, 
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                A powerful combination of facial landmark detection and convolutional neural networks.
              </Typography>
            </Fade>
          </Box>
          
          {/* Pipeline Steps */}
          <Grid container spacing={3}>
            {[
              { 
                num: "01", 
                title: "Capture & Preprocess", 
                desc: "Upload a photo or video frame. We optimize clarity and isolate the facial region.",
                icon: "📸",
                color: ACCENT,
                gradient: "linear-gradient(135deg, rgba(99,102,241,0.1), transparent)"
              },
              { 
                num: "02", 
                title: "Landmark Estimation", 
                desc: "AI maps 68 key points (eyes, brows, mouth) to track micro-movements.",
                icon: "👁️",
                color: "#F59E0B",
                gradient: "linear-gradient(135deg, rgba(245,158,11,0.1), transparent)"
              },
              { 
                num: "03", 
                title: "Rasa Classification", 
                desc: "A custom CNN analyzes features and predicts the primary emotion state.",
                icon: "🧠",
                color: "#EF4444",
                gradient: "linear-gradient(135deg, rgba(239,68,68,0.1), transparent)"
              },
              { 
                num: "04", 
                title: "Statistical Output", 
                desc: "Receive probability scores and a comparative emotional breakdown.",
                icon: "📊",
                color: "#10B981",
                gradient: "linear-gradient(135deg, rgba(16,185,129,0.1), transparent)"
              }
            ].map((step, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Fade in timeout={1600 + i * 200}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: alpha('#FFFFFF', 0.02),
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${alpha(step.color, 0.1)}`,
                      borderRadius: 4,
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: alpha(step.color, 0.3),
                        boxShadow: `0 20px 40px ${alpha(step.color, 0.2)}`,
                        '& .step-number': {
                          color: step.color,
                          opacity: 0.2,
                          transform: 'scale(1.2)',
                        },
                        '& .step-icon': {
                          opacity: 0.2,
                          transform: 'scale(1.2) rotate(10deg)',
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      {/* Step Number */}
                      <Typography 
                        className="step-number"
                        variant="h1" 
                        sx={{ 
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          fontWeight: 900,
                          fontSize: '5rem',
                          color: alpha(step.color, 0.1),
                          lineHeight: 1,
                          transition: 'all 0.4s ease',
                          zIndex: 0,
                        }}
                      >
                        {step.num}
                      </Typography>

                      {/* Icon */}
                      <Typography 
                        className="step-icon"
                        variant="h2" 
                        sx={{ 
                          fontSize: '3rem',
                          mb: 3,
                          transition: 'all 0.4s ease',
                        }}
                      >
                        {step.icon}
                      </Typography>

                      {/* Title */}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 2,
                          color: TEXT_PRIMARY,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: 0,
                            width: 40,
                            height: 2,
                            bgcolor: step.color,
                            borderRadius: 2,
                          }
                        }}
                      >
                        {step.title}
                      </Typography>

                      {/* Description */}
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: TEXT_SECONDARY, 
                          lineHeight: 1.8,
                          fontSize: '0.9rem',
                        }}
                      >
                        {step.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. NAVARASA EXPLORER - Enhanced with link to details page */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Slide direction="down" in timeout={800}>
              <Chip
                label="NAVARASA"
                sx={{
                  bgcolor: alpha(ACCENT, 0.1),
                  color: ACCENT,
                  fontWeight: 600,
                  letterSpacing: 2,
                  border: `1px solid ${alpha(ACCENT, 0.2)}`,
                  mb: 3,
                  px: 2,
                }}
              />
            </Slide>
            <Slide direction="up" in timeout={1000}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700, 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: "linear-gradient(135deg, #FFFFFF, #E0E7FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The Nine Rasas
              </Typography>
            </Slide>
          </Box>
          
          {/* Learn More Button */}
          <Fade in timeout={1200}>
            <Button
              component={RouterLink}
              to="/navarasa"
              variant="outlined"
              endIcon={<MenuBookIcon />}
              sx={{
                borderRadius: '30px',
                borderColor: alpha(ACCENT, 0.3),
                color: TEXT_PRIMARY,
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: ACCENT,
                  bgcolor: alpha(ACCENT, 0.1),
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Explore Detailed Guide
            </Button>
          </Fade>
        </Box>

        {/* Horizontal Scroll Container - Now with links */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 5,
            px: 1,
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: alpha('#FFFFFF', 0.05),
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: alpha(ACCENT, 0.3),
              borderRadius: "10px",
              "&:hover": {
                background: ACCENT,
              }
            },
            scrollBehavior: 'smooth',
          }}
        >
          {rasas.map((rasa, i) => (
            <Zoom in timeout={1200 + i * 100} key={i}>
              <Box
                component={RouterLink}
                to="/navarasa"
                state={{ initialRasa: rasa.id }}
                sx={{
                  minWidth: "300px",
                  height: "400px",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: `1px solid ${alpha('#FFFFFF', 0.1)}`,
                  textDecoration: 'none',
                  display: 'block',
                  '&:hover': {
                    transform: "scale(1.02) translateY(-8px)",
                    borderColor: ACCENT,
                    boxShadow: `0 30px 50px ${alpha(ACCENT, 0.3)}`,
                    '& img': {
                      transform: 'scale(1.1)',
                    },
                    '& .rasa-overlay': {
                      opacity: 0.7,
                    },
                    '& .learn-more-indicator': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    }
                  }
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={rasa.img}
                  alt={rasa.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: 'transform 0.6s ease',
                  }}
                />

                {/* Gradient Overlay */}
                <Box
                  className="rasa-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to top, ${alpha(BG, 0.9)} 0%, transparent 70%)`,
                    opacity: 0.5,
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Learn More Indicator */}
                <Box
                  className="learn-more-indicator"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    bgcolor: alpha(ACCENT, 0.9),
                    color: TEXT_PRIMARY,
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    opacity: 0,
                    transform: 'translateY(-10px)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)',
                    border: `1px solid ${alpha('#FFFFFF', 0.2)}`,
                    zIndex: 3,
                  }}
                >
                  Learn More →
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      mb: 0.5,
                      color: TEXT_PRIMARY,
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}
                  >
                    {rasa.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: ACCENT,
                      fontWeight: 600,
                      letterSpacing: 1,
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}
                  >
                    {rasa.desc}
                  </Typography>
                </Box>

                {/* Accent Border on Hover */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_GLOW})`,
                    transform: 'scaleX(0)',
                    transition: 'transform 0.4s ease',
                    transformOrigin: 'left',
                  }}
                  className="rasa-border"
                />
              </Box>
            </Zoom>
          ))}
        </Box>
        
        {/* Bottom CTA for mobile */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/navarasa"
            variant="contained"
            endIcon={<MenuBookIcon />}
            sx={{
              background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_GLOW})`,
              borderRadius: '30px',
              px: 4,
              py: 1.5,
            }}
          >
            Explore Detailed Guide
          </Button>
        </Box>
      </Container>

      {/* 4. PROFESSIONAL FOOTER - Refined */}
      <Box sx={{ 
        bgcolor: SURFACE, 
        borderTop: `1px solid ${BORDER_COLOR}`, 
        pt: 10, 
        pb: 6,
        position: 'relative',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 2,
                      background: "linear-gradient(135deg, #FFFFFF, #E0E7FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    RASAVISION AI
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_SECONDARY, lineHeight: 1.8, mb: 4, maxWidth: 300 }}>
                    Decoding the aesthetics of Indian classical dance through modern Computer Vision.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {[
                      { icon: GitHubIcon, label: 'GitHub' },
                      { icon: TwitterIcon, label: 'Twitter' },
                      { icon: LinkedInIcon, label: 'LinkedIn' }
                    ].map((Item, idx) => (
                      <IconButton 
                        key={idx}
                        sx={{ 
                          color: TEXT_SECONDARY,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: ACCENT,
                            transform: 'translateY(-3px)',
                            bgcolor: alpha(ACCENT, 0.1),
                          }
                        }}
                      >
                        <Item.icon />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Fade>
            </Grid>

            {/* Links Sections */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {[
                  { 
                    title: "Platform", 
                    links: ["Analyzer", "API Access", "Documentation", "Examples"],
                    icon: <RocketLaunchIcon sx={{ fontSize: 20, color: ACCENT }} />
                  },
                  { 
                    title: "Resources", 
                    links: ["Research Paper", "Datasets", "GitHub", "Cite Us"],
                    icon: <ArchitectureIcon sx={{ fontSize: 20, color: ACCENT }} />
                  },
                  { 
                    title: "Company", 
                    links: ["About Us", "Contact", "Privacy", "Terms"],
                    icon: <TimelineIcon sx={{ fontSize: 20, color: ACCENT }} />
                  }
                ].map((col, i) => (
                  <Grid item xs={6} sm={4} key={i}>
                    <Fade in timeout={1200 + i * 200}>
                      <Box>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                          {col.icon}
                          <Typography variant="body1" sx={{ fontWeight: 600, color: TEXT_PRIMARY }}>
                            {col.title}
                          </Typography>
                        </Stack>
                        <Stack spacing={2}>
                          {col.links.map((link, idx) => (
                            <Link 
                              href="#" 
                              key={idx}
                              variant="body2" 
                              sx={{ 
                                color: TEXT_SECONDARY, 
                                textDecoration: "none",
                                transition: 'all 0.2s ease',
                                cursor: 'pointer',
                                display: 'inline-block',
                                '&:hover': {
                                  color: ACCENT,
                                  transform: 'translateX(5px)',
                                }
                              }}
                            >
                              {link}
                            </Link>
                          ))}
                        </Stack>
                      </Box>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: BORDER_COLOR, my: 6 }} />

          {/* Copyright */}
          <Fade in timeout={2000}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: alpha(TEXT_SECONDARY, 0.5), 
                textAlign: "center", 
                display: "block",
                letterSpacing: 1,
              }}
            >
              © 2026 RasaVision Technologies. Preserving heritage through innovation.
            </Typography>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}

// ✨ PROFESSIONAL 4 FEATURE CARDS - Completely Redesigned
const ProfessionalFeatureCards = () => (
  <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", mt: 8 }}>
    <Grid container spacing={3} justifyContent="center">
      {[
        { 
          icon: DatasetIcon, 
          title: "Dataset", 
          value: "10K+", 
          label: "Images",
          desc: "Curated Kathakali face dataset with expert annotations",
          color: "#10B981",
          stats: "93% accuracy",
          gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), transparent)"
        },
        { 
          icon: SpeedIcon, 
          title: "Speed", 
          value: "28ms", 
          label: "per frame",
          desc: "Real-time processing on CPU - no GPU required",
          color: "#F59E0B",
          stats: "60 FPS capable",
          gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), transparent)"
        },
        { 
          icon: MemoryIcon, 
          title: "Architecture", 
          value: "EfficientNet-B2", 
          label: "CNN",
          desc: "Custom ResNet + Attention for facial micro-expressions",
          color: ACCENT,
          stats: "24M parameters",
          gradient: "linear-gradient(135deg, rgba(99,102,241,0.15), transparent)"
        },
        { 
          icon: VisibilityIcon, 
          title: "Live Demo", 
          value: "Try Now", 
          label: "Interactive",
          desc: "Upload image instantly - results in seconds with detailed analysis",
          color: "#EF4444",
          stats: "9 Rasas detected",
          link: "/predict",
          gradient: "linear-gradient(135deg, rgba(239,68,68,0.15), transparent)"
        }
      ].map((card, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Grow in timeout={1800 + idx * 200}>
            <Card
              sx={{
                bgcolor: alpha('#FFFFFF', 0.02),
                backdropFilter: 'blur(20px)',
                border: `1px solid ${alpha(card.color, 0.15)}`,
                borderRadius: 4,
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: alpha(card.color, 0.3),
                  boxShadow: `0 20px 40px ${alpha(card.color, 0.2)}`,
                  '& .card-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                    bgcolor: alpha(card.color, 0.2),
                  },
                  '& .card-value': {
                    color: card.color,
                  },
                  '& .card-stats': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }
                }
              }}
            >
              {/* Background Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: card.gradient,
                  opacity: 0.5,
                }}
              />

              <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <Box
                  className="card-icon"
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: alpha(card.color, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.4s ease',
                    '& .MuiSvgIcon-root': {
                      fontSize: 32,
                      color: card.color,
                    }
                  }}
                >
                  <card.icon />
                </Box>

                {/* Title */}
                <Typography variant="overline" sx={{ color: alpha(TEXT_PRIMARY, 0.5), fontWeight: 600, letterSpacing: 1 }}>
                  {card.title}
                </Typography>

                {/* Value */}
                <Typography 
                  className="card-value"
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    color: TEXT_PRIMARY,
                    mb: 1,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {card.value}
                  <Typography component="span" variant="body2" sx={{ color: alpha(TEXT_PRIMARY, 0.5), ml: 1 }}>
                    {card.label}
                  </Typography>
                </Typography>

                {/* Description */}
                <Typography variant="body2" sx={{ color: TEXT_SECONDARY, lineHeight: 1.7, mb: 2 }}>
                  {card.desc}
                </Typography>

                {/* Stats Badge */}
                <Box
                  className="card-stats"
                  sx={{
                    display: 'inline-block',
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    bgcolor: alpha(card.color, 0.1),
                    border: `1px solid ${alpha(card.color, 0.2)}`,
                    opacity: 0.7,
                    transform: 'translateY(0)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography variant="caption" sx={{ color: card.color, fontWeight: 600 }}>
                    {card.stats}
                  </Typography>
                </Box>

                {/* Link Button */}
                {card.link && (
                  <Button
                    component={RouterLink}
                    to={card.link}
                    variant="text"
                    sx={{
                      mt: 2,
                      color: card.color,
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: alpha(card.color, 0.1),
                      }
                    }}
                  >
                    Try Demo →
                  </Button>
                )}
              </CardContent>

              {/* Animated Border */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s ease',
                }}
                className="card-border"
              />
            </Card>
          </Grow>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Home;