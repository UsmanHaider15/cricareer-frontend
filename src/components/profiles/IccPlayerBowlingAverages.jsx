import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import {
  icc_teams_lookup,
  icc_bowling_table_column_name_lookup,
} from "../../data/data";
import axios from "axios";
import _ from "lodash";
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

const IccPlayerBowlingAverages = ({ player }) => {
  const classes = useStyles();

  const [oppositionOption, setOppositionOption] = React.useState("all_teams");
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
    console.log("player", player["player_id"]);
    axios
      .get("http://localhost:3001/icc_profile/get_player_bowling_averages", {
        params: {
          player_id: player["player_id"],
          opposition_team: oppositionOption,
        },
      })
      .then(function (response) {
        const data = response.data.rows;
        console.log("data", data);
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
