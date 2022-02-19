import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { league_seasons, league_teams } from "Data/data";
import { Grid, Box } from "@mui/material";
import httpService from "Services/httpService";
import _ from "lodash";
import LeagueAveragesTable from "./LeagueAveragesTable";
import CircularLoader from "Components/Common/CircularLoader";
import LeagueStatsSkeleton from "./LeagueStatsSkeleton";

const stats_lookup = {
  "Most Runs": "runs_scored",
  "Most Fours": "boundary_fours",
  "Most Sixes": "boundary_sixes",
  "Most Fifties": "fifties_scored",
  "Most Centuries": "hundreds_scored",
  "Best Batting Strike Rate": "batting_strike_rate",
  "Best Batting Averages": "batting_averages",
};

const column_name_lookup = {
  innings_played: "Inns",
  not_outs: "NO",
  runs_scored: "Runs",
  highest_inns_score: "HS",
  batting_average: "Avg",
  balls_faced: "BF",
  batting_strike_rate: "SR",
  boundary_fours: "4s",
  boundary_sixes: "6s",
  fifties_scored: "50s",
  hundreds_scored: "100s",
};

const LeagueBattingStats = ({
  leagueName,
  stat = "Most Runs",
  battingSeason = 0,
  opposition = "All Teams",
  onHandleParamChange,
}) => {
  const [season, setSeason] = React.useState(battingSeason);
  const [loading, setLoading] = React.useState(true);

  const [battingStat, setBattingStat] = React.useState(stat);
  const [oppositionOption, setOppositionOption] = React.useState(opposition);
  const [battingAverages, setBattingAverages] = React.useState([]);

  const handleOptionChange = (e, setter) => {
    e.preventDefault();
    onHandleParamChange(e.target.name, e.target.value);
    setter(e.target.value);
    setLoading(true);
  };

  React.useEffect(() => {
    httpService
      .get("/league_stats", {
        params: {
          league_name: leagueName,
          stat_type: "batting",
          stat_name: battingStat,
          season_number: season,
          team_name: oppositionOption,
        },
      })
      .then(({ data }) => {
        const { rows } = data;

        // Important: here we are enforcing order
        const modifiedData = rows.map((obj) => {
          const newObj = _.pick(obj, [
            "player_name",
            stats_lookup[battingStat],
            ...Object.keys(column_name_lookup),
          ]);

          // TODO: please fix me
          return {
            ...newObj,
            player_name: {
              player_name: obj["player_name"],
              link: `/profiles/${leagueName}_profile?player_id=${obj["player_id"]}`,
            },
          };
        });
        setBattingAverages(modifiedData);
        setLoading(false);
      });
  }, [season, battingStat, oppositionOption]);

  return (
    <React.Fragment>
      {battingAverages.length ? (
        <Grid container sx={{ padding: 1 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: "left",
                fontSize: { xs: 30, md: 48 },
              }}
            >
              Batting Averages
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "left" }}>
            <FormControl sx={{ paddingRight: 1, marginTop: 1 }}>
              <InputLabel id="demo-simple-select-label">Stat</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={battingStat}
                label="Stat"
                name="battingStat"
                onChange={(e) => handleOptionChange(e, setBattingStat)}
                sx={[
                  {
                    ".MuiSelect-select": {
                      padding: { xs: "7px 5px", md: "16.5px 14px" },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    },
                  },
                ]}
              >
                {Object.keys(stats_lookup).map((stat, idx) => (
                  <MenuItem key={idx} value={stat}>
                    {stat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              variant="outlined"
              sx={{ paddingRight: 1, marginTop: 1 }}
            >
              <InputLabel id="demo-simple-select-label">Season</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={season}
                label="Season"
                name="battingSeason"
                onChange={(e) => handleOptionChange(e, setSeason)}
                sx={[
                  {
                    ".MuiSelect-select": {
                      padding: { xs: "7px 5px", md: "16.5px 14px" },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    },
                  },
                ]}
              >
                {[
                  ...league_seasons[leagueName],
                  { season_number: 0, year: null, label: "All Seasons" },
                ]
                  .reverse()
                  .map(({ season_number, label }, idx) => (
                    <MenuItem key={idx} value={season_number}>
                      {label}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <FormControl sx={{ marginTop: 1 }}>
              <InputLabel id="demo-simple-select-label">Against</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={oppositionOption}
                label="Against"
                name="battingOpposition"
                onChange={(e) => handleOptionChange(e, setOppositionOption)}
                sx={[
                  {
                    ".MuiSelect-select": {
                      padding: { xs: "7px 5px", md: "16.5px 14px" },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    },
                  },
                ]}
              >
                {league_teams[leagueName].map((value, idx) => (
                  <MenuItem key={idx} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {!loading ? (
            <LeagueAveragesTable
              rows={battingAverages}
              columnNamesLookup={{
                player_name: "Player",
                [stats_lookup[battingStat]]: "focus",
                ...column_name_lookup,
              }}
            />
          ) : (
            <CircularLoader />
          )}
        </Grid>
      ) : (
        <LeagueStatsSkeleton />
      )}
    </React.Fragment>
  );
};

export default LeagueBattingStats;
