import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Grid from "@mui/material/Grid";
import _ from "lodash";
import {
  icc_batting_table_column_name_lookup,
  icc_teams_lookup,
} from "Data/data";
import AveragesTable from "Components/Common/AveragesTable";
import httpService from "Services/httpService";

const IccPlayerBattingAverages = ({
  player,
  battingOpposition,
  setBattingOpposition,
}) => {
  const [battingAverages, setBattingAverages] = useState([]);

  const [oppositionOption, setOppositionOption] =
    React.useState(battingOpposition);
  const [oppositionMenuOpen, setOppositionMenuOpen] = React.useState(false);

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
    setBattingOpposition(oppositionOption);
  }, [oppositionOption, setBattingOpposition]);

  useEffect(() => {
    httpService
      .get("/icc_profile/icc_career_averages", {
        params: {
          player_id: player.player_id,
          opposition_team: oppositionOption,
          type: "batting",
        },
      })
      .then(function (response) {
        const data = response.data.rows;

        const modifiedData = data.map((obj) =>
          _.pick(obj, [
            "format_type",
            "matches_played",
            "innings_played",
            "not_outs",
            "runs_scored",
            "highest_inns_score",
            "batting_average",
            "balls_faced",
            "batting_strike_rate",
            "hundreds_scored",
            "fifties_scored",
            "ducks_scored",
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
  }, [player.player_id, oppositionOption]);

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
        {Object.keys(battingAverages).length ? (
          <AveragesTable
            rows={battingAverages}
            columnNamesLookup={icc_batting_table_column_name_lookup}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default IccPlayerBattingAverages;
