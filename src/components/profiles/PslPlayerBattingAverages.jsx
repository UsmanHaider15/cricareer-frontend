import React, { useState, useEffect } from "react";
import axios from "axios";
import AveragesTable from "../common/AveragesTable";
import _ from "lodash";

const PslPlayerBattingAverages = ({ player }) => {
  const [battingAverages, setBattingAverages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/psl_profile/get_player_batting_averages", {
        params: {
          player_id: player.player_id,
          season_number: 0,
          league_name: "psl",
        },
      })
      .then(function (response) {
        const data = response.data.rows;
        console.log("batting_averages", data);

        const modifiedData = data.map((obj) =>
          _.pick(obj, [
            "opposition_team",
            "innings_played",
            "not_outs",
            "runs_scored",
            "highest_inns_score",
            "batting_average",
            "balls_faced",
            "batting_strike_rate",
            "hundreds_scored",
            "fifties_scored",
            "boundary_fours",
            // "boundary_sixes",
          ])
        );

        setBattingAverages(modifiedData);

        console.log("modifiedData", modifiedData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [player.player_id]);

  return (
    <div>
      {Object.keys(battingAverages).length ? (
        <AveragesTable rows={battingAverages} />
      ) : null}
    </div>
  );
};

export default PslPlayerBattingAverages;
