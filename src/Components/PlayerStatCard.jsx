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

export default function PlayerStatCard() {
  return (
    <Grid container>
      <Grid md={2} />
      <Grid xs={12} md={8}>
        <Grid container spacing={1}>
          {playerStats.map((playerStat) =>
            playerStat.stats.map((stat) => (
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", xl: "row" },
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
            ))
          )}
        </Grid>
      </Grid>
      <Grid md={2} />
    </Grid>
  );
}
