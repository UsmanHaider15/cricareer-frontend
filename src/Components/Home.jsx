import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    subStats: [
      { type: "Matches Played", value: "32" },
      { type: "Most Match Score", value: "32" },
      { type: "Best Win Percentage", value: "32" },
      { type: "Most Runs Scored in a match", value: "306" },
      { type: "total number of sixes", value: 76 },
      { type: "TOTAL NUMBER OF WICKETS", value: 5345 },
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
    subStats: [
      { type: "Matches Played", value: "32" },
      { type: "Most Match Score", value: "32" },
      { type: "Best Win Percentage", value: "32" },
      { type: "Most Runs Scored in a match", value: "306" },
      { type: "total number of sixes", value: 76 },
      { type: "TOTAL NUMBER OF WICKETS", value: 5345 },
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
    subStats: [
      { type: "Matches Played", value: "32" },
      { type: "Most Match Score", value: "32" },
      { type: "Best Win Percentage", value: "32" },
      { type: "Most Runs Scored in a match", value: "306" },
      { type: "total number of sixes", value: 76 },
      { type: "TOTAL NUMBER OF WICKETS", value: 5345 },
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
    subStats: [
      { type: "Matches Played", value: "32" },
      { type: "Most Match Score", value: "32" },
      { type: "Best Win Percentage", value: "32" },
      { type: "Most Runs Scored in a match", value: "306" },
      { type: "total number of sixes", value: 76 },
      { type: "TOTAL NUMBER OF WICKETS", value: 5345 },
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
    subStats: [
      { type: "Matches Played", value: "32" },
      { type: "Most Match Score", value: "32" },
      { type: "Best Win Percentage", value: "32" },
      { type: "Most Runs Scored in a match", value: "306" },
      { type: "total number of sixes", value: 76 },
      { type: "TOTAL NUMBER OF WICKETS", value: 5345 },
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
    subStats: [
      { type: "Matches Played", value: "32" },
      { type: "Most Match Score", value: "32" },
      { type: "Best Win Percentage", value: "32" },
      { type: "Most Runs Scored in a match", value: "306" },
      { type: "total number of sixes", value: 76 },
      { type: "TOTAL NUMBER OF WICKETS", value: 5345 },
    ],
  },
];
const Home = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid md={2}></Grid>
        <Grid xs={12} md={8}>
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
          {homeData.map((data) => (
            <div>
              <div style={{ padding: "40px 0px 20px 0px" }}>
                <Typography variant="h3" gutterBottom component="div">
                  {data.fullLeagueName}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                  TOURNAMENT STATS
                </Typography>
              </div>

              <Grid container spacing={1}>
                {data.stats.map((stat) => (
                  <Grid item xs={12} md={6} lg={4}>
                    <div
                      style={{
                        backgroundColor: "rgb(16,4,74)",
                        height: 200,
                        position: "relative",
                        borderRadius: 5,
                        color: "white",
                        zIndex: 1,
                        overflow: "hidden",
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
                          top: 80,
                          left: 20,
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        USMAN HAIDER
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          position: "absolute",
                          bottom: 20,
                          left: 20,
                          fontWeight: "bold",
                          fontSize: "2rem",
                        }}
                      >
                        200*
                      </div>
                      <img
                        style={{
                          right: -50,
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
                ))}
              </Grid>
              <Grid container spacing={1} style={{ paddingTop: 10 }}>
                {data.subStats.map((stat) => (
                  <Grid item xs={6} md={2} lg={2}>
                    <div
                      style={{
                        backgroundColor: "rgb(16,4,74)",
                        height: 150,
                        borderRadius: 5,
                        color: "white",
                        zIndex: 1,
                        overflow: "hidden",
                        padding: 10,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        {stat.type}
                      </div>
                      <div style={{ fontSize: "3rem", fontWeight: "bolder" }}>
                        {stat.value}
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Grid>
        <Grid md={2}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
