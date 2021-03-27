import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import qs from "qs";
import PlayerSearch from "../PlayerSearch";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import IccPlayerBattingAverages from "./IccPlayerBattingAverages";
import IccPlayerBowlingAverages from "./IccPlayerBowlingAverages";
import Typography from "@material-ui/core/Typography";

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

const IccPlayerProfile = ({ history }) => {
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
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <PlayerSearch
              InitialPlayersList={initialPlayersList}
              setSelectedPlayer={handleSelectedPlayer}
              player={player}
              url="http://localhost:3001/search_player_by_name"
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10,
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
                  flexShrink: 0,
                  minWidth: "60%",
                  display: loaded ? "block" : "none",
                }}
              />
              {!loaded ? <CircularProgress /> : null}
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: "10px 0px" }}>
          <Typography variant="h5" align="left" style={{ paddingBottom: 10 }}>
            Batting Averages
          </Typography>
          {Object.keys(player).length ? (
            <IccPlayerBattingAverages player={player} />
          ) : null}
        </Grid>
        <Grid item xs={12} style={{ padding: "10px 0px" }}>
          <Typography variant="h5" align="left" style={{ paddingBottom: 10 }}>
            Bowling Averages
          </Typography>
          {Object.keys(player).length ? (
            <IccPlayerBowlingAverages player={player} />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(IccPlayerProfile);
