import React, { useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import humanify from "../Utils/humanify";
import MenuButton from "./common/MenuButton";

export default function ProfileMenu() {
  const location = useLocation();
  const [btnLabel, setBtnLabel] = React.useState("Select Profile");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!location.pathname.includes("profiles")) {
      setBtnLabel("Select Profile");
    } else {
      const btnLabel = humanify(location.pathname.split("/").pop());
      setBtnLabel(btnLabel);
    }
  }, [location.pathname]);

  return (
    <div>
      <MenuButton
        aria-controls="simple-menu"
        aria-haspopup="true"
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
        <MenuItem
          onClick={() => {
            setBtnLabel("Icc Profile");
            handleClose();
          }}
        >
          <Link to="/profiles/icc_profile" style={{ textDecoration: "none" }}>
            ICC Player Profile
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setBtnLabel("Psl Profile");
            handleClose();
          }}
        >
          <Link to="/profiles/psl_profile" style={{ textDecoration: "none" }}>
            PSL Player Profile
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setBtnLabel("Ipl Profile");
            handleClose();
          }}
        >
          <Link to="/profiles/ipl_profile" style={{ textDecoration: "none" }}>
            IPL Player Profile
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
