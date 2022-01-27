import React from "react";
import PlayerStatCard from "./PlayerStatCard";
import StatCards from "./StatCards";
import Cover from "./Cover";

const Home = () => {
  return (
    <React.Fragment>
      <Cover />
      <StatCards />
      <PlayerStatCard />
    </React.Fragment>
  );
};

export default Home;
