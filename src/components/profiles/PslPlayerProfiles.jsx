import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import qs from "qs";
import PlayerSearch from "../PlayerSearch";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = (val) => {
    setLoaded(val);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad(true);
    } else {
      onLoad(false);
    }
  });

  return [ref, loaded, onLoad];
};

const PslPlayerProfiles = ({ history }) => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [player, setPlayer] = useState({});
  const [ref, loaded, onLoad] = useImageLoaded();

  useEffect(() => {
    if (Object.keys(player).length) {
      history.push({
        pathname: "",
        search: `player_id=${player.player_id}`,
      });
    }
  }, [player]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get_players_list", {
        params: {
          limit: 100,
        },
      })
      .then(function (response) {
        setInitialPlayersList(response.data.rows);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    const url_id = qs.parse(history.location.search.substring(1));
    const player_id = url_id.player_id ? url_id.player_id : 253802;

    axios
      .get(`http://localhost:3001/get_player_by_id`, {
        params: {
          player_id: player_id,
        },
      })
      .then(function (response) {
        setPlayer(response.data.rows[0]);
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push({
      // pathname: "",
      search: `player_id=${player_id}`,
    });
  }, []);

  const handleSelectedPlayer = (player) => {
    setPlayer(player);
  };

  return (
    <div>
      <Grid container style={{ paddingTop: 10 }} spacing={1}>
        <Grid item xs={12}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={player}
          />
        </Grid>
        <Grid
          item={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div
            style={{
              overflow: "hidden",
              border: "1px solid black",
              padding: 10,
            }}
          >
            <img
              ref={ref}
              onLoad={onLoad}
              src={
                player.player_image_url
                  ? player.player_image_url
                  : "/default-user.jpg"
              }
              alt=""
              style={{
                display: loaded ? "block" : "none",
              }}
            />
            {!loaded ? <CircularProgress /> : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(PslPlayerProfiles);
