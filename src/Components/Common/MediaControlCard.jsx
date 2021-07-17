import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    [theme.breakpoints.down("xs")]: {
      height: 200,
      backgroundColor: "white",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "white",
      width: "35%",
      // height: 200,
    },
  },

  root: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#f6f6f6",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      display: "flex",
      backgroundColor: "#f6f6f6",
    },
  },
  btn_control: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 16,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
      paddingRight: 16,
      paddingBottom: 16,
    },
  },
}));

export default function MediaControlCard({
  title,
  content,
  btnLinks,
  logoUrl,
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={logoUrl} title="ICC Logo" />
      <div className={classes.content}>
        <CardContent>
          <Typography component="h4" variant="h4">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {content}
          </Typography>
        </CardContent>
        <div className={classes.btn_control}>
          <Link
            to={btnLinks.profile_link}
            style={{ textDecoration: "none", marginRight: 10 }}
          >
            <Button variant="contained" color="secondary">
              See Profile
            </Button>
          </Link>
          <Link
            to={btnLinks.comparison_link}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="secondary">
              See Comparison
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
