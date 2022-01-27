import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const playerStats = [
  {
    fullLeagueName: "Pakistan Super League",
    leagueName: "PSL",
    stats: [
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
  },

  {
    fullLeagueName: "Indian Premier League",
    leagueName: "IPL",
    stats: [
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
  },

  {
    fullLeagueName: "Indian Premier League",
    leagueName: "IPL",
    stats: [
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
  },

  {
    fullLeagueName: "Indian Premier League",
    leagueName: "IPL",
    stats: [
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
  },

  {
    fullLeagueName: "Indian Premier League",
    leagueName: "IPL",
    stats: [
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
  },

  {
    fullLeagueName: "Indian Premier League",
    leagueName: "IPL",
    stats: [
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
  },
];

export default function PlayerStatCard() {
  return (
    <div>
      {playerStats.map((playerStat) => (
        <React.Fragment>
          <Grid item xs={12}>
            <Box sx={{ fontSize: { xs: 30, xl: 42 }, mt: 4 }}>
              {" "}
              {playerStat.fullLeagueName}
            </Box>
          </Grid>
          <Grid container spacing={1}>
            {playerStat.stats.map((stat) => (
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row-reverse" },
                    alignItems: "center",
                    bgcolor: "background.paper",
                    overflow: "hidden",
                    borderRadius: "12px",
                    boxShadow: 1,
                    fontWeight: "bold",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 233,
                      width: 350,
                      maxHeight: { xs: 200 },
                      maxWidth: { xs: 300 },
                    }}
                    alt="The house from the offer."
                    src={stat.avatar_url}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      flexGrow: 1,
                      alignItems: { xs: "center", xl: "flex-center" },
                      m: 3,
                      height: { xl: 160 },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ fontSize: { xs: 24, xl: 30 }, mt: 1 }}
                    >
                      {stat.lable}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        color: "primary.main",
                        fontSize: { xs: 24, xl: 30 },
                      }}
                    >
                      {stat.player_name}
                    </Box>
                    <Box
                      sx={{
                        fontSize: { xs: 24, xl: 30 },
                      }}
                    >
                      {stat.value}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </div>
  );
}
