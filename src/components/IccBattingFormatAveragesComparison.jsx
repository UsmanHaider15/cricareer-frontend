import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import humanify from "../Utils/humanify";
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
  career,
  options,
}) {
  const classes = useStyles();
  const [option, setOption] = React.useState("matches_played");
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({ first_player: {}, second_player: {} });
  const [chartData, setChartData] = useState({
    first_player: {},
    second_player: {},
  });

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
        `http://localhost:3001/icc_comparison/${career}_format_averages_comparison`,
        {
          params: {
            first_player_id: firstPlayer.player_id,
            second_player_id: secondPlayer.player_id,
            option: option,
          },
        }
      )
      .then(function (response) {
        const first = {};
        response.data.first_player.map((obj) => {
          first[obj["match_type"]] = obj[option];
        });
        const second = {};
        response.data.second_player.map((obj) => {
          second[obj["match_type"]] = obj[option];
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
  }, [option, firstPlayer.player_id, secondPlayer.player_id]);

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
            {options.map((value) => (
              <MenuItem value={value}>{humanify(value)}</MenuItem>
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
