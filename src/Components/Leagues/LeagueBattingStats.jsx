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

const battingStats = [
  "Most Runs",
  "Most Fours",
  "Most Sixes",
  "Most Fifties",
  "Most Centuries",
  "Best Batting Strike Rate",
  "Best Batting Averages",
];

const statsLookup = {
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

const LeagueBattingStats = ({ leagueName }) => {
  const [season, setSeason] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const [battingStat, setBattingStat] = React.useState("Most Runs");
  const [oppositionOption, setOppositionOption] = React.useState("All Teams");
  const [battingAverages, setBattingAverages] = React.useState([]);

  React.useEffect(() => {
    console.log("here");
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
        console.table(rows);

        // Important: here we are enforcing order
        const modifiedData = rows.map((obj) => {
          const newObj = _.pick(obj, [
            "player_name",
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
        setBattingAverages(modifiedData);
        setLoading(false);
      });
  }, [season, battingStat, oppositionOption]);

  return (
    <Grid container>
      <Grid xs={12}>
        <Box
          sx={{
            padding: "5px 0px",
            textAlign: "left",
            fontSize: { xs: 30, md: 48 },
          }}
        >
          Batting Averages
        </Box>
      </Grid>
      <Grid xs={12} style={{ textAlign: "left" }}>
        <FormControl sx={{ paddingRight: 1 }}>
          <InputLabel id="demo-simple-select-label">Stat</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={battingStat}
            label="Stat"
            onChange={(e) => {
              setBattingStat(e.target.value);
              setLoading(true);
            }}
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "8.5px 6px", md: "16.5px 14px" },
                },
              },
            ]}
          >
            {battingStats.map((stat) => (
              <MenuItem value={stat}>{stat}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ paddingRight: 1 }}>
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={season}
            label="Season"
            onChange={(e) => {
              setSeason(e.target.value);
              setLoading(true);
            }}
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "8.5px 6px", md: "16.5px 14px" },
                },
              },
            ]}
          >
            {[
              0,
              ...Array.from(
                Array(league_seasons[leagueName]),
                (x, i) => i + 1
              ).reverse(),
            ].map((value) => (
              <MenuItem value={value}>
                {value ? `Season ${value}` : "All Seasons"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="demo-simple-select-label">Against</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={oppositionOption}
            label="Against"
            onChange={(e) => {
              setOppositionOption(e.target.value);
              setLoading(true);
            }}
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "8.5px 6px", md: "16.5px 14px" },
                },
              },
            ]}
          >
            {league_teams[leagueName].map((value) => (
              <MenuItem value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {!loading ? (
        <LeagueAveragesTable
          rows={battingAverages}
          columnNamesLookup={{
            player_name: "Player",
            ...column_name_lookup,
          }}
        />
      ) : (
        <CircularLoader />
      )}
    </Grid>
  );
};

export default LeagueBattingStats;