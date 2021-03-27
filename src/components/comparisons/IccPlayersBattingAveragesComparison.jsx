import React, { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import TableView from "../common/TableView";
import Grid from "@material-ui/core/Grid";
import { icc_teams_lookup } from "../../data/data";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

const IccPlayersBattingAveragesComparison = ({ firstPlayer, secondPlayer }) => {
  const classes = useStyles();
  const [chartData, setChartData] = React.useState({
    first_player: {},
    second_player: {},
  });

  const [formatType, setFormatType] = React.useState("All Formats");
  const [formatMenuOpen, setFormatMenuOpen] = React.useState(false);

  const handleFormatChange = (event) => {
    setFormatType(event.target.value);
  };

  const handleFormatMenuClose = () => {
    setFormatMenuOpen(false);
  };

  const handleFormatMenuOpen = () => {
    setFormatMenuOpen(true);
  };

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
      .get(`http://localhost:3001/icc_comparison/career_averages_comparison`, {
        params: {
          first_player_id: firstPlayer.player_id,
          second_player_id: secondPlayer.player_id,
          format_type: formatType,
          opposition_team: oppositionOption,
          type: "batting",
        },
      })
      .then(function ({ data }) {
        const { first_player, second_player } = data;

        setChartData({ first_player, second_player });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [
    formatType,
    oppositionOption,
    firstPlayer.player_id,
    secondPlayer.player_id,
  ]);

  return (
    <Grid container>
      <div>
        <Typography variant="h5" align="left" style={{ paddingBottom: 10 }}>
          Batting Averages Comparison
        </Typography>
      </div>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Format</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={formatMenuOpen}
            onClose={handleFormatMenuClose}
            onOpen={handleFormatMenuOpen}
            value={formatType}
            onChange={handleFormatChange}
            label="Format"
            className={classes.root}
          >
            {["All Formats", "T20Is", "Tests", "ODIs"].map((format) => (
              <MenuItem value={format}>{format}</MenuItem>
            ))}
          </Select>
        </FormControl>

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
      </div>
      <div
        style={{
          boxShadow: "2px 2px 6px 0px #888888",
          borderRadius: "10px 10px 10px 10px",
          padding: 8,
          marginBottom: 20,
          width: "100%",
        }}
      >
        <TableView
          data={chartData}
          excludedKeys={["player_id", "format_type", "opposition_team"]}
        />
      </div>
    </Grid>
  );
};

export default IccPlayersBattingAveragesComparison;
