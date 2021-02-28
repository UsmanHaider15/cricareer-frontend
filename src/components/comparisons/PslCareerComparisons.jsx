import React from "react";
import PslPlayersBattingAveragesComparison from "./PslPlayersBattingAveragesComparison";
import PslPlayersBowlingAveragesComparison from "./PslPlayersBowlingAveragesComparison";
import Grid from "@material-ui/core/Grid";

const PslCareerComparisons = ({ firstPlayer, secondPlayer }) => {
  return (
    <Grid container>
      <PslPlayersBattingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
      <PslPlayersBowlingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
    </Grid>
  );
};

export default PslCareerComparisons;
