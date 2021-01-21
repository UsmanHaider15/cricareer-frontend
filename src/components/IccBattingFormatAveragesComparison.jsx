import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";
import humanify from "../Utils/humanify";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

export default function IccBattingFormatAveragesComparison() {
  const classes = useStyles();
  const [battingAverageOption, setBattingAverageOption] = React.useState({
    label: "Matches Played",
    value: "matches_played",
  });
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({ first_player: {}, second_player: {} });

  const battingAverageOptions = [
    { label: "Matches Played", value: "matches_played" },
    { label: "Innings Played", value: "innings_played" },
    { label: "Not Outs", value: "not_outs" },
    { label: "Runs Scored", value: "runs_scored" },
    { label: "Highest Inns Score", value: "highest_inns_score" },
    { label: "Batting Average", value: "batting_average" },
    { label: "Balls Faced", value: "balls_faced" },
    { label: "Batting Strike Rate", value: "batting_strike_rate" },
    { label: "Hundreds Scored", value: "hundreds_scored" },
    { label: "Fifties Scored", value: "fifties_scored" },
    { label: "Boundary Fours", value: "boundary_fours" },
    { label: "Boundary Sixes", value: "boundary_sixes" },
    { label: "Catches Taken", value: "catches_taken" },
  ];

  const handleChange = (event) => {
    setBattingAverageOption({
      label: humanify(event.target.value),
      value: event.target.value,
    });
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
        `http://localhost:3001/icc_comparison/batting_format_averages_comparison`,
        {
          params: {
            first_player_id: 253802,
            second_player_id: 348144,
            battingAverageOption: battingAverageOption.value,
          },
        }
      )
      .then(function (response) {
        const firstPlayer = {};
        response.data.first_player.map((obj) => {
          firstPlayer[obj["match_type"]] = obj[battingAverageOption.value];
        });
        const secondPlayer = {};
        response.data.second_player.map((obj) => {
          secondPlayer[obj["match_type"]] = obj[battingAverageOption.value];
        });

        setData({ first_player: firstPlayer, second_player: secondPlayer });

        // ["ODIs", "T20Is", "T20s", "Tests"]
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [battingAverageOption.value]);

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
            value={battingAverageOption.value}
            onChange={handleChange}
            label="Option"
            className={classes.root}
          >
            {battingAverageOptions.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <div>
          {Object.keys(data.first_player).map((format) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <div
                style={{
                  color: "white",
                  backgroundColor: "#ff2400",
                  flex: "1 1 0",
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  fontWeight: "bold",
                }}
              >
                {data.first_player[format]}
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff2400, #0073cf)",
                  color: "white",
                  flex: "2 1 0",
                  whiteSpace: "nowrap",
                  fontWeight: "bolder",
                }}
              >
                {humanify(format)}
              </div>
              <div
                style={{
                  color: "white",
                  backgroundColor: "#0073cf",
                  flex: "1 1 0",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  fontWeight: "bold",
                }}
              >
                {data.second_player[format]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
