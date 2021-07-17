import React from "react";
import PlayerSearch from "Components/PlayerSearch";
import Grid from "@material-ui/core/Grid";
import qs from "qs";
import { useState, useEffect, useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";
import Breadcrumb from "Components/Common/Breadcrumb";
import httpService from "Services/httpService";
import LeaguePlayersBattingAveragesComparison from "./LeaguePlayersBattingAveragesComparison";
import LeaguePlayersBowlingAveragesComparison from "./LeaguePlayersBowlingAveragesComparison";
import Header from "Components/Common/Header";
import {
  icc_batting_table_column_name_lookup,
  icc_bowling_table_column_name_lookup,
  league_teams,
} from "Data/data";

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

const LeaguePlayersComparison = ({
  history,
  leagueName,
  initialFirstPlayerID,
  initialSecondPlayerID,
}) => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState({});
  const [secondPlayer, setSecondPlayer] = useState({});
  const [firstRef, firstLoaded, firstOnLoad] = useImageLoaded();
  const [secondRef, secondLoaded, secondOnLoad] = useImageLoaded();
  const prevLeagueName = usePrevious(leagueName);

  const [battingSeason, setBattingSeason] = React.useState(5);
  const [battingOpposition, setBattingOpposition] = React.useState("All Teams");
  const [bowlingSeason, setBowlingSeason] = React.useState(5);
  const [bowlingOpposition, setBowlingOpposition] = React.useState("All Teams");

  if (prevLeagueName && leagueName !== prevLeagueName) {
    window.location.reload();
  }

  useEffect(() => {
    if (Object.keys(firstPlayer).length && Object.keys(secondPlayer).length) {
      history.push({
        pathname: "",
        search: `first_player_id=${firstPlayer.player_id}&second_player_id=${secondPlayer.player_id}&batting_season=${battingSeason}&batting_opposition=${battingOpposition}&bowling_season=${bowlingSeason}&bowling_opposition=${bowlingOpposition}`,
      });
    }
  }, [
    firstPlayer,
    secondPlayer,
    battingSeason,
    battingOpposition,
    bowlingSeason,
    bowlingOpposition,
    history,
  ]);

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

    const query_parameters = qs.parse(history.location.search.substring(1));

    const batting_opposition = query_parameters["batting_opposition"];
    console.log("batting_opposition", batting_opposition);
    setBattingOpposition(batting_opposition || "All Teams");
    const batting_season = query_parameters["batting_season"];
    console.log("batting_season", batting_season);
    setBattingSeason(batting_season || 0);

    const bowling_opposition = query_parameters["bowling_opposition"];
    setBowlingOpposition(bowling_opposition || "All Teams");
    const bowling_season = query_parameters["bowling_season"];
    setBowlingSeason(bowling_season || 0);

    const player_ids = qs.parse(history.location.search.substring(1));
    const first_player_id = player_ids.first_player_id || initialFirstPlayerID;
    const second_player_id =
      player_ids.second_player_id || initialSecondPlayerID;

    httpService
      .get(`/league_player_profile/get_player_by_id`, {
        params: {
          player_id: first_player_id,
          league_name: leagueName,
        },
      })
      .then(function (response) {
        setFirstPlayer(response.data.rows[0]);
      })
      .catch(function (error) {
        console.log(error);
      });

    httpService
      .get(`/league_player_profile/get_player_by_id`, {
        params: {
          player_id: second_player_id,
          league_name: leagueName,
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
  }, [history, initialFirstPlayerID, initialSecondPlayerID, leagueName]);

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
        title={`${firstPlayer.player_name} vs ${
          secondPlayer.player_name
        } in ${leagueName.toUpperCase()}`}
        description={`
        Compare ${firstPlayer.player_name} and ${
          secondPlayer.player_name
        } in ${leagueName.toUpperCase()} on basis of ${Object.values(
          icc_bowling_table_column_name_lookup
        ).join(", ")} ${Object.values(
          icc_bowling_table_column_name_lookup
        ).join(", ")} in test, odi and t20 and all formats.
        Compare ${firstPlayer.player_name} and ${
          secondPlayer.player_name
        } on basis of  ${Object.values(
          icc_batting_table_column_name_lookup
        ).join(", ")} ${Object.values(
          icc_bowling_table_column_name_lookup
        ).join(", ")} against ${league_teams[leagueName].join(", ")}.`}
      />
      <Breadcrumb />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={firstPlayer}
            url="/league_player_profile/search_player_by_name"
            league_name={leagueName}
          />
        </Grid>
        <Grid item xs={6}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={secondPlayer}
            isFirst={false}
            url="/league_player_profile/search_player_by_name"
            league_name={leagueName}
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
            <LeaguePlayersBattingAveragesComparison
              firstPlayer={firstPlayer}
              secondPlayer={secondPlayer}
              leagueName={leagueName}
              battingSeason={battingSeason}
              setBattingSeason={setBattingSeason}
              battingOpposition={battingOpposition}
              setBattingOpposition={setBattingOpposition}
            />
            <LeaguePlayersBowlingAveragesComparison
              firstPlayer={firstPlayer}
              secondPlayer={secondPlayer}
              leagueName={leagueName}
              bowlingSeason={bowlingSeason}
              setBowlingSeason={setBowlingSeason}
              bowlingOpposition={bowlingOpposition}
              setBowlingOpposition={setBowlingOpposition}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default withRouter(LeaguePlayersComparison);
