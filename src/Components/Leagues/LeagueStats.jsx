import { Box, Grid } from "@mui/material";
import Breadcrumb from "Components/Common/Breadcrumb";
import React from "react";
import LeagueBattingStats from "./LeagueBattingStats";
import LeagueBowlingStats from "./LeagueBowlingStats";
import { useLocation, useHistory } from "react-router-dom";

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
    <Box sx={{ padding: { xs: 2 }, paddingRight: { xs: 0, md: 1 } }}>
      <Box sx={{ paddingRight: { xs: 2 } }}>
        <Breadcrumb leagueName={leagueName} type="league" />
      </Box>

      <Box sx={{ fontSize: { xs: 32, md: 48 }, fontWeight: "bolder" }}>
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
