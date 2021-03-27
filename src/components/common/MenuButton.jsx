import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "white",
  },
}));

const MenuButton = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <Button {...rest} className={classes.root}>
      {children}
    </Button>
  );
};

export default MenuButton;
