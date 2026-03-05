import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {

  return (
    <AppBar 
      position="static" 
      elevation={0}
      style={{background:"#ffffff", color:"#000"}}
    >
      <Toolbar>

        <Logo />

        <div style={{flexGrow:1}}/>

        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/predict">Predict</Button>
        <Button component={Link} to="/dashboard">Dashboard</Button>
        <Button component={Link} to="/about">About</Button>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;