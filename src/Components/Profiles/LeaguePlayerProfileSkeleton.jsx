import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const LeaguePlayerProfileSkeleton = () => {
  return (
    <Box sx={{ padding: { xs: 2 } }}>
      <Grid item xs={12} sx={{ height: 60, marginBottom: 5 }}>
        <Skeleton variant="text" height="100%" />
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={3} />

        <Grid item xs={6} sx={{ marginBottom: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={40} />
        </Grid>
        <Grid item xs={3} />

        <Grid item xs={3} />

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            marginBottom: 5,
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Grid>
        <Grid item xs={3} />

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <Skeleton variant="rectangular" width="100%" height={500} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <Skeleton variant="rectangular" width="100%" height={500} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeaguePlayerProfileSkeleton;
