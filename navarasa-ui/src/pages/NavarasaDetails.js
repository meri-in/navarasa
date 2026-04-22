import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  Chip,
  Grid,
  Link,
  Paper,
  Fade,
  Zoom,
  alpha,
  Card,
  CardContent,
  Breadcrumbs,
  useScrollTrigger,
  Fab,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SpaIcon from '@mui/icons-material/Spa';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WavesIcon from '@mui/icons-material/Waves';
import TerrainIcon from '@mui/icons-material/Terrain';
import GrainIcon from '@mui/icons-material/Grain';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { keyframes } from '@mui/system';

// Color Palette
const BG = "#0A0A0A";
const SURFACE = "#121212";
const TEXT_PRIMARY = "#FFFFFF";
const TEXT_SECONDARY = "#A1A1AA";

// Rasa-specific colors
const RASA_COLORS = {
  shringara: "#FF69B4",
  hasya: "#FFD700",
  karuna: "#87CEEB",
  raudra: "#FF4500",
  veera: "#FFD700",
  bhayanaka: "#4B0082",
  bibhatsa: "#8B4513",
  adbhuta: "#FF8C00",
  shanta: "#98FB98"
};

const RASA_GRADIENTS = {
  shringara: "linear-gradient(135deg, #FF69B4, #FF1493)",
  hasya: "linear-gradient(135deg, #FFD700, #FFA500)",
  karuna: "linear-gradient(135deg, #87CEEB, #4169E1)",
  raudra: "linear-gradient(135deg, #FF4500, #DC143C)",
  veera: "linear-gradient(135deg, #FFD700, #DAA520)",
  bhayanaka: "linear-gradient(135deg, #4B0082, #800080)",
  bibhatsa: "linear-gradient(135deg, #8B4513, #654321)",
  adbhuta: "linear-gradient(135deg, #FF8C00, #FF4500)",
  shanta: "linear-gradient(135deg, #98FB98, #3CB371)"
};

// Animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Element icons
const elementIcons = {
  Water: <WavesIcon fontSize="small" />,
  Earth: <TerrainIcon fontSize="small" />,
  Fire: <WhatshotIcon fontSize="small" />,
  Air: <GrainIcon fontSize="small" />,
  Space: <AutoStoriesIcon fontSize="small" />
};

// Time icons
const timeIcons = {
  Morning: <WbSunnyIcon fontSize="small" />,
  Afternoon: <WbSunnyIcon fontSize="small" />,
  Evening: <NightsStayIcon fontSize="small" />,
  Night: <NightsStayIcon fontSize="small" />,
  Dawn: <WbSunnyIcon fontSize="small" />,
  Dusk: <NightsStayIcon fontSize="small" />,
  "Dawn/Dusk": <AcUnitIcon fontSize="small" />,
  Midnight: <NightsStayIcon fontSize="small" />
};

