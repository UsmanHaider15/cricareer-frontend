import React from "react";
import Button from "@material-ui/core/Button";

const MenuButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default MenuButton;
