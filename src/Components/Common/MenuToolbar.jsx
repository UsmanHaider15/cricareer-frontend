import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import TopbarMenu from "./TopbarMenu";
import { comparisonsLinks, profileLinks } from "../../config";
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
      <AppBar style={{ backgroundColor: "white", color: "gray" }}>
        <Toolbar>
          <div style={{ letterSpacing: 3, fontSize: 24, paddingRight: 10 }}>
            cricareer
          </div>
          <TopbarMenu type="profile" links={profileLinks} />
          <TopbarMenu type="comparison" links={comparisonsLinks} />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default MenuToolbar;
