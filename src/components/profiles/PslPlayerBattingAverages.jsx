import React, { useState, useEffect } from "react";
import axios from "axios";
import AveragesTable from "../common/AveragesTable";

const PslPlayerBattingAverages = ({ player }) => {
  const [battingAverages, setBattingAverages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/psl_profile/get_player_batting_averages", {
        params: {
          player_id: player.player_id,
          season_number: 5,
          league_name: "psl",
        },
      })
      .then(function (response) {
        setBattingAverages(response.data.rows);
        console.log("batting_averages", response.data.rows);
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
      <AveragesTable />
    </div>
  );
};

export default PslPlayerBattingAverages;
