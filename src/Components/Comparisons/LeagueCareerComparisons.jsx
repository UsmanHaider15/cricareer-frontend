import React from "react";
import LeaguePlayersBattingAveragesComparison from "./LeaguePlayersBattingAveragesComparison";
import LeaguePlayersBowlingAveragesComparison from "./LeaguePlayersBowlingAveragesComparison";
import Grid from "@material-ui/core/Grid";

const LeagueCareerComparisons = ({ firstPlayer, secondPlayer, leagueName }) => {
  return (
    <Grid container>
      <LeaguePlayersBattingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        leagueName={leagueName}
      />
      <LeaguePlayersBowlingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        leagueName={leagueName}
      />
    </Grid>
  );
};

export default LeagueCareerComparisons;
