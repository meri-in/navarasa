import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Chip,
  Divider,
  Avatar,
  Stack,
  Fade,
  Slide,
  Zoom,
  Grow,
  alpha,
  useTheme,
  Card,
  CardContent,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  Psychology as PsychologyIcon,
  Visibility as VisibilityIcon,
  Analytics as AnalyticsIcon,
  SmartToy as SmartToyIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  Science as ScienceIcon,
  Timeline as TimelineIcon,
  Dashboard as DashboardIcon,
  GitHub as GitHubIcon,
  MenuBook as MenuBookIcon,
  School as SchoolIcon,
  RocketLaunch as RocketLaunchIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";

const emotions = [
  { name: "Adbhutha", meaning: "Wonder", color: "#6366F1", icon: "😲" },
  { name: "Bhayaanaka", meaning: "Fear", color: "#EF4444", icon: "😨" },
  { name: "Bheebhatsya", meaning: "Disgust", color: "#10B981", icon: "🤢" },
  { name: "Hasya", meaning: "Laughter", color: "#F59E0B", icon: "😄" },
  { name: "Karuna", meaning: "Compassion", color: "#EC4899", icon: "😢" },
  { name: "Roudra", meaning: "Anger", color: "#DC2626", icon: "😠" },
  { name: "Shaanta", meaning: "Peace", color: "#8B5CF6", icon: "😌" },
  { name: "Shringaara", meaning: "Love", color: "#F472B6", icon: "🌸" },
  { name: "Veera", meaning: "Heroism", color: "#F97316", icon: "🦁" }
];

