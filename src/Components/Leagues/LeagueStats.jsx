import { Box, Grid } from "@mui/material";
import Breadcrumb from "Components/Common/Breadcrumb";
import React from "react";
import LeagueBattingStats from "./LeagueBattingStats";
import LeagueBowlingStats from "./LeagueBowlingStats";

const LeagueStats = ({ leagueName }) => {
  return (
    <Box sx={{ padding: { xs: 2 } }}>
      <Breadcrumb leagueName={leagueName} type="league" />
      <Grid container spacing={1}>
        <LeagueBattingStats leagueName={leagueName} />
        <LeagueBowlingStats leagueName={leagueName} />
      </Grid>
    </Box>
  );
};

export default LeagueStats;