// Rasa data
const rasas = [
  {
    id: "shringara",
    img: "/images/sringaram.png",
    name: "Shringara",
    desc: "Love & Beauty",
    sanskrit: "शृङ्गार",
    pronunciation: "shring-GAH-rah",
    detailedDesc: "Shringara is the rasa of love, beauty, and attraction. It encompasses both romantic love and divine love. In Indian aesthetics, it's considered the king of rasas.",
    color: RASA_COLORS.shringara,
    gradient: RASA_GRADIENTS.shringara,
    deity: "Vishnu",
    element: "Water",
    timeOfDay: "Evening"
  },
  {
    id: "hasya",
    img: "/images/hasyam.png",
    name: "Hasya",
    desc: "Laughter & Mirth",
    sanskrit: "हास्य",
    pronunciation: "HAHS-yah",
    detailedDesc: "Hasya is the rasa of comedy, laughter, and mirth. It arises from funny situations or humorous speech. In classical performances, it often serves as relief between intense emotional scenes.",
    color: RASA_COLORS.hasya,
    gradient: RASA_GRADIENTS.hasya,
    deity: "Pramatha",
    element: "Earth",
    timeOfDay: "Afternoon"
  },
  {
    id: "karuna",
    img: "/images/karuna.png",
    name: "Karuna",
    desc: "Compassion",
    sanskrit: "करुण",
    pronunciation: "KAH-roo-nah",
    detailedDesc: "Karuna is the rasa of pathos, compassion, and sadness. It arises from loss, separation from loved ones, or witnessing suffering.",
    color: RASA_COLORS.karuna,
    gradient: RASA_GRADIENTS.karuna,
    deity: "Yama",
    element: "Water",
    timeOfDay: "Night"
  },
  {
    id: "raudra",
    img: "/images/rowdram.png",
    name: "Raudra",
    desc: "Anger",
    sanskrit: "रौद्र",
    pronunciation: "ROWD-rah",
    detailedDesc: "Raudra is the rasa of anger, fury, and outrage. It arises from situations of injustice, insult, or provocation.",
    color: RASA_COLORS.raudra,
    gradient: RASA_GRADIENTS.raudra,
    deity: "Rudra",
    element: "Fire",
    timeOfDay: "Midnight"
  },
  {
    id: "veera",
    img: "/images/veeram.png",
    name: "Veera",
    desc: "Heroism",
    sanskrit: "वीर",
    pronunciation: "VEE-rah",
    detailedDesc: "Veera is the rasa of heroism, courage, and valor. It arises from determination, energy, and the spirit of adventure.",
    color: RASA_COLORS.veera,
    gradient: RASA_GRADIENTS.veera,
    deity: "Indra",
    element: "Fire",
    timeOfDay: "Morning"
  },
  {
    id: "bhayanaka",
    img: "/images/bhayanakam.png",
    name: "Bhayanaka",
    desc: "Fear",
    sanskrit: "भयानक",
    pronunciation: "bhah-YAH-nah-kah",
    detailedDesc: "Bhayanaka is the rasa of fear, terror, and anxiety. It arises from encountering danger, supernatural beings, or threatening situations.",
    color: RASA_COLORS.bhayanaka,
    gradient: RASA_GRADIENTS.bhayanaka,
    deity: "Yama",
    element: "Air",
    timeOfDay: "Night"
  },
  {
    id: "bibhatsa",
    img: "/images/bhibhatsam.png",
    name: "Bibhatsa",
    desc: "Disgust",
    sanskrit: "बीभत्स",
    pronunciation: "bee-BHAT-sah",
    detailedDesc: "Bibhatsa is the rasa of disgust, revulsion, and aversion. It arises from encountering unpleasant sights, sounds, or smells.",
    color: RASA_COLORS.bibhatsa,
    gradient: RASA_GRADIENTS.bibhatsa,
    deity: "Shiva",
    element: "Earth",
    timeOfDay: "Afternoon"
  },
  {
    id: "adbhuta",
    img: "/images/adbhutam.png",
    name: "Adbhuta",
    desc: "Wonder",
    sanskrit: "अद्भुत",
    pronunciation: "ad-BHOO-tah",
    detailedDesc: "Adbhuta is the rasa of wonder, amazement, and surprise. It arises from witnessing supernatural events, miracles, or extraordinary beauty.",
    color: RASA_COLORS.adbhuta,
    gradient: RASA_GRADIENTS.adbhuta,
    deity: "Brahma",
    element: "Space",
    timeOfDay: "Dawn"
  },
  {
    id: "shanta",
    img: "/images/shantam.png",
    name: "Shanta",
    desc: "Peace",
    sanskrit: "शान्त",
    pronunciation: "SHAHN-tah",
    detailedDesc: "Shanta is the rasa of peace, tranquility, and spiritual liberation. It's considered the highest rasa, arising from detachment and self-realization.",
    color: RASA_COLORS.shanta,
    gradient: RASA_GRADIENTS.shanta,
    deity: "Vishnu",
    element: "Space",
    timeOfDay: "Dawn/Dusk"
  }
];

// Scroll to top
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ threshold: 100 });

  return (
    <Zoom in={trigger}>
      <Box onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        {children}
      </Box>
    </Zoom>
  );
}

