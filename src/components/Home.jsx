import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core/Breadcrumbs";
import Breadcrumb from "./common/Breadcrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumb />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {" "}
            <Link to="/profiles/icc_profile">ICC Player Profile</Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to="/comparisons/icc_comparison">ICC Player comparisons</Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to="/profiles/psl_profile">PSL Player Profile</Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to="/comparisons/psl_comparison">PSL Player comparisons</Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to="/profiles/ipl_profile">IPL Player Profile</Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to="/comparisons/ipl_comparison">IPL Player comparisons</Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
