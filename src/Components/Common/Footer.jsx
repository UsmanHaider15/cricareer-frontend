import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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
    backgroundColor: "rgb(63,81,181)",
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        {/* <Grid xs={12} style={{ textAlign: "center" }}>
          <FacebookIcon color="secondary" />
          <InstagramIcon color="secondary" />
          <TwitterIcon color="secondary" />
        </Grid>
        <Grid xs={12} style={{ textAlign: "center" }}>
          <Link
            to="/comparisons/icc_comparison"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            to="/comparisons/icc_comparison"
            style={{ textDecoration: "none" }}
          >
            FAQs
          </Link>
          <Link
            to="/comparisons/icc_comparison"
            style={{ textDecoration: "none" }}
          >
            Terms of Use
          </Link>
        </Grid> */}
        <Grid xs={12} style={{ textAlign: "center" }}>
          <Copyright />
        </Grid>
      </Container>
    </footer>
  );
}
