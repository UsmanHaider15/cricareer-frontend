import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Breadcrumb from "Components/Common/Breadcrumb";
import MediaControlCard from "./Common/MediaControlCard";

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
        <Grid item xs={12}>
          <MediaControlCard
            title="International Cricket Council"
            content="Get insight into batting and bowling averages of your favorite
            player or compare players with each other to find out who is better."
            btnLinks={{
              profile_link: "/profiles/icc_profile",
              comparison_link: "/comparisons/icc_comparison",
            }}
            logoUrl="/icc_logo.svg"
          />
        </Grid>

        <Grid item xs={12}>
          <MediaControlCard
            title="Pakistan Super League"
            content="Get insight into batting and bowling averages of your favorite
            player or compare players with each other to find out who is better."
            btnLinks={{
              profile_link: "/profiles/psl_profile",
              comparison_link: "/comparisons/psl_comparison",
            }}
            logoUrl="/psl_logo.svg"
          />
        </Grid>

        <Grid item xs={12}>
          <MediaControlCard
            title="Indian Premier League"
            content="Get insight into batting and bowling averages of your favorite
            player or compare players with each other to find out who is better."
            btnLinks={{
              profile_link: "/profiles/ipl_profile",
              comparison_link: "/comparisons/ipl_comparison",
            }}
            logoUrl="/ipl_logo.svg"
          />
        </Grid>

        <Grid item xs={12}>
          <MediaControlCard
            title="Big Bash League"
            content="Get insight into batting and bowling averages of your favorite
            player or compare players with each other to find out who is better."
            btnLinks={{
              profile_link: "/profiles/bbl_profile",
              comparison_link: "/comparisons/bbl_comparison",
            }}
            logoUrl="/bbl_logo.png"
          />
        </Grid>

        <Grid item xs={12}>
          <MediaControlCard
            title="Caribbean Premier League"
            content="Get insight into batting and bowling averages of your favorite
            player or compare players with each other to find out who is better."
            btnLinks={{
              profile_link: "/profiles/cpl_profile",
              comparison_link: "/comparisons/cpl_comparison",
            }}
            logoUrl="/cpl_logo.jpg"
          />
        </Grid>

        <Grid item xs={12}>
          <MediaControlCard
            title="Super Smash League"
            content="Get insight into batting and bowling averages of your favorite
            player or compare players with each other to find out who is better."
            btnLinks={{
              profile_link: "/profiles/super_smash_profile",
              comparison_link: "/comparisons/super_smash_comparison",
            }}
            logoUrl="/super_smash_logo.png"
          />
        </Grid>
        <Grid item xs={12}>
          <MediaControlCard
            title="T20 Blast League"
            content="Get insight into batting and bowling averages of your favorite
            player or compare players with each other to find out who is better."
            btnLinks={{
              profile_link: "/profiles/t20_blast_profile",
              comparison_link: "/comparisons/t20_blast_comparison",
            }}
            logoUrl="/t20_blast_logo.jpg"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
