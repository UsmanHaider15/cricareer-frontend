import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import ProfileMenu from "./ProfileMenu";
import ComparisonMenu from "./ComparisonMenu";

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
      <AppBar>
        <Toolbar>
          <ProfileMenu />
          <ComparisonMenu />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default MenuToolbar;
