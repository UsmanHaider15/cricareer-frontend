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
            <Link to="/profiles/icc_profile" style={{ textDecoration: "none" }}>
              ICC Player Profile
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link
              to="/comparisons/icc_comparison"
              style={{ textDecoration: "none" }}
            >
              ICC Player comparisons
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to="/profiles/psl_profile" style={{ textDecoration: "none" }}>
              PSL Player Profile
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link
              to="/comparisons/psl_comparison"
              style={{ textDecoration: "none" }}
            >
              PSL Player comparisons
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to="/profiles/ipl_profile" style={{ textDecoration: "none" }}>
              IPL Player Profile
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link
              to="/comparisons/ipl_comparison"
              style={{ textDecoration: "none" }}
            >
              IPL Player comparisons
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
