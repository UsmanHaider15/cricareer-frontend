import React from "react";
import LeagueBattingStats from "./LeagueBattingStats";
import LeagueBowlingStats from "./LeagueBowlingStats";

const LeagueStats = ({ leagueName }) => {
  return (
    <div>
      <LeagueBattingStats leagueName={leagueName} />
      <LeagueBowlingStats leagueName={leagueName} />
    </div>
  );
};

export default LeagueStats;
