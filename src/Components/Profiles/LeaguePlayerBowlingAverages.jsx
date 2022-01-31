import React, { useState, useEffect } from "react";
import AveragesTable from "Components/Common/AveragesTable";
import _ from "lodash";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {
  league_bowling_table_column_to_label_lookup,
  league_seasons,
} from "Data/data";
import httpService from "Services/httpService";
import CircularLoader from "Components/Common/CircularLoader";

const LeaguePlayerBowlingAverages = ({
  player,
  leagueName,
  setBowlingSeason,
  bowlingSeason,
}) => {
  const [bowlingAverages, setBowlingAverages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [option, setOption] = React.useState(bowlingSeason);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setLoading(true);

    setOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setBowlingSeason(option);
  }, [option, setBowlingSeason]);

  useEffect(() => {
    httpService
      .get("/league_player_profile/get_player_bowling_averages", {
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
            "balls_bowled",
            "runs_conceded",
            "wickets_taken",
            "best_innings_bowling",
            "bowling_average",
            "economy_rate",
            "bowling_strike_rate",
            "five_wkts_in_an_inns",
            "four_wkts_in_an_inns",
            "ten_wkts_in_an_inns",
          ])
        );

        setBowlingAverages(modifiedData);
        setLoading(false);
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
      </div>
      {!loading ? (
        <AveragesTable
          rows={bowlingAverages}
          columnNamesLookup={league_bowling_table_column_to_label_lookup}
        />
      ) : (
        <CircularLoader />
      )}
    </div>
  );
};

export default LeaguePlayerBowlingAverages;
