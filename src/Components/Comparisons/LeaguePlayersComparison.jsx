import React from "react";
import PlayerSearch from "Components/Common/PlayerSearch";
import Grid from "@mui/material/Grid";
import qs from "qs";
import { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import Breadcrumb from "Components/Common/Breadcrumb";
import httpService from "Services/httpService";
import LeaguePlayersBattingAveragesComparison from "./LeaguePlayersBattingAveragesComparison";
import LeaguePlayersBowlingAveragesComparison from "./LeaguePlayersBowlingAveragesComparison";
import Header from "Components/Common/Header";
import { Box } from "@mui/material";
import {
  generateComparisonHeaderDescription,
  generateComparisonHeaderTitle,
} from "Utils/generateHeader";
import PlayerImage from "Components/Common/PlayerImage";
import LeaguePlayerComparisonSkeleton from "./LeaguePlayerComparisonSkeleton";

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

  const prevLeagueName = usePrevious(leagueName);

  const [battingSeason, setBattingSeason] = React.useState(0);
  const [battingOpposition, setBattingOpposition] = React.useState("All Teams");
  const [bowlingSeason, setBowlingSeason] = React.useState(0);
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
  }, []);

  useEffect(() => {
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
  }, [initialFirstPlayerID, initialSecondPlayerID]);

  const handleSelectedPlayer = (player, isFirst) => {
    if (isFirst) {
      setFirstPlayer(player);
    } else {
      setSecondPlayer(player);
    }
  };

  return (
    <React.Fragment>
      {firstPlayer["player_id"] && secondPlayer["player_id"] ? (
        <Box sx={{ padding: { xs: 2 }, paddingRight: { xs: 1, md: 2 } }}>
          <Header
            title={generateComparisonHeaderTitle({
              firstPlayerName: firstPlayer["player_name"],
              secondPlayerName: secondPlayer["player_name"],
              leagueName,
            })}
            description={generateComparisonHeaderDescription({
              firstPlayerName: firstPlayer["player_name"],
              secondPlayerName: secondPlayer["player_name"],
              leagueName,
            })}
          />
          <Breadcrumb leagueName={leagueName} type="comparison" />
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
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <PlayerImage imageUrl={firstPlayer["headshot_image_url"]} />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <PlayerImage imageUrl={secondPlayer["headshot_image_url"]} />
            </Grid>
          </Grid>
          <Grid container>
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
          </Grid>
        </Box>
      ) : (
        <LeaguePlayerComparisonSkeleton />
      )}
    </React.Fragment>
  );
};

export default withRouter(LeaguePlayersComparison);
