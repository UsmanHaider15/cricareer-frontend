import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import humanify from "Utils/humanify";
import MenuButton from "Components/Common/MenuButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import capitalizeFirstLetter from "Utils/capitalizeFirstLetter";

export default function TopbarMenu({ type, links }) {
  const location = useLocation();
  const [btnLabel, setBtnLabel] = React.useState(
    `Select ${capitalizeFirstLetter(type)}`
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!location.pathname.includes(`${type}s`)) {
      setBtnLabel(`Select ${capitalizeFirstLetter(type)}`);
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
        style={{ color: isActive ? "red" : "grey" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {btnLabel} <ArrowDropUpIcon />
      </MenuButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {links.map(({ link, league }) => (
          <Link to={link} style={{ textDecoration: "none" }}>
            <MenuItem
              onClick={() => {
                setBtnLabel(`${league} Profile`);
                handleClose();
              }}
            >
              {league} Player Profile
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
