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
        style={{ color: isActive ? "red" : "grey" }}
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
          <Link to={link} style={{ textDecoration: "none" }}>
            <MenuItem
              onClick={() => {
                setBtnLabel(
                  `${humanify(
                    leagueName
                  ).toUpperCase()} ${capitalizeFirstLetter(type)}`
                );
                handleClose();
              }}
            >
              {humanify(leagueName).toUpperCase()} {capitalizeFirstLetter(type)}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
