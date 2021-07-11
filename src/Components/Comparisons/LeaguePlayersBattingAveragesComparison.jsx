import React, { useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TableView from "Components/Common/TableView";
import Grid from "@material-ui/core/Grid";
import { league_teams, league_seasons } from "Data/data";
import CustomResponsiveFontSizes from "Components/Common/Heading";
import httpService from "Services/httpService";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

const LeaguePlayersBattingAveragesComparison = ({
  firstPlayer,
  secondPlayer,
  leagueName,
  battingSeason,
  setBattingSeason,
  battingOpposition,
  setBattingOpposition,
}) => {
  const classes = useStyles();
  const [chartData, setChartData] = React.useState({
    first_player: {},
    second_player: {},
  });

  const [seasonOption, setSeasonOption] = React.useState(battingSeason);
  const [seasonMenuOpen, setSeasonMenuOpen] = React.useState(false);

  const handleSeasonChange = (event) => {
    setSeasonOption(event.target.value);
  };

  const handleSeasonMenuClose = () => {
    setSeasonMenuOpen(false);
  };

  const handleSeasonMenuOpen = () => {
    setSeasonMenuOpen(true);
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
    setBattingSeason(seasonOption);
    setBattingOpposition(oppositionOption);
  }, [seasonOption, oppositionOption, setBattingOpposition, setBattingSeason]);

  useEffect(() => {
    httpService
      .get(`/league_player_comparison/career_averages_comparison`, {
        params: {
          first_player_id: firstPlayer.player_id,
          second_player_id: secondPlayer.player_id,
          season_number: seasonOption,
          opposition_team: oppositionOption,
          league_name: leagueName,
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
    seasonOption,
    oppositionOption,
    firstPlayer.player_id,
    secondPlayer.player_id,
    leagueName,
  ]);

  return (
    <Grid container>
      <Grid xs={12}>
        <CustomResponsiveFontSizes text="Batting Averages Comparison" />
      </Grid>
      <Grid xs={12} style={{ textAlign: "left" }}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Season</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={seasonMenuOpen}
            onClose={handleSeasonMenuClose}
            onOpen={handleSeasonMenuOpen}
            value={seasonOption}
            onChange={handleSeasonChange}
            label="Season"
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
            {league_teams[leagueName].map((value) => (
              <MenuItem value={value}>{value}</MenuItem>
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
          excludedKeys={["player_id", "season_number", "opposition_team"]}
        />
      </Grid>
    </Grid>
  );
};

export default LeaguePlayersBattingAveragesComparison;
