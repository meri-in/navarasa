import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {

    axios.get("http://127.0.0.1:5000/dashboard-data")
      .then(res => setData(res.data));

  }, []);

  if (!data) return <div>Loading...</div>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Navarasa Predictions",
        data: data.values
      }
    ]
  };

  return (
    <Container style={{ marginTop: 40 }}>

      <Typography variant="h4">
        Analytics Dashboard
      </Typography>

      <Bar data={chartData} />

    </Container>
  );
}

export default Dashboard;