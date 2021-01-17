/* eslint-disable no-use-before-define */
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox({
  InitialPlayersList,
  setSelectedPlayer,
  isFirst,
}) {
  return (
    <div>
      <Autocomplete
        // id="combo-box-demo"
        options={InitialPlayersList}
        getOptionLabel={(option) => option.player_name}
        getOptionSelected={(option, value) => {
          setSelectedPlayer(value, isFirst);
          return true;
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
