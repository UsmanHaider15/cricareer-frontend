import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const LeagueStatsSkeleton = () => {
  return (
    <Box sx={{ width: "100%", padding: { xs: 1 } }}>
      <Grid item xs={12} sx={{ height: 100, marginBottom: 1 }}>
        <Skeleton variant="text" height="100%" />
      </Grid>

      <Grid container spacing={1}>
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

export default LeagueStatsSkeleton;
