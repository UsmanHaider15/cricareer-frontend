import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function MediaControlCard({
  title,
  content,
  btnLinks,
  logoUrl,
}) {
  return (
    <Card>
      <CardMedia image={logoUrl} title="ICC Logo" />
      <div>
        <CardContent>
          <Typography component="h1" variant="h4">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {content}
          </Typography>
        </CardContent>
        <div>
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
