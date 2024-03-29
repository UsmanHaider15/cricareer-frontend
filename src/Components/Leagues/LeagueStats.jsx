import { Box, Grid } from "@mui/material";
import Breadcrumb from "Components/Common/Breadcrumb";
import React from "react";
import LeagueBattingStats from "./LeagueBattingStats";
import LeagueBowlingStats from "./LeagueBowlingStats";
import { useLocation, useHistory } from "react-router-dom";
import Header from "Components/Common/Header";
import { leagueNameLookup } from "Data/data";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const LeagueStats = ({ leagueName }) => {
  let query = useQuery();

  const [queryParam, setQueryParams] = React.useState({});
  const history = useHistory();

  const handleParamChange = (type, value) => {
    const newParams = { ...queryParam, [type]: value };
    setQueryParams(newParams);
    let searchParams = new URLSearchParams(newParams);
    history.push({ pathname: "", search: searchParams.toString() });
  };

  return (
    <Box sx={{ padding: { xs: 2 } }}>
      <Header
        title={`${leagueName.toUpperCase()} Player's Batting and Bowling Averages`}
        description={`Most Runs, Most Fours, Most Sixes, Most Centuries, Best Batting Strike Rate, Best Batting Average in ${leagueName.toUpperCase()}, Most Wickets, Best Bowling Average, Best Bowling Economy, Best Bowling Strike Rate, Most Runs Conceded in ${leagueName.toUpperCase()}`}
      />
      <Breadcrumb leagueName={leagueName} type="league" />

      <Box sx={{ fontSize: { xs: 36, md: 56 }, fontWeight: "bolder" }}>
        {leagueNameLookup[leagueName]}
      </Box>
      <Grid container spacing={1}>
        <LeagueBattingStats
          leagueName={leagueName}
          stat={query.get("battingStat") || undefined}
          battingSeason={query.get("battingSeason") || undefined}
          opposition={query.get("battingOpposition") || undefined}
          onHandleParamChange={handleParamChange}
        />
        <LeagueBowlingStats
          leagueName={leagueName}
          stat={query.get("bowlingStat") || undefined}
          bowlingSeason={query.get("bowlingSeason") || undefined}
          opposition={query.get("bowlingOpposition") || undefined}
          onHandleParamChange={handleParamChange}
        />
      </Grid>
    </Box>
  );
};

export default LeagueStats;
