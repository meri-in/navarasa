import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

const ACCENT = "#6366F1";
const DEEP_BLACK = "#000000"; // Pure black for the background

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Navarasa", path: "/navarasa" }, // Added Navarasa here
    { name: "Predict", path: "/predict" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" }
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        // Changed to pure black with slight transparency for the blur effect
        background: "rgba(0, 0, 0, 0.9)", 
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)", // Slightly brighter border for black background
        zIndex: 1100
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1
          }}
        >
          {/* LOGO */}
          <Typography
            component={NavLink}
            to="/"
            sx={{
              fontSize: "1.4rem",
              fontWeight: 900,
              textDecoration: "none",
              color: "white",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <Box 
              sx={{ 
                width: 32, 
                height: 32, 
                bgcolor: ACCENT, 
                borderRadius: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              R
            </Box>
            RasaVision
          </Typography>

          {/* NAVIGATION */}
          <Box sx={{ display: "flex", gap: { xs: 2, md: 5 } }}>
            {navItems.map((item, index) => (
              <Box
                key={index}
                component={NavLink}
                to={item.path}
                sx={{
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  position: "relative",
                  transition: "0.3s all ease",

                  "&:hover": {
                    color: "white"
                  },

                  // REMOVED THE SPECIAL PURPLE STYLING FOR NAVARASA
                  // Now Navarasa will use the same styles as other links

                  // Hover/Active Underline Effect
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: -8,
                    background: "white", // Changed to always use white for all links
                    transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderRadius: "10px"
                  },

                  "&:hover::after": {
                    width: "100%"
                  },

                  "&.active": {
                    color: "white" // All links become white when active
                  },

                  "&.active::after": {
                    width: "100%"
                  }
                }}
              >
                {item.name}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;