import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const playerStats = [
  {
    fullLeagueName: "Lanka Premier League",
    leagueName: "lpl",
    brandColor: "#2389d0",
    stats: [
      {
        label: "Most Runs",
        player_url: "/profile/lpl_profile?player_id=47",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/345821_headshot.png",
        player_name: "MD Gunathilaka",
        value: "702",
      },
      {
        label: "Most Wickets",
        player_url: "/profile/lpl_profile?player_id=21",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/784379_headshot.png",
        player_name: "PWH de Silva",
        value: "28",
      },
    ],
  },

  {
    fullLeagueName: "Caribbean Premier League",
    leagueName: "cpl",
    brandColor: "#ed1c24",
    stats: [
      {
        label: "Most Runs",
        player_url: "/profile/cpl_profile?player_id=19",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/53116_headshot.png",
        player_name: "LMP Simmons",
        value: "2545",
      },
      {
        label: "Most Wickets",
        player_url: "/profile/cpl_profile?player_id=58",
        avatar_url:
          "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/51439_headshot.png",
        player_name: "DJ Bravo",
        value: "58",
      },
    ],
  },
  // {
  //   fullLeagueName: "Pakistan Super League",
  //   leagueName: "psl",
  //   stats: [
  //     {
  //       label: "Most Runs",
  //       player_url: "/profile/psl_profile?player_id=63",
  //       avatar_url:
  //         "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/348144_headshot.png",
  //       player_name: "Babar Azam",
  //       value: "2264",
  //     },
  //     {
  //       label: "Most Wickets",
  //       player_url: "/profile/psl_profile?player_id=9",
  //       avatar_url:
  //         "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/43590_headshot.png",
  //       player_name: "Wahab Riaz",
  //       value: "94",
  //     },
  //   ],
  // },
  // {
  //   fullLeagueName: "Big Bash League",
  //   leagueName: "bbl",
  //   stats: [
  //     {
  //       label: "Most Runs",
  //       player_url: "/profile/bbl_profile?player_id=137",
  //       avatar_url:
  //         "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/326637_headshot.png",
  //       player_name: "CA Lynn",
  //       value: "2960",
  //     },
  //     {
  //       label: "Most Wickets",
  //       player_url: "/profile/bbl_profile?player_id=66",
  //       avatar_url:
  //         "https://cricareer.s3.ap-south-1.amazonaws.com/avatars/398666_headshot.png",
  //       player_name: "SA Abbott",
  //       value: "124",
  //     },
  //   ],
  // },
];

export default function PlayerStatCard() {
  return (
    <div>
      {playerStats.map((playerStat) => (
        <React.Fragment>
          <Grid item xs={12}>
            <Box sx={{ fontSize: { xs: 30, xl: 42 }, mt: 4 }}>
              {" "}
              <Link to={`/league/${playerStat.leagueName}_league`}>
                {playerStat.fullLeagueName}
              </Link>
            </Box>
          </Grid>
          <Grid container spacing={2}>
            {playerStat.stats.map((stat) => (
              <Grid item xs={12} md={6}>
                <Link to={stat.player_url} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row-reverse", xl: "row-reverse" },
                      alignItems: "center",
                      bgcolor: playerStat.brandColor,
                      overflow: "hidden",
                      borderRadius: "12px",
                      boxShadow: 1,
                      fontWeight: "bold",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        maxHeight: { xs: 100, xl: 200 },
                        maxWidth: { xs: 150, xl: 300 },
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
                        alignItems: { xs: "flex-start", xl: "flex-start" },
                        margin: { xs: "10px 24px" },
                        height: { xs: 120, xl: 160 },
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: { xs: 16, xl: 24 }, mt: 1 }}
                      >
                        {stat.label}
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          color: "white",
                          fontSize: { xs: 16, xl: 24 },
                          textDecoration: "underline",
                          whiteSpace: "nowrap",
                        }}
                        src={stat.player_url}
                      >
                        {stat.player_name}{" "}
                      </Box>
                      <Box
                        sx={{
                          fontSize: { xs: 24, xl: 38 },
                        }}
                      >
                        {stat.value}
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </div>
  );
}
