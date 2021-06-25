import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import qs from "qs";
import PlayerSearch from "Components/PlayerSearch";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import IccPlayerBattingAverages from "./IccPlayerBattingAverages";
import IccPlayerBowlingAverages from "./IccPlayerBowlingAverages";
import Breadcrumb from "Components/Common/Breadcrumb";
import CustomResponsiveFontSizes from "Components/Common/Heading";
import httpService from "Services/httpService";

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
    httpService
      .get("/get_players_list", {
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

    httpService
      .get(`/get_player_by_id`, {
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
      <Breadcrumb />
      <Grid container spacing={1}>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <PlayerSearch
              InitialPlayersList={initialPlayersList}
              setSelectedPlayer={handleSelectedPlayer}
              player={player}
              url="/search_player_by_name"
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
                  player.headshot_image_url
                    ? player.headshot_image_url
                    : "/default-user.jpg"
                }
                alt=""
                style={{
                  minWidth: "60%",
                  display: loaded ? "block" : "none",
                }}
              />
              {!loaded ? <CircularProgress /> : null}
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 10 }}>
          <CustomResponsiveFontSizes text="Batting Averages" />
          {Object.keys(player).length ? (
            <IccPlayerBattingAverages player={player} />
          ) : null}
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 10 }}>
          <CustomResponsiveFontSizes text="Bowling Averages" />
          {Object.keys(player).length ? (
            <IccPlayerBowlingAverages player={player} />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(IccPlayerProfile);
