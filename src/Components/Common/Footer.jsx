import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "white",
    color: "grey",
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
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
