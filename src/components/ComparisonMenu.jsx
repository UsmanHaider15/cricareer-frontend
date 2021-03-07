import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import humanify from "../Utils/humanify";

export default function ComparisonMenu() {
  const location = useLocation();

  const [btnLabel, setBtnLabel] = React.useState("Select Comparison");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!location.pathname.includes("comparisons")) {
      setBtnLabel("Select Comparison");
    } else {
      const btnLabel = humanify(location.pathname.split("/").pop());
      setBtnLabel(btnLabel);
    }
  }, [location.pathname]);

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
            setBtnLabel("Icc Comparison");
            handleClose();
          }}
        >
          <Link to="/comparisons/icc_comparison">ICC Player comparisons</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setBtnLabel("Psl Comparison");
            handleClose();
          }}
        >
          <Link to="/comparisons/psl_comparison">PSL Player comparisons</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
