import React from "react";
import Grid from "@material-ui/core/Grid";
import IccPlayersBattingAveragesComparison from "./Comparisons/IccPlayersBattingAveragesComparison";
import IccPlayersBowlingAveragesComparison from "./Comparisons/IccPlayersBowlingAveragesComparison";

export default function IccCareerComparisons({ firstPlayer, secondPlayer }) {
  return (
    <Grid container>
      <IccPlayersBattingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
      <IccPlayersBowlingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
    </Grid>
  );
}
