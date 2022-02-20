import React from "react";
import PlayerStatCard from "./PlayerStatCard";
import StatCards from "./StatCards";
import Cover from "./Cover";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <React.Fragment>
      <Cover />
      <Grid
        container
        sx={{
          zIndex: 10,
          marginTop: -5,
        }}
      >
        <Grid item md={2} sx={{ backgroundColor: "#f0f0f0", marginTop: 5 }} />
        <Grid item xs={12} md={8}>
          <StatCards />
          <Paper sx={{ padding: 1 }}>
            <PlayerStatCard />
          </Paper>
        </Grid>
        <Grid item md={2} sx={{ backgroundColor: "#f0f0f0", marginTop: 5 }} />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
