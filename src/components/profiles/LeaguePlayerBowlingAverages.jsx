import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AveragesTable from "../common/AveragesTable";
import _ from "lodash";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {
  league_bowling_table_column_to_label_lookup,
  league_seasons,
} from "../../data/data";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

const LeaguePlayerBowlingAverages = ({ player, leagueName }) => {
  const classes = useStyles();
  const [bowlingAverages, setBowlingAverages] = useState([]);
  const [option, setOption] = React.useState(0);
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
    axios
      .get(
        "http://localhost:3001/league_player_profile/get_player_bowling_averages",
        {
          params: {
            player_id: player.player_id,
            season_number: option,
            league_name: leagueName,
          },
        }
      )
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
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [player.player_id, option]);

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <FormControl variant="outlined" className={classes.formControl}>
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
            className={classes.root}
          >
            {[
              0,
              ...Array.from(
                Array(league_seasons[leagueName]),
                (x, i) => i + 1
              ).reverse(),
            ].map((value) => (
              <MenuItem value={value}>
                {value ? `${leagueName.toUpperCase()} ${value}` : "All Seasons"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {bowlingAverages.length ? (
        <AveragesTable
          rows={bowlingAverages}
          columnNamesLookup={league_bowling_table_column_to_label_lookup}
        />
      ) : null}
    </div>
  );
};

export default LeaguePlayerBowlingAverages;
