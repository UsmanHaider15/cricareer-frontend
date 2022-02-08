import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  league_bowling_table_column_to_label_lookup,
  league_seasons,
  league_teams,
} from "Data/data";
import { Grid, Box } from "@mui/material";
import httpService from "Services/httpService";
import _ from "lodash";
import AveragesTable from "Components/Common/AveragesTable";
import CircularLoader from "Components/Common/CircularLoader";

const bowlingStats = [
  "Most Wickets",
  "Best Bowling Average",
  "Best Bowling Economy",
  "Best Bowling Strike Rate",
  "Most Runs Conceded",
];

const LeagueBowlingStats = ({ leagueName }) => {
  const [season, setSeason] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const [bowlingStat, setBowlingStats] = React.useState("Most Wickets");
  const [oppositionOption, setOppositionOption] = React.useState("All Teams");
  const [battingAverages, setBattingAverages] = React.useState([]);

  React.useEffect(() => {
    console.log("here");
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
        const modifiedData = rows.map((obj) =>
          _.pick(obj, [
            "player_id",
            ...Object.keys(league_bowling_table_column_to_label_lookup),
          ])
        );

        console.table(modifiedData);

        setBattingAverages(modifiedData);
        setLoading(false);
      });
  }, [season, bowlingStat, oppositionOption]);

  return (
    <div>
      <div style={{ textAlign: "left" }}>
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
                value={bowlingStat}
                label="Stat"
                onChange={(e) => {
                  setBowlingStats(e.target.value);
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
                {bowlingStats.map((stat) => (
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
            <AveragesTable
              rows={battingAverages}
              columnNamesLookup={{
                player_id: "ID",
                ...league_bowling_table_column_to_label_lookup,
              }}
            />
          ) : (
            <CircularLoader />
          )}
        </Grid>
      </div>
    </div>
  );
};

export default LeagueBowlingStats;
