import ComboBox from "./ComboBox";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
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

const IccPlayerComparison = () => {
  const [initialPlayersList, setInitialPlayersList] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState({});
  const [secondPlayer, setSecondPlayer] = useState({});
  const [firstRef, firstLoaded, firstOnLoad] = useImageLoaded();
  const [secondRef, secondLoaded, secondOnLoad] = useImageLoaded();

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
          <ComboBox
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
            isFirst={true}
          />
        </Grid>
        <Grid item xs={6}>
          <ComboBox
            InitialPlayersList={initialPlayersList}
            setSelectedPlayer={handleSelectedPlayer}
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
              border: "1px solid black",
              padding: 10,
              height: "85%",
            }}
          >
            <img
              ref={firstRef}
              onLoad={firstOnLoad}
              src={
                firstPlayer.avatar_url
                  ? firstPlayer.avatar_url
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
                secondPlayer.avatar_url
                  ? secondPlayer.avatar_url
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
    </div>
  );
};

export default IccPlayerComparison;
