import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import humanify from "../Utils/humanify";
import Typography from "@material-ui/core/Typography";
import TableView from "./common/TableView";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

export default function IccBattingAveragesComparison({
  firstPlayer,
  secondPlayer,
}) {
  const classes = useStyles();
  const [format, setFormat] = React.useState("ODIs");
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({ first_player: {}, second_player: {} });

  const formatOptions = ["ODIs", "T20Is", "T20s", "Tests"];
  const handleChange = (event) => {
    setFormat(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/icc_comparison/batting_averages_comparison`, {
        params: {
          first_player_id: firstPlayer.player_id,
          second_player_id: secondPlayer.player_id,
          format,
        },
      })
      .then(function (response) {
        setData({
          first_player: Object.assign(
            { player_name: firstPlayer.player_name.split(" ")[0] },
            response.data.first_player
          ),
          second_player: Object.assign(
            { player_name: secondPlayer.player_name.split(" ")[0] },
            response.data.second_player
          ),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [format, firstPlayer.player_id, secondPlayer.player_id]);

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Format</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={format}
            onChange={handleChange}
            label="Format"
            className={classes.root}
          >
            {formatOptions.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div
        style={{
          boxShadow: "2px 2px 6px 0px #888888",
          borderRadius: "10px 10px 10px 10px",
          padding: 8,
          marginBottom: 20,
        }}
      >
        <TableView data={data} />
      </div>
    </div>
  );
}
