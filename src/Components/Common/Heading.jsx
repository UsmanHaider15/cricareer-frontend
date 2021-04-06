import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "1.6rem",
  fontStyle: "bold",
  padding: "10px 0px",
  color: "black",
  "@media (min-width:600px)": {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

export default function CustomResponsiveFontSizes({ text }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" align="left">
        {text}
      </Typography>
    </ThemeProvider>
  );
}
