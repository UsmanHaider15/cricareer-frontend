import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    <React.Fragment>
      <Grid container>
        <Grid md={2}></Grid>
        <Grid xs={12} md={8}>
          <Box
            sx={{
              padding: 5,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" component="div" gutterBottom>
              Cricareer - Cricket Statistics Site
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="h3" component="div" gutterBottom>
              Some awesome stats or whatever
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {homeData.map((data) => (
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 500 }}>
                  {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={data.logo_url || `/${data.type}_logo.svg`}
                  /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={`/profiles/${data.type}_profile`}
                    >
                      Profile
                    </Button>
                    <Button
                      size="small"
                      href={`/comparisons/${data.type}_comparison`}
                    >
                      Comparison
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid md={2}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
