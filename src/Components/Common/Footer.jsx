import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
    <footer>
      <Container maxWidth="sm">
        <Grid xs={12} style={{ textAlign: "center" }}>
          <TwitterIcon color="secondary" style={{ cursor: "pointer" }} />{" "}
          <FacebookIcon color="secondary" style={{ cursor: "pointer" }} />
        </Grid>
        <Grid xs={12} style={{ textAlign: "center" }}></Grid>
        <Grid xs={12} style={{ textAlign: "center", color: "grey" }}>
          <Copyright />
        </Grid>
      </Container>
    </footer>
  );
}
