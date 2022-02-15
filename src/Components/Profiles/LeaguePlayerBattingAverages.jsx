import React, { useState, useEffect } from "react";
import AveragesTable from "Components/Common/AveragesTable";
import _ from "lodash";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {
  league_batting_table_column_name_lookup,
  league_seasons,
} from "Data/data";
import httpService from "Services/httpService";
import CircularLoader from "Components/Common/CircularLoader";

const LeaguePlayerBattingAverages = ({
  player,
  leagueName,
  setBattingSeason,
  battingSeason,
}) => {
  const [battingAverages, setBattingAverages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [option, setOption] = React.useState(battingSeason);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setLoading(true);
    setOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setBattingSeason(option);
  }, [option, setBattingSeason]);

  useEffect(() => {
    httpService
      .get("/league_player_profile/get_player_batting_averages", {
        params: {
          player_id: player.player_id,
          season_number: option,
          league_name: leagueName,
        },
      })
      .then(function (response) {
        const data = response.data.rows;

        // Important: here we are enforcing order
        const modifiedData = data.map((obj) =>
          _.pick(obj, Object.keys(league_batting_table_column_name_lookup))
        );

        setBattingAverages(modifiedData);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [player.player_id, option, leagueName]);

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <FormControl variant="outlined">
          <InputLabel id="demo-controlled-open-select-label">Season</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={option}
            onChange={handleChange}
            label="Option"
            sx={[
              {
                ".MuiSelect-select": {
                  padding: { xs: "7px 5px", md: "16.5px 14px" },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                },
              },
            ]}
          >
            {[
              ...league_seasons[leagueName],
              { season_number: 0, year: null, label: "All Seasons" },
            ]
              .reverse()
              .map(({ season_number, label }, idx) => (
                <MenuItem key={idx} value={season_number}>
                  {label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      {!loading ? (
        <AveragesTable
          rows={battingAverages}
          columnNamesLookup={league_batting_table_column_name_lookup}
        />
      ) : (
        <CircularLoader />
      )}
    </div>
  );
};

export default LeaguePlayerBattingAverages;
