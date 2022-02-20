import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import TopbarMenu from "./TopbarMenu";
import { comparisonsLinks, profileLinks, LeagueLinks } from "../../config";
import Grid from "@mui/material/Grid";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const MenuToolbar = () => {
  return (
    <HideOnScroll>
      <AppBar
        style={{
          backgroundColor: "#111827",
        }}
      >
        <Grid container>
          <Grid item md={2} />
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-around", md: "normal" },
            }}
          >
            <Toolbar style={{ padding: 0, height: "100%" }}>
              <TopbarMenu type="profiles" links={profileLinks} />
              <TopbarMenu type="leagues" links={LeagueLinks} />
              <TopbarMenu type="comparisons" links={comparisonsLinks} />
            </Toolbar>
          </Grid>
          <Grid item md={2} />
        </Grid>
      </AppBar>
    </HideOnScroll>
  );
};

export default MenuToolbar;
