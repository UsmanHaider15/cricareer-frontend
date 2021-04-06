import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Breadcrumb from "Components/Common/Breadcrumb";
import HomeCard from "Components/Common/HomeCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  cardActionArea: {
    height: 100,
  },
  cardContent: {
    padding: 0,
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Link to="/profiles/icc_profile" style={{ textDecoration: "none" }}>
            <HomeCard
              heading="ICC Player Profile"
              paragraph="Get insight into batting and bowling averages of your
                    favorite player"
              btnLabel="See Profile"
            />
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link
            to="/comparisons/icc_comparison"
            style={{ textDecoration: "none" }}
          >
            <HomeCard
              heading="ICC Player Comparison"
              paragraph="Compare batting and bowling careers of your favorite players"
              btnLabel="See Comparison"
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/profiles/psl_profile" style={{ textDecoration: "none" }}>
            <HomeCard
              heading="PSL Player Profile"
              paragraph="Get insight into batting and bowling averages of your
                    favorite player"
              btnLabel="See Profile"
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link
            to="/comparisons/psl_comparison"
            style={{ textDecoration: "none" }}
          >
            <HomeCard
              heading="PSL Player Comparison"
              paragraph="Compare batting and bowling careers of your favorite players"
              btnLabel="See Comparison"
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="/profiles/ipl_profile" style={{ textDecoration: "none" }}>
            <HomeCard
              heading="IPL Player Profile"
              paragraph="Get insight into batting and bowling averages of your
                    favorite player"
              btnLabel="See Profile"
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link
            to="/comparisons/ipl_comparison"
            style={{ textDecoration: "none" }}
          >
            <HomeCard
              heading="IPL Player Comparison"
              paragraph="Compare batting and bowling careers of your favorite players"
              btnLabel="See Comparison"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
