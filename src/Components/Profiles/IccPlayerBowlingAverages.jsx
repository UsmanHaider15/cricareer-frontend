import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import {
  icc_teams_lookup,
  icc_bowling_table_column_name_lookup,
} from "Data/data";
import _ from "lodash";
import AveragesTable from "Components/Common/AveragesTable";
import httpService from "Services/httpService";

const IccPlayerBowlingAverages = ({
  player,
  bowlingOpposition,
  setBowlingOpposition,
}) => {
  const [oppositionOption, setOppositionOption] =
    React.useState(bowlingOpposition);
  const [oppositionMenuOpen, setOppositionMenuOpen] = React.useState(false);
  const [bowlingAverages, setBowlingAverages] = useState([]);

  const handleOppositionChange = (event) => {
    setOppositionOption(event.target.value);
  };

  const handleOppositionMenuClose = () => {
    setOppositionMenuOpen(false);
  };

  const handleOppositionMenuOpen = () => {
    setOppositionMenuOpen(true);
  };

  useEffect(() => {
    setBowlingOpposition(oppositionOption);
  }, [oppositionOption, setBowlingOpposition]);

  useEffect(() => {
    httpService
      .get("/icc_profile/icc_career_averages", {
        params: {
          player_id: player["player_id"],
          opposition_team: oppositionOption,
          type: "bowling",
        },
      })
      .then(function (response) {
        const data = response.data.rows;
        const modifiedData = data.map((obj) =>
          _.pick(obj, Object.keys(icc_bowling_table_column_name_lookup))
        );

        setBowlingAverages(modifiedData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [player, player.player_id, oppositionOption]);

  return (
    <Grid container>
      <Grid item>
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
          >
            {Object.entries(icc_teams_lookup).map(([value, label]) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {Object.keys(bowlingAverages).length ? (
          <AveragesTable
            rows={bowlingAverages}
            columnNamesLookup={icc_bowling_table_column_name_lookup}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default IccPlayerBowlingAverages;
