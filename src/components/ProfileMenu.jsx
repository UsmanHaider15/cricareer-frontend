import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  const [btnLabel, setBtnLabel] = React.useState("Icc Profile");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {btnLabel}
      </Button>
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
          <Link to="/profiles/icc_player">ICC Player Profile</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setBtnLabel("Psl Profile");
            handleClose();
          }}
        >
          <Link to="/profiles/psl_player">PSL Player Profile</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
