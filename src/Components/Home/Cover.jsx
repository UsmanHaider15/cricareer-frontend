import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Cover = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#111827",
            color: "white",
            height: 400,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: -10,
          }}
        >
          <Typography variant="h2" component="div">
            CRICAREER
          </Typography>
          <Typography variant="h4">
            World's Best Cricket Leagues Statistics Site
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cover;
