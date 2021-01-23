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
    // marginTop: theme.spacing(2),
  },
  formControl: {
    // margin: theme.spacing(1),
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
            { player_name: firstPlayer.player_name },
            response.data.first_player
          ),
          second_player: Object.assign(
            { player_name: secondPlayer.player_name },
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
          marginBottom: 20,
        }}
      >
        <div>
          {Object.keys(data.first_player)
            .filter(
              (key) =>
                !["player_id", "match_type", "stumpings_made"].includes(key)
            )
            .map((key) => (
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
                  {data.first_player[key]}
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
                  {humanify(key)}
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
                  {data.second_player[key]}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