function NavarasaDetails() {
  const location = useLocation();
  const [selectedRasa, setSelectedRasa] = useState(rasas[0]);

  useEffect(() => {
    if (location.state?.initialRasa) {
      const rasa = rasas.find(r => r.id === location.state.initialRasa);
      if (rasa) setSelectedRasa(rasa);
    }
  }, [location.state]);

  const handleNext = () => {
    const currentIndex = rasas.findIndex(r => r.id === selectedRasa.id);
    setSelectedRasa(rasas[(currentIndex + 1) % rasas.length]);
  };

  const handlePrevious = () => {
    const currentIndex = rasas.findIndex(r => r.id === selectedRasa.id);
    setSelectedRasa(rasas[(currentIndex - 1 + rasas.length) % rasas.length]);
  };

  return (
    <Box sx={{ bgcolor: BG, color: TEXT_PRIMARY, minHeight: "100vh" }}>
      {/* Dynamic Background */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 50%, ${alpha(selectedRasa.color, 0.05)} 0%, transparent 60%)`,
        transition: 'background 0.3s',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Header */}
      <Box sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 10, 
        bgcolor: alpha(SURFACE, 0.8), 
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${alpha(selectedRasa.color, 0.2)}`,
        py: 1.5
      }}>
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Breadcrumbs>
              <Link component={RouterLink} to="/" color={TEXT_SECONDARY} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <HomeIcon fontSize="small" /> Home
              </Link>
              <Typography color={selectedRasa.color}>Navarasa</Typography>
            </Breadcrumbs>
            <Button 
              component={RouterLink} 
              to="/predict" 
              variant="contained" 
              size="small"
              sx={{ 
                background: selectedRasa.gradient,
                borderRadius: 3,
                px: 2,
                textTransform: 'none'
              }}
            >
              Try Analysis
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 3, position: 'relative', zIndex: 1 }}>
        {/* Nine Rasas Row - Compact */}
        <Box sx={{ 
          display: 'flex',
          gap: 1,
          justifyContent: 'space-between',
          mb: 3,
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}>
          {rasas.map((rasa) => (
            <Zoom in key={rasa.id}>
              <Card
                onClick={() => setSelectedRasa(rasa)}
                sx={{
                  flex: { xs: '0 0 calc(33.33% - 8px)', sm: '0 0 calc(20% - 8px)', md: '0 0 calc(11.11% - 8px)' },
                  bgcolor: selectedRasa.id === rasa.id ? alpha(rasa.color, 0.15) : alpha(SURFACE, 0.6),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(rasa.color, selectedRasa.id === rasa.id ? 0.5 : 0.1)}`,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: rasa.color,
                  }
                }}
              >
                <CardContent sx={{ p: 1, textAlign: 'center' }}>
                  <Box sx={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    background: rasa.gradient,
                    mx: 'auto',
                    mb: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Typography variant="caption" sx={{ color: '#000', fontWeight: 'bold' }}>
                      {rasa.name.charAt(0)}
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ 
                    fontWeight: 600,
                    display: 'block',
                    color: selectedRasa.id === rasa.id ? rasa.color : TEXT_PRIMARY,
                    fontSize: '0.7rem'
                  }}>
                    {rasa.name}
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: TEXT_SECONDARY,
                    display: { xs: 'none', sm: 'block' },
                    fontSize: '0.6rem'
                  }}>
                    {rasa.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          ))}
        </Box>

        {/* Main Content - Two Column Layout */}
        <Grid container spacing={3}>
          {/* Left - Image */}
          <Grid item xs={12} md={5}>
            <Paper sx={{
              bgcolor: alpha(SURFACE, 0.6),
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(selectedRasa.color, 0.2)}`,
              borderRadius: 3,
              overflow: 'hidden',
              height: 450,
              position: 'relative'
            }}>
              <Box sx={{
                height: '100%',
                background: `url(${selectedRasa.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, ${alpha(selectedRasa.color, 0.2)}, transparent)`,
                }
              }} />
            </Paper>
          </Grid>

          {/* Right - Info */}
          <Grid item xs={12} md={7}>
            <Paper sx={{
              bgcolor: alpha(SURFACE, 0.6),
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(selectedRasa.color, 0.2)}`,
              borderRadius: 3,
              p: 3,
              height: 450,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <Chip 
                  label={selectedRasa.sanskrit} 
                  size="small"
                  sx={{ 
                    bgcolor: alpha(selectedRasa.color, 0.15),
                    color: selectedRasa.color,
                    border: `1px solid ${alpha(selectedRasa.color, 0.3)}`,
                    fontWeight: 600
                  }} 
                />
                <Typography variant="caption" sx={{ color: TEXT_SECONDARY }}>
                  {selectedRasa.pronunciation}
                </Typography>
              </Stack>

              <Typography variant="h3" sx={{ 
                fontWeight: 700, 
                mb: 0.5,
                background: `linear-gradient(135deg, ${TEXT_PRIMARY}, ${selectedRasa.color})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '2.5rem',
                lineHeight: 1.2
              }}>
                {selectedRasa.name}
              </Typography>

              <Typography sx={{ color: selectedRasa.color, fontWeight: 500, mb: 2 }}>
                {selectedRasa.desc}
              </Typography>

              <Typography sx={{ color: TEXT_SECONDARY, lineHeight: 1.6, mb: 3, flex: 1 }}>
                {selectedRasa.detailedDesc}
              </Typography>

              {/* Meta Info */}
              <Grid container spacing={2}>
                {[
                  { label: 'Deity', value: selectedRasa.deity, icon: <SpaIcon fontSize="small" /> },
                  { label: 'Element', value: selectedRasa.element, icon: elementIcons[selectedRasa.element] },
                  { label: 'Time', value: selectedRasa.timeOfDay, icon: timeIcons[selectedRasa.timeOfDay] }
                ].map((item, idx) => (
                  <Grid item xs={4} key={idx}>
                    <Paper sx={{
                      bgcolor: alpha(selectedRasa.color, 0.05),
                      border: `1px solid ${alpha(selectedRasa.color, 0.1)}`,
                      borderRadius: 2,
                      p: 1,
                      textAlign: 'center'
                    }}>
                      <Box sx={{ color: selectedRasa.color, mb: 0.5 }}>{item.icon}</Box>
                      <Typography variant="caption" sx={{ color: TEXT_SECONDARY, display: 'block' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
                        {item.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Navigation */}
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button startIcon={<ArrowBackIcon />} onClick={handlePrevious} sx={{ color: TEXT_SECONDARY }}>
            Previous
          </Button>
          <Button endIcon={<ArrowForwardIcon />} onClick={handleNext} sx={{ color: TEXT_SECONDARY }}>
            Next
          </Button>
        </Stack>
      </Container>

      <ScrollTop>
        <Fab size="small" sx={{ background: selectedRasa.gradient }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

export default NavarasaDetails;