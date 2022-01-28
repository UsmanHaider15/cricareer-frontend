import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import qs from "qs";
import PlayerSearch from "Components/PlayerSearch";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import IccPlayerBattingAverages from "./IccPlayerBattingAverages";
import IccPlayerBowlingAverages from "./IccPlayerBowlingAverages";
import Breadcrumb from "Components/Common/Breadcrumb";
import CustomResponsiveFontSizes from "Components/Common/Heading";
import httpService from "Services/httpService";
import Header from "Components/Common/Header";
import humanify from "Utils/humanify";
import { icc_teams_lookup } from "Data/data";

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

const IccPlayerProfile = ({ history, initialPlayerID }) => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [player, setPlayer] = useState({});
  const [ref, loaded, onLoad] = useImageLoaded();

  const [battingOpposition, setBattingOpposition] = React.useState("");
  const [bowlingOpposition, setBowlingOpposition] = React.useState("");

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
    if (Object.keys(player).length) {
      history.push({
        pathname: "",
        search: `player_id=${player.player_id}&batting_opposition=${battingOpposition}&bowling_opposition=${bowlingOpposition}`,
      });
    }
  }, [player, battingOpposition, bowlingOpposition, history]);

  useEffect(() => {
    httpService
      .get("/get_players_list", {
        params: {
          limit: 500,
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
    const batting_opposition = query_parameters["batting_opposition"];
    const bowling_opposition = query_parameters["bowling_opposition"];
    setBattingOpposition(batting_opposition || "all_teams");
    setBowlingOpposition(bowling_opposition || "all_teams");

    const player_id = query_parameters["player_id"]
      ? query_parameters["player_id"]
      : initialPlayerID;

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
  }, [history, initialPlayerID]);

  const handleSelectedPlayer = (player) => {
    setPlayer(player);
  };

  return (
    <div>
      <Header
        title={`${player.player_name}'s Batting and Bowling Averages`}
        description={`Get Details of
      ${player.player_name}'s batting and bowling averages against ${humanify(
          battingOpposition
        )} in Tests, ODIs and T20Is. You can also get details of bowling and batting averages of player against teams like${Object.values(
          icc_teams_lookup
        )
          .slice(1)
          .map((team) => ` ${team}`)} as well.
       `}
      />
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
            <IccPlayerBattingAverages
              player={player}
              battingOpposition={battingOpposition}
              setBattingOpposition={setBattingOpposition}
            />
          ) : null}
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 10 }}>
          <CustomResponsiveFontSizes text="Bowling Averages" />
          {Object.keys(player).length ? (
            <IccPlayerBowlingAverages
              player={player}
              bowlingOpposition={bowlingOpposition}
              setBowlingOpposition={setBowlingOpposition}
            />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(IccPlayerProfile);
