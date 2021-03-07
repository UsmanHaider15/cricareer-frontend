import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import _ from "lodash";
import {
  icc_batting_table_column_name_lookup,
  icc_teams_lookup,
} from "../../data/data";
import AveragesTable from "../common/AveragesTable";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

const IccPlayerBattingAverages = ({ player }) => {
  const classes = useStyles();

  const [battingAverages, setBattingAverages] = useState([]);

  const [oppositionOption, setOppositionOption] = React.useState("all_teams");
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
    axios
      .get("http://localhost:3001/icc_profile/icc_career_averages", {
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
        <FormControl variant="outlined" className={classes.formControl}>
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
            className={classes.root}
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
