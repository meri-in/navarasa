import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={4} sx={{ padding: 4 }}>
        
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Have questions about Navarasa Emotion Detection? Send us a message.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>

          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            margin="normal"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>

        </Box>

      </Paper>
    </Container>
  );
}

export default Contact;