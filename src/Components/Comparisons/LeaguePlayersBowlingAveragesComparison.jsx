import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TableView from "Components/Common/TableView";
import Grid from "@mui/material/Grid";
import { league_teams, league_seasons } from "Data/data";
import httpService from "Services/httpService";
import { Box } from "@mui/material";
import CircularLoader from "Components/Common/CircularLoader";

const LeaguePlayersBowlingAveragesComparison = ({
  firstPlayer,
  secondPlayer,
  leagueName,
  bowlingSeason,
  setBowlingSeason,
  bowlingOpposition,
  setBowlingOpposition,
}) => {
  const [chartData, setChartData] = useState({
    first_player: {},
    second_player: {},
  });

  const [seasonOption, setSeasonOption] = useState(bowlingSeason);
  const [seasonMenuOpen, setSeasonMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSeasonChange = (event) => {
    setLoading(true);
    setSeasonOption(event.target.value);
  };

  const handleSeasonMenuClose = () => {
    setSeasonMenuOpen(false);
  };

  const handleSeasonMenuOpen = () => {
    setSeasonMenuOpen(true);
  };

  const [oppositionOption, setOppositionOption] = useState(bowlingOpposition);
  const [oppositionMenuOpen, setOppositionMenuOpen] = useState(false);

  const handleOppositionChange = (event) => {
    setLoading(true);
    setOppositionOption(event.target.value);
  };

  const handleOppositionMenuClose = () => {
    setOppositionMenuOpen(false);
  };

  const handleOppositionMenuOpen = () => {
    setOppositionMenuOpen(true);
  };

  useEffect(() => {
    setBowlingSeason(seasonOption);
    setBowlingOpposition(oppositionOption);
  }, [seasonOption, oppositionOption, setBowlingOpposition, setBowlingSeason]);

  useEffect(() => {
    httpService
      .get(`/league_player_comparison/career_averages_comparison`, {
        params: {
          first_player_id: firstPlayer.player_id,
          second_player_id: secondPlayer.player_id,
          season_number: seasonOption,
          opposition_team: oppositionOption,
          league_name: leagueName,
          type: "bowling",
        },
      })
      .then(function ({ data }) {
        const { first_player, second_player } = data;

        setChartData({ first_player, second_player });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [
    seasonOption,
    oppositionOption,
    firstPlayer.player_id,
    secondPlayer.player_id,
    leagueName,
  ]);

  return (
    <Grid container sx={{ marginTop: 3 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            padding: "5px 0px",
            textAlign: "left",
            fontSize: { xs: 30, md: 48 },
          }}
        >
          Batting Averages
        </Box>{" "}
      </Grid>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <FormControl variant="outlined" sx={{ paddingRight: 1 }}>
          <InputLabel id="demo-controlled-open-select-label">Season</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={seasonMenuOpen}
            onClose={handleSeasonMenuClose}
            onOpen={handleSeasonMenuOpen}
            value={seasonOption}
            onChange={handleSeasonChange}
            label="Season"
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

        <FormControl variant="outlined">
          <InputLabel id="demo-controlled-open-select-label">
            Opposition
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={oppositionMenuOpen}
            onClose={handleOppositionMenuClose}
            onOpen={handleOppositionMenuOpen}
            value={oppositionOption}
            onChange={handleOppositionChange}
            label="Opposition"
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "7px 5px", md: "16.5px 14px" },
                  fontSize: { xs: "0.9rem", md: "1rem" },
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
      <div
        style={{
          boxShadow: "2px 2px 6px 0px #888888",
          width: "100%",
          marginTop: 20,
          padding: 2,
          borderRadius: 5,
        }}
      >
        {!loading ? (
          <TableView
            data={chartData}
            excludedKeys={["player_id", "season_number", "opposition_team"]}
          />
        ) : (
          <CircularLoader />
        )}
      </div>
    </Grid>
  );
};

export default LeaguePlayersBowlingAveragesComparison;
