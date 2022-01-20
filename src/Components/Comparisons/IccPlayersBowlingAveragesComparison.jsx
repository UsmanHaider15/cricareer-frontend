import React, { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TableView from "Components/Common/TableView";
import Grid from "@mui/material/Grid";
import { icc_teams_lookup } from "Data/data";
import CustomResponsiveFontSizes from "Components/Common/Heading";
import httpService from "Services/httpService";

const IccPlayersBowlingAveragesComparison = ({
  firstPlayer,
  secondPlayer,
  bowlingFormat,
  setBowlingFormat,
  bowlingOpposition,
  setBowlingOpposition,
}) => {
  const [chartData, setChartData] = React.useState({
    first_player: {},
    second_player: {},
  });

  const [formatType, setFormatType] = React.useState(bowlingFormat);
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

  const [oppositionOption, setOppositionOption] =
    React.useState(bowlingOpposition);
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
    setBowlingFormat(formatType);
    setBowlingOpposition(oppositionOption);
  }, [formatType, oppositionOption, setBowlingFormat, setBowlingOpposition]);

  useEffect(() => {
    httpService
      .get(`/icc_comparison/career_averages_comparison`, {
        params: {
          first_player_id: firstPlayer.player_id,
          second_player_id: secondPlayer.player_id,
          format_type: formatType,
          opposition_team: oppositionOption,
          type: "bowling",
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
      <Grid xs={12}>
        <CustomResponsiveFontSizes text="Bowling Averages Comparison" />
      </Grid>
      <Grid xs={12} style={{ textAlign: "left" }}>
        <FormControl variant="outlined">
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
          >
            {["All Formats", "T20Is", "Tests", "ODIs"].map((format) => (
              <MenuItem value={format}>{format}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
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
          >
            {Object.entries(icc_teams_lookup).map(([value, label]) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        xs={12}
        style={{
          boxShadow: "2px 2px 6px 0px #888888",
          padding: 8,
          marginBottom: 20,
          width: "100%",
        }}
      >
        <TableView
          data={chartData}
          excludedKeys={[
            "player_id",
            "format_type",
            "opposition_team",
            "balls_bowled",
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default IccPlayersBowlingAveragesComparison;
