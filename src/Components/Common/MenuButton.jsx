import React from "react";
import Button from "@mui/material/Button";

const MenuButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default MenuButton;
