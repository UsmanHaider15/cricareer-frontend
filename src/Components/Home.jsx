import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
const homeData = [
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
      {
        type: "Highest Score",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "108*",
      },
      {
        type: "Most Runs",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "259",
      },
      {
        type: "Most Wickets",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "13",
      },
    ],
  },
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
      {
        type: "Highest Score",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "108*",
      },
      {
        type: "Most Runs",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "259",
      },
      {
        type: "Most Wickets",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "13",
      },
    ],
  },
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
      {
        type: "Highest Score",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "108*",
      },
      {
        type: "Most Runs",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "259",
      },
      {
        type: "Most Wickets",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "13",
      },
    ],
  },
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
      {
        type: "Highest Score",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "108*",
      },
      {
        type: "Most Runs",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "259",
      },
      {
        type: "Most Wickets",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "13",
      },
    ],
  },
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
      {
        type: "Highest Score",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "108*",
      },
      {
        type: "Most Runs",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "259",
      },
      {
        type: "Most Wickets",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "13",
      },
    ],
  },
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
      {
        type: "Highest Score",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "108*",
      },
      {
        type: "Most Runs",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "259",
      },
      {
        type: "Most Wickets",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "13",
      },
    ],
  },
];
const Home = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid container>
        <Grid md={3}></Grid>
        <Grid xs={12} md={6}>
          <Box
            sx={{
              padding: 5,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" component="div" gutterBottom>
              Cricareer - Cricket Statistics Site
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="h3" component="div" gutterBottom>
              Some awesome stats or whatever
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {homeData.map((data) =>
              data.stats.map((stat) => (
                <Grid item xs={12} lg={6}>
                  <div
                    style={{
                      backgroundColor: "rgb(16,4,74)",
                      height: 200,
                      position: "relative",
                      borderRadius: 5,
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        textAlign: "left",
                        position: "absolute",
                        top: 20,
                        left: 20,
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                      }}
                    >
                      HIGHEST SCORE
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        position: "absolute",
                        top: 60,
                        left: 20,
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      USMAN <br />
                      HAIDER
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        position: "absolute",
                        top: 140,
                        left: 20,
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      200*
                    </div>
                    <img
                      style={{
                        right: -20,
                        bottom: 0,
                        position: "absolute",
                        height: 200,
                        width: 300,
                        zIndex: -10,
                      }}
                      class="image1"
                      src="https://cricareer.s3.ap-south-1.amazonaws.com/avatars/253802_headshot.png"
                    />
                  </div>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
        <Grid md={3}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
