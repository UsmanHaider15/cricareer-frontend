import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import qs from "qs";
import PlayerSearch from "Components/Common/PlayerSearch";
import Grid from "@mui/material/Grid";
import LeaguePlayerBattingAverages from "./LeaguePlayerBattingAverages";
import LeaguePlayerBowlingAverages from "./LeaguePlayerBowlingAverages";
import Breadcrumb from "Components/Common/Breadcrumb";
import httpService from "Services/httpService";
import Header from "Components/Common/Header";
import { getHeaderTitle, getHeaderDescription } from "Utils/generateHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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

const LeaguePlayerProfile = ({ history, leagueName, initialPlayerID }) => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [player, setPlayer] = useState({});
  const [ref, loaded, onLoad] = useImageLoaded();
  const prevLeagueName = usePrevious(leagueName);

  const [battingSeason, setBattingSeason] = React.useState("");
  const [bowlingSeason, setBowlingSeason] = React.useState("");

  if (prevLeagueName && leagueName !== prevLeagueName) {
    window.location.reload();
  }
  useEffect(() => {
    if (Object.keys(player).length) {
      history.push({
        pathname: "",
        search: `player_id=${player.player_id}&batting_season=${battingSeason}&bowling_season=${bowlingSeason}`,
      });
    }
  }, [player, battingSeason, bowlingSeason, history]);

  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
          // Handle forward event
        } else {
          // Handle back event
          history.push("/");
        }
      }
    });
  }, [locationKeys, history]);

  useEffect(() => {
    httpService
      .get("/league_player_profile/get_players_list", {
        params: {
          limit: 500,
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

    const query_parameters = qs.parse(history.location.search.substring(1));
    const batting_season = query_parameters["batting_season"];
    const bowling_season = query_parameters["bowling_season"];
    setBattingSeason(batting_season || 0);
    setBowlingSeason(bowling_season || 0);

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
  }, [history, initialPlayerID, leagueName]);

  const handleSelectedPlayer = (player) => {
    setPlayer(player);
  };

  return (
    <Box sx={{ padding: { xs: 2 } }}>
      <Header
        title={getHeaderTitle({ playerName: player.player_name, leagueName })}
        description={getHeaderDescription({
          playerName: player.player_name,
          leagueName,
        })}
      />
      <Breadcrumb />
      <Grid container spacing={1}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={player}
            url="/league_player_profile/search_player_by_name"
            league_name={leagueName}
          />
        </Grid>
        <Grid item xs={3} />

        <Grid item xs={3} />
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              position: "relative",
              width: { xs: 150, md: 300 },
              height: { xs: 150, md: 300 },

              display: "flex",
              justifyContent: "center",
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
                width: "auto",
                height: "100%",
              }}
            />
            {!loaded ? (
              <CircularProgress
                sx={{
                  position: "absolute",
                  top: "35%",
                  left: "50%",
                }}
              />
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={3} />

        <Grid item xs={12}>
          <Box sx={{ textAlign: "left", fontSize: { xs: 30, md: 48 } }}>
            Batting Averages
          </Box>
          {Object.keys(player).length > 0 ? (
            <LeaguePlayerBattingAverages
              leagueName={leagueName}
              player={player}
              battingSeason={battingSeason}
              setBattingSeason={setBattingSeason}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: 250,
                width: "100%",
                position: "relative",
              }}
            >
              <CircularProgress
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(50%, 50%)",
                }}
              />
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ textAlign: "left", fontSize: { xs: 30, md: 48 } }}>
            Bowling Averages
          </Box>

          {Object.keys(player).length > 0 ? (
            <LeaguePlayerBowlingAverages
              leagueName={leagueName}
              player={player}
              bowlingSeason={bowlingSeason}
              setBowlingSeason={setBowlingSeason}
            />
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default withRouter(LeaguePlayerProfile);
