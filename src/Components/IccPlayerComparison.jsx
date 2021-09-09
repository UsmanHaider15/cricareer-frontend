import React from "react";
import PlayerSearch from "./PlayerSearch";
import Grid from "@material-ui/core/Grid";
import qs from "qs";
import { useState, useEffect, useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";
import Breadcrumb from "Components/Common/Breadcrumb";
import httpService from "Services/httpService";
import IccPlayersBattingAveragesComparison from "./Comparisons/IccPlayersBattingAveragesComparison";
import IccPlayersBowlingAveragesComparison from "./Comparisons/IccPlayersBowlingAveragesComparison";
import Header from "Components/Common/Header";
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

const IccPlayerComparison = ({
  history,
  initialFirstPlayerID,
  initialSecondPlayerID,
}) => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState({});
  const [secondPlayer, setSecondPlayer] = useState({});
  const [firstRef, firstLoaded, firstOnLoad] = useImageLoaded();
  const [secondRef, secondLoaded, secondOnLoad] = useImageLoaded();

  const [battingFormat, setBattingFormat] = React.useState("All Formats");
  const [battingOpposition, setBattingOpposition] = React.useState("all_teams");
  const [bowlingFormat, setBowlingFormat] = React.useState("All Formats");
  const [bowlingOpposition, setBowlingOpposition] = React.useState("all_teams");

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
    if (Object.keys(firstPlayer).length && Object.keys(secondPlayer).length) {
      history.push({
        pathname: "",
        search: `first_player_id=${firstPlayer.player_id}&second_player_id=${secondPlayer.player_id}&battingFormat=${battingFormat}&battingOpposition=${battingOpposition}&bowlingFormat=${bowlingFormat}&bowlingOpposition=${bowlingOpposition}`,
      });
    }
  }, [
    firstPlayer,
    secondPlayer,
    battingFormat,
    battingOpposition,
    bowlingFormat,
    bowlingOpposition,
    history,
  ]);

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

    const batting_opposition = query_parameters["battingOpposition"];
    setBattingOpposition(batting_opposition || "all_teams");
    const batting_format = query_parameters["battingFormat"];
    setBattingFormat(batting_format || "All Formats");

    const bowling_opposition = query_parameters["bowlingOpposition"];
    setBowlingOpposition(bowling_opposition || "all_teams");
    const bowling_format = query_parameters["bowlingFormat"];
    setBowlingFormat(bowling_format || "All Formats");

    const player_ids = qs.parse(history.location.search.substring(1));
    const first_player_id = player_ids.first_player_id || initialFirstPlayerID;
    const second_player_id =
      player_ids.second_player_id || initialSecondPlayerID;

    httpService
      .get(`/get_player_by_id`, {
        params: {
          player_id: first_player_id,
        },
      })
      .then(function (response) {
        setFirstPlayer(response.data.rows[0]);
      })
      .catch(function (error) {
        console.log(error);
      });

    httpService
      .get(`/get_player_by_id`, {
        params: {
          player_id: second_player_id,
        },
      })
      .then(function (response) {
        setSecondPlayer(response.data.rows[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push({
      // pathname: "",
      search: `first_player_id=${first_player_id}&second_player_id=${second_player_id}`,
    });
  }, [history, initialFirstPlayerID, initialSecondPlayerID]);

  const handleSelectedPlayer = (player, isFirst) => {
    if (isFirst) {
      setFirstPlayer(player);
    } else {
      setSecondPlayer(player);
    }
  };

  return (
    <div>
      <Header
        title={`${firstPlayer.player_name} vs ${secondPlayer.player_name}`}
        description={`
        Compare Batting and Bowling Averages of ${
          firstPlayer.player_name
        } and ${
          secondPlayer.player_name
        } in Tests, ODIs, T20Is. You can also compare their batting and bowling averages against other teams like${Object.values(
          icc_teams_lookup
        )
          .slice(1)
          .map((team) => ` ${team}`)} as well.`}
      />
      <Breadcrumb />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={firstPlayer}
          />
        </Grid>
        <Grid item xs={6}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={secondPlayer}
            isFirst={false}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              padding: 10,
            }}
          >
            <img
              ref={firstRef}
              onLoad={firstOnLoad}
              src={firstPlayer.headshot_image_url || "/default-user.jpg"}
              alt=""
              style={{
                minWidth: "60%",
                display: firstLoaded ? "block" : "none",
              }}
            />
            {!firstLoaded ? <CircularProgress /> : null}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              padding: 10,
            }}
          >
            <img
              ref={secondRef}
              onLoad={secondOnLoad}
              src={secondPlayer.headshot_image_url || "/default-user.jpg"}
              alt=""
              style={{
                minWidth: "60%",
                display: secondLoaded ? "block" : "none",
              }}
            />

            {!secondLoaded ? <CircularProgress /> : null}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        {firstPlayer.player_id && secondPlayer.player_id ? (
          <Grid container>
            <IccPlayersBattingAveragesComparison
              firstPlayer={firstPlayer}
              secondPlayer={secondPlayer}
              battingFormat={battingFormat}
              setBattingFormat={setBattingFormat}
              battingOpposition={battingOpposition}
              setBattingOpposition={setBattingOpposition}
            />
            <IccPlayersBowlingAveragesComparison
              firstPlayer={firstPlayer}
              secondPlayer={secondPlayer}
              bowlingFormat={bowlingFormat}
              setBowlingFormat={setBowlingFormat}
              bowlingOpposition={bowlingOpposition}
              setBowlingOpposition={setBowlingOpposition}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default withRouter(IccPlayerComparison);
