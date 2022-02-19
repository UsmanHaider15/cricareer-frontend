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
            backgroundColor: "#1c0561",
            color: "white",
            height: 500,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: -10,
          }}
        >
          <Typography variant="h3" component="div" gutterBottom>
            CRICAREER
          </Typography>
          <Typography variant="body1" gutterBottom>
            World's Best Cricket Leagues Statistics Site
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cover;
