import React, { useState, useEffect } from "react";
import AveragesTable from "Components/Common/AveragesTable";
import _ from "lodash";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {
  league_batting_table_column_name_lookup,
  league_seasons,
} from "Data/data";
import httpService from "Services/httpService";

const LeaguePlayerBattingAverages = ({
  player,
  leagueName,
  setBattingSeason,
  battingSeason,
}) => {
  const [battingAverages, setBattingAverages] = useState([]);
  const [option, setOption] = React.useState(battingSeason);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setBattingSeason(option);
  }, [option, setBattingSeason]);

  useEffect(() => {
    httpService
      .get("/league_player_profile/get_player_batting_averages", {
        params: {
          player_id: player.player_id,
          season_number: option,
          league_name: leagueName,
        },
      })
      .then(function (response) {
        const data = response.data.rows;

        const modifiedData = data.map((obj) =>
          _.pick(obj, [
            "opposition_team",
            "innings_played",
            "not_outs",
            "runs_scored",
            "highest_inns_score",
            "batting_average",
            "balls_faced",
            "batting_strike_rate",
            "hundreds_scored",
            "fifties_scored",
            "boundary_fours",
            "boundary_sixes",
          ])
        );

        setBattingAverages(modifiedData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [player.player_id, option, leagueName]);

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <FormControl variant="outlined">
          <InputLabel id="demo-controlled-open-select-label">Season</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={option}
            onChange={handleChange}
            label="Option"
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "10.5px 8px", md: "16.5px 14px" },
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
      </div>
      {battingAverages.length ? (
        <AveragesTable
          rows={battingAverages}
          columnNamesLookup={league_batting_table_column_name_lookup}
        />
      ) : null}
    </div>
  );
};

export default LeaguePlayerBattingAverages;
