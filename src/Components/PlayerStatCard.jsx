import * as React from "react";
import Box from "@mui/material/Box";

export default function PlayerStatCard() {
  return (
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
        src="https://cricareer.s3.ap-south-1.amazonaws.com/avatars/681305_headshot.png"
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
        <Box component="span" sx={{ fontSize: { xs: 24, xl: 30 }, mt: 1 }}>
          Highest Wicket
        </Box>
        <Box
          component="span"
          sx={{ color: "primary.main", fontSize: { xs: 24, xl: 30 } }}
        >
          Hassan Ali
        </Box>
        <Box
          sx={{
            fontSize: { xs: 24, xl: 30 },
          }}
        >
          200
        </Box>
      </Box>
    </Box>
  );
}
