/* eslint-disable no-use-before-define */
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState, useEffect } from "react";
import httpService from "services/httpService";

export default function PlayerSearch({
  InitialPlayersList,
  setSelectedPlayer,
  player,
  isFirst = true,
  url = "/search_player_by_name",
  league_name = "psl",
}) {
  const [searchedPlayersList, setSearchedPlayersList] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    if (searchStr) {
      httpService
        .get(url, {
          params: {
            player_name: searchStr,
            league_name,
          },
        })
        .then(function (response) {
          setSearchedPlayersList(response.data.rows);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }, [searchStr]);

  return (
    <div>
      <Autocomplete
        value={player}
        disableClearable={true}
        // id="combo-box-demo"
        options={
          searchedPlayersList.length ? searchedPlayersList : InitialPlayersList
        }
        getOptionLabel={(option) => option.player_name}
        getOptionSelected={(option, value) => {
          if (option.player_name === value.player_name) {
            setSelectedPlayer(value, isFirst);
          }
          return true;
        }}
        onInputChange={(event, value, reason) => {
          return reason === "input" && setSearchStr(value);
        }}
        onChange={(event, value, reason) => {
          if (reason === "select-option") {
            setSelectedPlayer(value, isFirst);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Player"
            variant="outlined"
            size="small"
          />
        )}
      />
    </div>
  );
}

//
