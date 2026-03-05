import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const THEME_CORAL = "#FF6C6C";
const THEME_MAGENTA = "#FF007D";

function Navbar() {

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Predict", path: "/predict" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" }
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(12,12,12,0.75)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1250px",
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.2
        }}
      >

        {/* LOGO */}
        <Typography
          component={NavLink}
          to="/"
          sx={{
            fontSize: "1.8rem",
            fontWeight: 800,
            textDecoration: "none",
            letterSpacing: "1px",
            background: `linear-gradient(45deg, ${THEME_CORAL}, ${THEME_MAGENTA})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          RasaVision
        </Typography>


        {/* NAV LINKS */}
        <Box sx={{ display: "flex", gap: 5 }}>

          {navItems.map((item, index) => (

            <Typography
              key={index}
              component={NavLink}
              to={item.path}
              sx={{
                textDecoration: "none",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.95rem",
                fontWeight: 500,
                letterSpacing: "0.5px",
                position: "relative",
                transition: "0.3s",

                "&:hover": {
                  color: "#fff"
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  left: 0,
                  bottom: -4,
                  background: `linear-gradient(90deg, ${THEME_CORAL}, ${THEME_MAGENTA})`,
                  transition: "0.3s"
                },

                "&:hover::after": {
                  width: "100%"
                },

                "&.active": {
                  color: "#fff"
                },

                "&.active::after": {
                  width: "100%"
                }
              }}
            >
              {item.name}
            </Typography>

          ))}

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;