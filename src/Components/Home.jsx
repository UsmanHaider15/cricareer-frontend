import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlayerStatCard from "./PlayerStatCard";
import StatCards from "./StatCards";

const homeData = [
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
      {
        lable: "Highest Score",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "108*",
      },
      {
        lable: "Most Runs",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "259",
      },
      {
        lable: "Most Wickets",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png",
        player_name: "usman haider",
        value: "13",
      },
    ],
    subStats: [
      { lable: "Matches Played", value: "32" },
      { lable: "Most Match Score", value: "32" },
      { lable: "Best Win Percentage", value: "32" },
      { lable: "Most Runs Scored in a match", value: "306" },
      { lable: "total number of sixes", value: 76 },
      { lable: "TOTAL NUMBER OF WICKETS", value: 5345 },
    ],
  },
];

const Home = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid xs={12}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#170451",
              color: "white",
              height: 700,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" component="div" gutterBottom>
              CRICAREER
            </Typography>
            <Typography variant="body1" gutterBottom>
              World's Best Cricket League Statistic Site
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <StatCards />

      <Grid container>
        <Grid md={2} />
        <Grid xs={12} md={8}>
          <Grid container spacing={1}>
            {[1, 2].map((item) => (
              <Grid item xs={12} md={6}>
                <PlayerStatCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid md={2} />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
