import React from "react";
import Grid from "@material-ui/core/Grid";
import MediaControlCard from "./Common/MediaControlCard";
import { Link } from "react-router-dom";

const homeData = [
  {
    type: "icc",
    title: "International Cricket Council",
    description:
      "Get insight into batting and bowling averages of your favorite player or compare players with each other to find out who is better.",
  },
  {
    type: "psl",
    title: "Pakistan Super League",
    description:
      "Get insight into batting and bowling averages of your favorite player or compare players with each other to find out who is better.",
  },
  {
    type: "ipl",
    title: "Indian Premier League",
    description:
      "Get insight into batting and bowling averages of your favorite player or compare players with each other to find out who is better.",
  },
  {
    type: "bbl",
    title: "Big Bash League",
    description:
      "Get insight into batting and bowling averages of your favorite player or compare players with each other to find out who is better.",
    logo_url: "/bbl_logo.png",
  },
  {
    type: "cpl",
    title: "Caribbean Premier League",
    description:
      "Get insight into batting and bowling averages of your favorite player or compare players with each other to find out who is better.",
    logo_url: "/cpl_logo.jpg",
  },
  {
    type: "super_smash",
    title: "Super Smash League",
    description:
      "Get insight into batting and bowling averages of your favorite player or compare players with each other to find out who is better.",
    logo_url: "/super_smash_logo.png",
  },
  {
    type: "t20_blast",
    title: "T20 Blast League",
    description:
      "Get insight into batting and bowling averages of your favorite player or compare players with each other to find out who is better.",
    logo_url: "/t20_blast_logo.jpg",
  },
];
const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {homeData.map((data) => (
          <Grid item xs={12}>
            <Link
              to={`/profiles/${data.type}_profile`}
              style={{ textDecoration: "none" }}
            >
              <MediaControlCard
                title={data.title}
                content={data.description}
                btnLinks={{
                  profile_link: `/profiles/${data.type}_profile`,
                  comparison_link: `/comparisons/${data.type}_comparison`,
                }}
                logoUrl={data.logo_url || `/${data.type}_logo.svg`}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
