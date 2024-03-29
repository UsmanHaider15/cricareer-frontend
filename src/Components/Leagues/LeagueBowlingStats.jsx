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
  "Most Wickets": "wickets_taken",
  "Best Bowling Average": "bowling_average",
  "Best Bowling Economy": "economy_rate",
  "Best Bowling Strike Rate": "bowling_strike_rate",
  "Most Runs Conceded": "runs_conceded",
};

const column_name_lookup = {
  innings_played: "Inns",
  balls_bowled: "Balls",
  runs_conceded: "Runs",
  wickets_taken: "Wkts",
  // best_innings_bowling: "Best Inns Bowling",
  // maiden_overs: "Maidens",
  bowling_average: "Avg",
  economy_rate: "Econ",
  bowling_strike_rate: "SR",
  four_wkts_in_an_inns: "4w",
  five_wkts_in_an_inns: "5w",
  ten_wkts_in_an_inns: "10w",
};

const LeagueBowlingStats = ({
  leagueName,
  stat = "Most Wickets",
  bowlingSeason = 0,
  opposition = "All Teams",
  onHandleParamChange,
}) => {
  const [season, setSeason] = React.useState(bowlingSeason);
  const [loading, setLoading] = React.useState(true);

  const [bowlingStat, setBowlingStats] = React.useState(stat);
  const [oppositionOption, setOppositionOption] = React.useState(opposition);
  const [bowlingAverages, setBowlingAverages] = React.useState([]);

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
          stat_type: "bowling",
          stat_name: bowlingStat,
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
            stats_lookup[bowlingStat],
            ...Object.keys(column_name_lookup),
          ]);

          // TODO: please fix me
          return {
            ...newObj,
            player_name: {
              player_name: obj["player_name"],
              link: `/profile/${leagueName}_profile?player_id=${obj["player_id"]}`,
            },
          };
        });

        setBowlingAverages(modifiedData);
        setLoading(false);
      });
  }, [season, bowlingStat, oppositionOption]);

  return (
    <React.Fragment>
      {bowlingAverages.length ? (
        <Grid container sx={{ padding: 1 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                padding: "5px 0px",
                textAlign: "left",
                fontSize: { xs: 30, md: 48 },
              }}
            >
              Bowling Averages
            </Box>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "left" }}>
            <FormControl sx={{ paddingRight: 1, marginTop: 1 }}>
              <InputLabel id="demo-simple-select-label">Stat</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bowlingStat}
                label="Stat"
                name="bowlingStat"
                onChange={(e) => handleOptionChange(e, setBowlingStats)}
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
                name="bowlingSeason"
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
                name="bowlingOpposition"
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
              rows={bowlingAverages}
              columnNamesLookup={{
                player_name: "Player",
                [stats_lookup[bowlingStat]]: "focus",
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

export default LeagueBowlingStats;
