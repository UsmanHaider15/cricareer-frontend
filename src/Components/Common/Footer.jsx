import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit">
      {"Copyright © "}
      {/* <Link color="" href="https://cricareer.com/"> */}
      Cricareer.com
      {/* </Link>{" "} */} {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        boxShadow: "5px 10px ",
        backgroundColor: "#170451",
      }}
    >
      <Container maxWidth="sm" sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <Grid xs={12} style={{ textAlign: "center", color: "white" }}>
          Follow Us
        </Grid>
        <Grid xs={12} style={{ textAlign: "center" }}>
          <TwitterIcon color="primary" style={{ cursor: "pointer" }} />{" "}
          <FacebookIcon color="primary" style={{ cursor: "pointer" }} />
        </Grid>
        <Grid xs={12} style={{ textAlign: "center" }}></Grid>
        <Grid xs={12} style={{ textAlign: "center", color: "white" }}>
          <Copyright />
        </Grid>
      </Container>
    </footer>
  );
}
