import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Breadcrumb from "./common/Breadcrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    fontSize: 24,
    color: theme.palette.text.secondary,
    height: 200,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumb />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Link to="/profiles/icc_profile" style={{ textDecoration: "none" }}>
            <Paper className={classes.paper}>ICC Player Profile</Paper>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <Link
            to="/comparisons/icc_comparison"
            style={{ textDecoration: "none" }}
          >
            <Paper className={classes.paper}>ICC Player comparisons</Paper>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/profiles/psl_profile" style={{ textDecoration: "none" }}>
            <Paper className={classes.paper}>PSL Player Profile</Paper>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            to="/comparisons/psl_comparison"
            style={{ textDecoration: "none" }}
          >
            <Paper className={classes.paper}>PSL Player comparisons</Paper>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to="/profiles/ipl_profile" style={{ textDecoration: "none" }}>
            <Paper className={classes.paper}>IPL Player Profile</Paper>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            to="/comparisons/ipl_comparison"
            style={{ textDecoration: "none" }}
          >
            <Paper className={classes.paper}>IPL Player comparisons</Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
