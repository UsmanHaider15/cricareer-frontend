import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AveragesTable from "../common/AveragesTable";
import _ from "lodash";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

const PslPlayerBattingAverages = ({ player }) => {
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
    axios
      .get("http://localhost:3001/psl_profile/get_player_batting_averages", {
        params: {
          player_id: player.player_id,
          season_number: option,
          league_name: "psl",
        },
      })
      .then(function (response) {
        const data = response.data.rows;
        console.log("batting_averages", data);

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
            // "boundary_sixes",
          ])
        );

        setBattingAverages(modifiedData);

        console.log("modifiedData", modifiedData);
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
          <InputLabel id="demo-controlled-open-select-label">Option</InputLabel>
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
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <MenuItem value={value}>Season {value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {Object.keys(battingAverages).length ? (
        <AveragesTable rows={battingAverages} />
      ) : null}
    </div>
  );
};

export default PslPlayerBattingAverages;
