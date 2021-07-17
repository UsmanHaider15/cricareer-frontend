import React, { useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import humanify from "Utils/humanify";
import MenuButton from "Components/Common/MenuButton";

export default function ProfileMenu() {
  const location = useLocation();
  const [btnLabel, setBtnLabel] = React.useState("Select Profile");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!location.pathname.includes("profiles")) {
      setBtnLabel("Select Profile");
      setIsActive(false);
    } else {
      const btnLabel = humanify(location.pathname.split("/").pop());
      setBtnLabel(btnLabel);
      setIsActive(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <MenuButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        {...(isActive ? { variant: "contained", color: "secondary" } : {})}
        onClick={handleClick}
      >
        {btnLabel}
      </MenuButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/profiles/icc_profile" style={{ textDecoration: "none" }}>
          <MenuItem
            onClick={() => {
              setBtnLabel("Icc Profile");
              handleClose();
            }}
          >
            ICC Player Profile
          </MenuItem>
        </Link>
        <Link to="/profiles/psl_profile" style={{ textDecoration: "none" }}>
          <MenuItem
            onClick={() => {
              setBtnLabel("Psl Profile");
              handleClose();
            }}
          >
            PSL Player Profile
          </MenuItem>
        </Link>
        <Link to="/profiles/ipl_profile" style={{ textDecoration: "none" }}>
          <MenuItem
            onClick={() => {
              setBtnLabel("Ipl Profile");
              handleClose();
            }}
          >
            IPL Player Profile
          </MenuItem>
        </Link>
        <Link to="/profiles/bbl_profile" style={{ textDecoration: "none" }}>
          <MenuItem
            onClick={() => {
              setBtnLabel("BBL Profile");
              handleClose();
            }}
          >
            BBL Player Profile
          </MenuItem>
        </Link>
        <Link to="/profiles/cpl_profile" style={{ textDecoration: "none" }}>
          <MenuItem
            onClick={() => {
              setBtnLabel("CPL Profile");
              handleClose();
            }}
          >
            CPL Player Profile
          </MenuItem>
        </Link>
        <Link
          to="/profiles/super_smash_profile"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("Super Smash Profile");
              handleClose();
            }}
          >
            Super Smash Player Profile
          </MenuItem>
        </Link>
        <Link
          to="/profiles/t20_blast_profile"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("T20 Blast Profile");
              handleClose();
            }}
          >
            T20 Blast Player Profile
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
