import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import humanify from "Utils/humanify";
import MenuButton from "Components/Common/MenuButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import capitalizeFirstLetter from "Utils/capitalizeFirstLetter";
import getFormattedPageName from "Utils/getFormattedPageName";

export default function TopbarMenu({ type, links }) {
  const location = useLocation();
  const [btnLabel, setBtnLabel] = React.useState(
    `Select ${capitalizeFirstLetter(type)}`
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (event) => {
    setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsOpen(false);
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!location.pathname.includes(type)) {
      setBtnLabel(`Select ${capitalizeFirstLetter(type)}`);
      setIsActive(false);
    } else {
      setBtnLabel(btnLabel);
      setIsActive(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <MenuButton
        style={{ color: isActive ? "#170451" : "grey", fontWeight: "bold" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {btnLabel} {!isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {links.map(({ link, leagueName }) => (
          <Link to={link} style={{ textDecoration: "none", color: "#170451" }}>
            <MenuItem
              sx={{ textDecoration: "none" }}
              onClick={() => {
                setBtnLabel(getFormattedPageName({ leagueName, type }));
                handleClose();
              }}
            >
              {getFormattedPageName({ leagueName, type })}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
