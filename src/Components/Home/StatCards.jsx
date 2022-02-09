import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const stats = [
  {
    value: "7",
    title: "Cricket Leagues",
    description: "",
  },
  {
    value: "645+",
    title: "Matches",
    description: "",
  },
  {
    value: "2312+",
    title: "Players",
    description: "",
  },
];

export default function StatCards() {
  return (
    <Grid container spacing={1}>
      {stats.map((stat) => (
        <Grid item xs={12} md={4}>
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
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                flexGrow: 1,
                alignItems: { xs: "center", xl: "flex-center" },
                m: 3,
                height: { xl: 150 },
              }}
            >
              <Box component="span" sx={{ fontSize: { xs: 38, xl: 48 } }}>
                {stat.value}
              </Box>
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                  fontSize: { xs: 24, xl: 30 },
                }}
              >
                {stat.title}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: 14, xl: 18 },
                }}
              >
                {stat.description}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
