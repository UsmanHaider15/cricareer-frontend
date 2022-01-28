import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import TopbarMenu from "./TopbarMenu";

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

const comparisonsLinks = [
  { link: "/comparisons/icc_comparison", league: "ICC" },
  { link: "/comparisons/psl_comparison", league: "Psl" },
  { link: "/comparisons/ipl_comparison", league: "Ipl" },
  { link: "/comparisons/bbl_comparison", league: "BBL" },
  { link: "/comparisons/cpl_comparison", league: "CPL" },
  { link: "/comparisons/super_smash_comparison", league: "Super Smash" },
  { link: "/comparisons/t20_blast_comparison", league: "T20 Blast" },
];

const profileLinks = [
  { link: "/profiles/icc_profile", league: "ICC" },
  { link: "/profiles/psl_profile", league: "Psl" },
  { link: "/profiles/ipl_profile", league: "Ipl" },
  { link: "/profiles/bbl_profile", league: "BBL" },
  { link: "/profiles/cpl_profile", league: "CPL" },
  { link: "/profiles/super_smash_profile", league: "Super Smash" },
  { link: "/profiles/t20_blast_profile", league: "T20 Blast" },
];

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
