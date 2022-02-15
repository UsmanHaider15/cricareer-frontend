import { Box, Grid } from "@mui/material";
import Breadcrumb from "Components/Common/Breadcrumb";
import React from "react";
import LeagueBattingStats from "./LeagueBattingStats";
import LeagueBowlingStats from "./LeagueBowlingStats";

const leagueNameLookup = {
  lpl: "Lanka Premier League",
  psl: "Pakistan Super League",
  ipl: "Indian Premier League",
  cpl: "Caribbean Premier League",
  bbl: "Big Bash League",
  bpl: "Bangladesh Premier League",
  t20_blast: "T20 Blast League",
  super_smash: "Super Smash League",
};

const LeagueStats = ({ leagueName }) => {
  return (
    <Box sx={{ padding: { xs: 2 }, paddingRight: { xs: 0, md: 1 } }}>
      <Box sx={{ paddingRight: { xs: 2 } }}>
        <Breadcrumb leagueName={leagueName} type="league" />
      </Box>

      <Box sx={{ fontSize: { xs: 32, md: 48 }, fontWeight: "bolder" }}>
        {leagueNameLookup[leagueName]}
      </Box>
      <Grid container spacing={1}>
        <LeagueBattingStats leagueName={leagueName} />
        <LeagueBowlingStats leagueName={leagueName} />
      </Grid>
    </Box>
  );
};

export default LeagueStats;
