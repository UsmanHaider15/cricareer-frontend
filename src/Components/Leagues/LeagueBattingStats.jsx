import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { league_seasons, league_teams } from "Data/data";
import { Grid, Box } from "@mui/material";
import httpService from "Services/httpService";

const battingStats = [
  "Most Runs",
  "Most Fours",
  "Most Sixes",
  "Most Fifties",
  "Most Centuries",
  "Best Batting Strike Rate",
  "Best Batting Averages",
];

const LeagueBattingStats = ({ leagueName }) => {
  const [season, setSeason] = React.useState(0);
  const [battingStat, setBattingStat] = React.useState("Most Runs");
  const [oppositionOption, setOppositionOption] = React.useState("All Teams");

  React.useEffect(() => {
    console.log("here");
    httpService.get("/league_stats", {
      params: {
        stat_type: "batting",
        stat_name: battingStat,
        season_number: season,
        team_name: oppositionOption,
      },
    });
  }, [season, battingStat, oppositionOption]);

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
                value={battingStat}
                label="Stat"
                onChange={(e) => setBattingStat(e.target.value)}
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
                onChange={(e) => setSeason(e.target.value)}
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
                onChange={(e) => setOppositionOption(e.target.value)}
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
        </Grid>
      </div>
    </div>
  );
};

export default LeagueBattingStats;
