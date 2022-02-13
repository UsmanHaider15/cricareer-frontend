import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MenuButton from "Components/Common/MenuButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import getFormattedPageName from "Utils/getFormattedPageName";
import _ from "lodash";

export default function TopbarMenu({ type, links }) {
  const location = useLocation();
  const [btnLabel, setBtnLabel] = React.useState(`${_.capitalize(type)}s`);
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
      setBtnLabel(`${_.capitalize(type)}s`);
      setIsActive(false);
    } else {
      setBtnLabel(btnLabel);
      setIsActive(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <MenuButton
        sx={{
          color: isActive ? "#170451" : "gray",
          fontWeight: "bold",
        }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {btnLabel} {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
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
