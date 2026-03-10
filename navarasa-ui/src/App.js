import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>

      {/* Navbar visible for user pages */}
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/predict" element={<Predict />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

        {/* Hidden Admin Page (no link in navbar) */}
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

      {/* Footer visible for user pages */}
      <Footer />

    </Router>
  );
}

export default App;