function About() {
  const theme = useTheme();

  return (
    <Box sx={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${alpha('#1a0d2e', 0.98)} 0%, ${alpha('#2d1b69', 0.95)} 50%, ${alpha('#1e1b4b', 0.98)} 100%)`,
      py: 8,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background elements */}
      <Box sx={{
        position: 'absolute',
        top: '5%',
        left: '10%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        animation: 'float 20s infinite',
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
        animation: 'float 15s infinite reverse',
      }} />
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={8}>
            <Zoom in timeout={800}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto 24px',
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  boxShadow: '0 20px 40px rgba(99,102,241,0.4)',
                }}
              >
                <ScienceIcon sx={{ fontSize: 60 }} />
              </Avatar>
            </Zoom>
            
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4rem' },
                background: 'linear-gradient(135deg, #FFFFFF 0%, #C7D2FE 50%, #A5B4FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textShadow: '0 2px 20px rgba(99,102,241,0.3)',
              }}
            >
              About RasaVision
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: alpha('#FFFFFF', 0.7),
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              AI-powered Navarasa Emotion Detection using Deep Learning and Explainable AI
            </Typography>

            <Box sx={{ mt: 4 }}>

              <Chip
                icon={<SchoolIcon />}
                label="Academic Project"
                sx={{
                  background: alpha('#6366F1', 0.2),
                  color: '#6366F1',
                  border: '1px solid rgba(99,102,241,0.3)',
                  mr: 2,
                }}
              />
              <Chip
                icon={<RocketLaunchIcon />}
                label="Production Ready"
                sx={{
                  background: alpha('#EC4899', 0.2),
                  color: '#EC4899',
                  border: '1px solid rgba(236,72,153,0.3)',
                }}
              />
            </Box>
          </Box>
        </Fade>

        {/* Project Overview */}
        <Slide direction="right" in timeout={1200}>
          <Paper sx={{
            p: 5,
            borderRadius: 4,
            mb: 6,
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            },
          }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
              <Avatar sx={{ bgcolor: alpha('#6366F1', 0.2), width: 56, height: 56 }}>
                <ScienceIcon sx={{ color: '#6366F1', fontSize: 32 }} />
              </Avatar>
              <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                Project Overview
              </Typography>
            </Stack>
            <Typography sx={{ color: alpha('#FFFFFF', 0.8), lineHeight: 1.8, fontSize: '1.1rem' }}>
              RasaVision is an artificial intelligence system developed to detect the
              nine classical Navarasa emotions from facial expressions. The system uses
              a deep convolutional neural network based on EfficientNetB2 to perform
              accurate emotion classification. To enhance interpretability, Grad-CAM
              visualization highlights the facial regions influencing each prediction,
              making the system transparent and explainable.
            </Typography>
          </Paper>
        </Slide>

        {/* Navarasa Emotions */}
        <Box mb={8}>
          <Slide direction="up" in timeout={1400}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
              <Avatar sx={{ bgcolor: alpha('#EC4899', 0.2), width: 48, height: 48 }}>
                <EmojiEmotionsIcon sx={{ color: '#EC4899' }} />
              </Avatar>
              <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                Recognized Navarasa Emotions
              </Typography>
            </Stack>
          </Slide>

          <Grid container spacing={3}>
            {emotions.map((emotion, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Zoom in timeout={1600 + index * 100}>
                  <Paper sx={{
                    p: 3,
                    background: `linear-gradient(135deg, ${alpha(emotion.color, 0.1)} 0%, rgba(255,255,255,0.02) 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(emotion.color, 0.2)}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      borderColor: emotion.color,
                      boxShadow: `0 20px 40px ${alpha(emotion.color, 0.3)}`,
                      '& .emotion-icon': {
                        transform: 'scale(1.2) rotate(5deg)',
                      },
                    },
                  }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography className="emotion-icon" variant="h2" sx={{ 
                        transition: 'transform 0.3s ease',
                      }}>
                        {emotion.icon}
                      </Typography>
                      <Box>
                        <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                          {emotion.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: emotion.color }}>
                          {emotion.meaning}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technology Stack */}
        <Box mb={8}>
          <Slide direction="up" in timeout={1800}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
              <Avatar sx={{ bgcolor: alpha('#10B981', 0.2), width: 48, height: 48 }}>
                <SmartToyIcon sx={{ color: '#10B981' }} />
              </Avatar>
              <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                Technology Stack
              </Typography>
            </Stack>
          </Slide>

          <Grid container spacing={4}>
            {[
              {
                icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
                title: "Deep Learning",
                desc: "EfficientNetB2 CNN model for emotion recognition",
                color: "#6366F1",
                features: ["Transfer Learning", "95% Accuracy", "Real-time"],
              },
              {
                icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
                title: "Explainable AI",
                desc: "Grad-CAM visualization explains model predictions",
                color: "#EC4899",
                features: ["Heatmaps", "Feature Attribution", "Transparent"],
              },
              {
                icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
                title: "Analytics Dashboard",
                desc: "Real-time emotion analytics and prediction insights",
                color: "#10B981",
                features: ["Live Updates", "Charts", "Export Data"],
              },
              {
                icon: <TimelineIcon sx={{ fontSize: 40 }} />,
                title: "AI Pipeline",
                desc: "Preprocessing → Prediction → GradCAM → Analytics",
                color: "#F59E0B",
                features: ["Optimized", "Scalable", "Modular"],
              },
            ].map((tech, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in timeout={2000 + index * 200}>
                  <Paper sx={{
                    p: 4,
                    height: '100%',
                    background: `linear-gradient(135deg, ${alpha(tech.color, 0.1)} 0%, rgba(255,255,255,0.02) 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(tech.color, 0.2)}`,
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      borderColor: tech.color,
                      boxShadow: `0 30px 60px ${alpha(tech.color, 0.3)}`,
                      '& .tech-icon': {
                        transform: 'scale(1.1) rotate(360deg)',
                      },
                    },
                  }}>
                    <Stack alignItems="center" textAlign="center" spacing={2}>
                      <Box
                        className="tech-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: alpha(tech.color, 0.2),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: tech.color,
                          transition: 'transform 0.6s ease',
                          mb: 2,
                        }}
                      >
                        {tech.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                        {tech.title}
                      </Typography>
                      <Typography sx={{ color: alpha('#FFFFFF', 0.7), fontSize: '0.9rem' }}>
                        {tech.desc}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                        {tech.features.map((feature, i) => (
                          <Chip
                            key={i}
                            label={feature}
                            size="small"
                            sx={{
                              background: alpha(tech.color, 0.1),
                              color: tech.color,
                              border: `1px solid ${alpha(tech.color, 0.2)}`,
                              mt: 1,
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </Paper>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* System Workflow */}
        <Slide direction="up" in timeout={2200}>
          <Paper sx={{
            p: 4,
            borderRadius: 4,
            mb: 6,
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
              <Avatar sx={{ bgcolor: alpha('#8B5CF6', 0.2) }}>
                <TimelineIcon sx={{ color: '#8B5CF6' }} />
              </Avatar>
              <Typography variant="h5" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                System Workflow
              </Typography>
            </Stack>
            
            <Grid container spacing={2} alignItems="center">
              {['Image Upload', 'Face Processing', 'EfficientNetB2', 'Emotion Prediction', 'Grad-CAM', 'Analytics'].map((step, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <Paper sx={{
                    p: 2,
                    textAlign: 'center',
                    background: alpha('#8B5CF6', 0.1),
                    border: `1px solid ${alpha('#8B5CF6', 0.2)}`,
                    borderRadius: 2,
                    position: 'relative',
                  }}>
                    <Typography variant="body2" sx={{ color: '#8B5CF6', fontWeight: 600 }}>
                      {step}
                    </Typography>
                    {index < 5 && (
                      <Typography
                        sx={{
                          position: 'absolute',
                          right: -16,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: alpha('#FFFFFF', 0.3),
                          fontSize: '20px',
                        }}
                      >
                        →
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Slide>

        {/* Dataset & Model */}
        <Slide direction="up" in timeout={2400}>
          <Paper sx={{
            p: 4,
            borderRadius: 4,
            mb: 6,
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
              <Avatar sx={{ bgcolor: alpha('#10B981', 0.2) }}>
                <MenuBookIcon sx={{ color: '#10B981' }} />
              </Avatar>
              <Typography variant="h5" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                Dataset & Model Architecture
              </Typography>
            </Stack>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  p: 3,
                  background: alpha('#6366F1', 0.1),
                  borderRadius: 3,
                  border: '1px solid rgba(99,102,241,0.2)',
                }}>
                  <Typography variant="h6" sx={{ color: '#6366F1', mb: 2 }}>
                    Dataset Statistics
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      { label: 'Total Images', value: '15,000+' },
                      { label: 'Emotion Classes', value: '9' },
                      { label: 'Expert Annotations', value: '3,000+' },
                      { label: 'Validation Split', value: '20%' },
                    ].map((stat, idx) => (
                      <Stack key={idx} direction="row" justifyContent="space-between">
                        <Typography sx={{ color: alpha('#FFFFFF', 0.7) }}>{stat.label}</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>{stat.value}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  p: 3,
                  background: alpha('#EC4899', 0.1),
                  borderRadius: 3,
                  border: '1px solid rgba(236,72,153,0.2)',
                }}>
                  <Typography variant="h6" sx={{ color: '#EC4899', mb: 2 }}>
                    Model Performance
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      { label: 'Accuracy', value: '94.8%' },
                      { label: 'Precision', value: '93.2%' },
                      { label: 'Recall', value: '92.7%' },
                      { label: 'F1 Score', value: '92.9%' },
                    ].map((stat, idx) => (
                      <Stack key={idx} direction="row" justifyContent="space-between">
                        <Typography sx={{ color: alpha('#FFFFFF', 0.7) }}>{stat.label}</Typography>
                        <Typography sx={{ color: '#FFFFFF', fontWeight: 700 }}>{stat.value}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Slide>

        {/* Footer */}
        <Fade in timeout={2600}>
          <Box>
            <Divider sx={{ bgcolor: alpha('#FFFFFF', 0.1), mb: 4 }} />
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography sx={{ color: alpha('#FFFFFF', 0.5) }}>
                © 2026 RasaVision — AI Navarasa Emotion Detection
              </Typography>
              <Stack direction="row" spacing={2}>
                <Tooltip title="View on GitHub">
                  <IconButton sx={{ color: alpha('#FFFFFF', 0.7), '&:hover': { color: '#FFFFFF' } }}>
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Research Paper">
                  <IconButton sx={{ color: alpha('#FFFFFF', 0.7), '&:hover': { color: '#FFFFFF' } }}>
                    <MenuBookIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Documentation">
                  <IconButton sx={{ color: alpha('#FFFFFF', 0.7), '&:hover': { color: '#FFFFFF' } }}>
                    <SchoolIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>
        </Fade>
      </Container>

      {/* Animation styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
        `}
      </style>
    </Box>
  );
}

export default About;