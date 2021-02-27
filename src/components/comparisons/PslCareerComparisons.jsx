import React from "react";
import PslPlayersBattingAveragesComparison from "./PslPlayersBattingAveragesComparison";
import PslPlayersBowlingAveragesComparison from "./PslPlayersBowlingAveragesComparison";

const PslCareerComparisons = ({ firstPlayer, secondPlayer }) => {
  return (
    <div>
      <PslPlayersBattingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
      <PslPlayersBowlingAveragesComparison
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
    </div>
  );
};

export default PslCareerComparisons;
