import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AveragesTable from "../common/AveragesTable";
import _ from "lodash";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {
  league_batting_table_column_name_lookup,
  league_seasons,
} from "../../data/data";
import httpService from "services/httpService";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

const LeaguePlayerBattingAverages = ({ player, leagueName }) => {
  const classes = useStyles();
  const [battingAverages, setBattingAverages] = useState([]);
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
