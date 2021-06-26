import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import qs from "qs";
import PlayerSearch from "Components/PlayerSearch";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LeaguePlayerBattingAverages from "./LeaguePlayerBattingAverages";
import LeaguePlayerBowlingAverages from "./LeaguePlayerBowlingAverages";
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

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const LeaguePlayerProfiles = ({ history, leagueName, initialPlayerID }) => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [player, setPlayer] = useState({});
  const [ref, loaded, onLoad] = useImageLoaded();
  const prevLeagueName = usePrevious(leagueName);

  if (prevLeagueName && leagueName !== prevLeagueName) {
    window.location.reload();
  }
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
      .get("/league_player_profile/get_players_list", {
        params: {
          limit: 100,
          league_name: leagueName,
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
    const player_id = url_id.player_id ? url_id.player_id : initialPlayerID;

    httpService
      .get(`/league_player_profile/get_player_by_id`, {
        params: {
          player_id: player_id,
          league_name: leagueName,
        },
      })
      .then(function (response) {
        console.log("response", response);
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
              url="/league_player_profile/search_player_by_name"
              league_name={leagueName}
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
          {Object.keys(player).length > 0 ? (
            <LeaguePlayerBattingAverages
              leagueName={leagueName}
              player={player}
            />
          ) : null}
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 10 }}>
          <CustomResponsiveFontSizes text="Bowling Averages" />
          {Object.keys(player).length > 0 ? (
            <LeaguePlayerBowlingAverages
              leagueName={leagueName}
              player={player}
            />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(LeaguePlayerProfiles);
