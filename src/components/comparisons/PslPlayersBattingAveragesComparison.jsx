import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { padding: 0, marginBottom: 10 },

  button: {
    display: "block",
  },
  formControl: {
    minWidth: 100,
  },
}));

const PslPlayersBattingAveragesComparison = ({ firstPlayer, secondPlayer }) => {
  const classes = useStyles();
  const [seasonOption, setSeasonOption] = React.useState(0);
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

  const [oppositionOption, setOppositionOption] = React.useState("All Teams");
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

  return (
    <div>
      <div>
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
            {[0, 5, 4, 3, 2, 1].map((value) => (
              <MenuItem value={value}>
                {value ? `PSL ${value}` : "All Seasons"}
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
            {[
              "All Teams",
              "Islamabad United",
              "Karachi Kings",
              "Lahore Qalandars",
              "Multan Sultans",
              "Peshawar Zalmi",
              "Quetta Gladiators",
            ].map((value) => (
              <MenuItem value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        Season: {seasonOption}
        Opposition Option: {oppositionOption}
      </div>
    </div>
  );
};

export default PslPlayersBattingAveragesComparison;
