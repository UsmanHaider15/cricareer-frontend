import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import getFormattedPageName from "Utils/getFormattedPageName";

const Breadcrumb = ({ leagueName, type }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        marginBottom: { xs: 2, md: 5 },
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "left",
        fontSize: { xs: 12, md: 16 },
        padding: 1,
      }}
    >
      <Link to="/">Home</Link>
      <Link to={`/${type}/${leagueName}_${type}`}>
        {getFormattedPageName({ leagueName, type })}
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
