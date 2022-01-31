import React from "react";
import { Box } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NoData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: { xs: 24, md: 46 },
        color: "gray",
        padding: 5,
        whiteSpace: "nowrap",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: { xs: 24, md: 46 } }} /> No Data
      Available
    </Box>
  );
};

export default NoData;
