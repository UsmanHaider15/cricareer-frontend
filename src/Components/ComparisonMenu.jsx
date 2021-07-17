import React, { useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import humanify from "Utils/humanify";
import MenuButton from "Components/Common/MenuButton";

export default function ComparisonMenu() {
  const location = useLocation();
  const [btnLabel, setBtnLabel] = React.useState("Select Comparison");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!location.pathname.includes("comparisons")) {
      setBtnLabel("Select Comparison");
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
        <Link
          to="/comparisons/icc_comparison"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("Icc Comparison");
              handleClose();
            }}
          >
            ICC Player comparisons
          </MenuItem>
        </Link>
        <Link
          to="/comparisons/psl_comparison"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("Psl Comparison");
              handleClose();
            }}
          >
            PSL Player comparisons
          </MenuItem>
        </Link>
        <Link
          to="/comparisons/ipl_comparison"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("Ipl Comparison");
              handleClose();
            }}
          >
            IPL Player comparisons
          </MenuItem>
        </Link>
        <Link
          to="/comparisons/bbl_comparison"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("BBL Comparison");
              handleClose();
            }}
          >
            BBL Player comparisons
          </MenuItem>
        </Link>
        <Link
          to="/comparisons/cpl_comparison"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("CPL Comparison");
              handleClose();
            }}
          >
            CPL Player comparisons
          </MenuItem>
        </Link>
        <Link
          to="/comparisons/super_smash_comparison"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("Super Smash Comparison");
              handleClose();
            }}
          >
            Super Smash Player comparisons
          </MenuItem>
        </Link>
        <Link
          to="/comparisons/t20_blast_comparison"
          style={{ textDecoration: "none" }}
        >
          <MenuItem
            onClick={() => {
              setBtnLabel("T20 Blast Comparison");
              handleClose();
            }}
          >
            T20 Blast Player comparisons
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
