import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TableView from "Components/Common/TableView";
import Grid from "@mui/material/Grid";
import { icc_teams_lookup } from "Data/data";
import httpService from "Services/httpService";
import { Box } from "@mui/material";

const IccPlayersBattingAveragesComparison = ({
  firstPlayer,
  secondPlayer,
  battingFormat,
  setBattingFormat,
  battingOpposition,
  setBattingOpposition,
}) => {
  const [chartData, setChartData] = React.useState({
    first_player: {},
    second_player: {},
  });

  const [formatType, setFormatType] = React.useState(battingFormat);
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
    React.useState(battingOpposition);
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
    setBattingFormat(formatType);
    setBattingOpposition(oppositionOption);
  }, [formatType, oppositionOption, setBattingFormat, setBattingOpposition]);

  useEffect(() => {
    httpService
      .get(`/icc_comparison/career_averages_comparison`, {
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
      <Grid xs={12}>
        <Box sx={{ textAlign: "left", fontSize: { xs: 30, md: 48 } }}>
          Batting Averages Comparison
        </Box>
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
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "8.5px 6px", md: "16.5px 14px" },
                },
              },
            ]}
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
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "8.5px 6px", md: "16.5px 14px" },
                },
              },
            ]}
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
          excludedKeys={["player_id", "format_type", "opposition_team"]}
        />
      </Grid>
    </Grid>
  );
};

export default IccPlayersBattingAveragesComparison;
