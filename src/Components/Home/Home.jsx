import React from "react";
import PlayerStatCard from "./PlayerStatCard";
import StatCards from "./StatCards";
import Cover from "./Cover";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <React.Fragment>
      <Cover />
      <Grid container sx={{ zIndex: 10, marginTop: -5 }}>
        <Grid item md={2} />
        <Grid item xs={12} md={8}>
          <StatCards />
          <PlayerStatCard />
        </Grid>
        <Grid item md={2} />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
