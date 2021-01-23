import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";
import humanify from "../Utils/humanify";
import IccBattingFormatAveragesComparisonChart from "./IccBattingFormatAveragesComparisonChart";
import DataViewTabs from "./DataViewTabs";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

export default function IccBattingFormatAveragesComparison({
  firstPlayer,
  secondPlayer,
}) {
  const classes = useStyles();
  const [battingAverageOption, setBattingAverageOption] = React.useState({
    label: "Matches Played",
    value: "matches_played",
  });
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({ first_player: {}, second_player: {} });
  const [chartData, setChartData] = useState({
    first_player: {},
    second_player: {},
  });

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
            first_player_id: firstPlayer.player_id,
            second_player_id: secondPlayer.player_id,
            battingAverageOption: battingAverageOption.value,
          },
        }
      )
      .then(function (response) {
        const first = {};
        response.data.first_player.map((obj) => {
          first[obj["match_type"]] = obj[battingAverageOption.value];
        });
        const second = {};
        response.data.second_player.map((obj) => {
          second[obj["match_type"]] = obj[battingAverageOption.value];
        });

        const first_player = {};
        const second_player = {};
        ["Tests", "ODIs", "T20Is", "T20s"].map((format) => {
          first_player[format] = first[format] ? first[format] : "-";
          second_player[format] = second[format] ? second[format] : "-";
        });

        setChartData({ first_player, second_player });
        setData({
          first_player: Object.assign(
            { player_name: firstPlayer.player_name.split(" ")[0] },
            first_player
          ),
          second_player: Object.assign(
            { player_name: secondPlayer.player_name.split(" ")[0] },
            second_player
          ),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [
    battingAverageOption.value,
    firstPlayer.player_id,
    secondPlayer.player_id,
  ]);

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
        <DataViewTabs
          data={data}
          chartData={chartData}
          firstPlayer={firstPlayer}
          secondPlayer={secondPlayer}
        />
      </div>
    </div>
  );
}
