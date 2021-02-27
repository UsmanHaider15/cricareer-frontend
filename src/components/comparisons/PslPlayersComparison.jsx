import PlayerSearch from "../PlayerSearch";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import qs from "qs";
import { useState, useEffect, useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router";
import PslCareerComparisons from "./PslCareerComparisons";

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

const PslPlayersBattingComparison = ({ history }) => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState({});
  const [secondPlayer, setSecondPlayer] = useState({});
  const [firstRef, firstLoaded, firstOnLoad] = useImageLoaded();
  const [secondRef, secondLoaded, secondOnLoad] = useImageLoaded();

  useEffect(() => {
    if (Object.keys(firstPlayer).length && Object.keys(secondPlayer).length) {
      history.push({
        pathname: "",
        search: `first_player_id=${firstPlayer.player_id}&second_player_id=${secondPlayer.player_id}`,
      });
    }
  }, [firstPlayer, secondPlayer]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/psl_profile/get_players_list", {
        params: {
          limit: 100,
          league_name: "psl",
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

    const player_ids = qs.parse(history.location.search.substring(1));
    const first_player_id = player_ids.first_player_id
      ? player_ids.first_player_id
      : 440;
    const second_player_id = player_ids.second_player_id
      ? player_ids.second_player_id
      : 441;

    axios
      .get(`http://localhost:3001/psl_profile/get_player_by_id`, {
        params: {
          player_id: first_player_id,
          league_name: "psl",
        },
      })
      .then(function (response) {
        setFirstPlayer(response.data.rows[0]);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(`http://localhost:3001/psl_profile/get_player_by_id`, {
        params: {
          player_id: second_player_id,
          league_name: "psl",
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
  }, []);

  const handleSelectedPlayer = (player, isFirst) => {
    if (isFirst) {
      setFirstPlayer(player);
    } else {
      setSecondPlayer(player);
    }
  };

  return (
    <div>
      <Grid container style={{ paddingTop: 10 }} spacing={1}>
        <Grid item xs={6}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={firstPlayer}
            url="http://localhost:3001/psl_profile/search_player_by_name"
            league_name="psl"
          />
        </Grid>
        <Grid item xs={6}>
          <PlayerSearch
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            player={secondPlayer}
            isFirst={false}
            url="http://localhost:3001/psl_profile/search_player_by_name"
            league_name="psl"
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
              border: "1px solid black",
              padding: 10,
              height: "85%",
            }}
          >
            <img
              ref={firstRef}
              onLoad={firstOnLoad}
              src={
                firstPlayer.player_image_url
                  ? firstPlayer.player_image_url
                  : "/default-user.jpg"
              }
              alt=""
              style={{
                flexShrink: 0,
                minWidth: "100%",
                maxWidth: "100%",
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
              border: "1px solid black",
              padding: 10,
              height: "85%",
            }}
          >
            <img
              ref={secondRef}
              onLoad={secondOnLoad}
              src={
                secondPlayer.player_image_url
                  ? secondPlayer.player_image_url
                  : "/default-user.jpg"
              }
              alt=""
              style={{
                flexShrink: 0,
                minWidth: "100%",
                maxWidth: "100%",
                display: secondLoaded ? "block" : "none",
              }}
            />

            {!secondLoaded ? <CircularProgress /> : null}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        {firstPlayer.player_id && secondPlayer.player_id ? (
          <PslCareerComparisons
            firstPlayer={firstPlayer}
            secondPlayer={secondPlayer}
          />
        ) : null}
      </Grid>
    </div>
  );
};

export default withRouter(PslPlayersBattingComparison);
