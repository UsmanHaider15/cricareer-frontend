import React from "react";
import Typography from "@material-ui/core/Typography";

export default function CustomResponsiveFontSizes({ text }) {
  return (
    <Typography variant="h3" align="left">
      {text}
    </Typography>
  );
}
