import React, { useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import getFormattedBreadcrumb from "Utils/getFormattedBreadcrumb";
import { initGA, PageView } from "Utils/tracking";

const Breadcrumb = ({ history }) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    initGA("G-5KY9X93YJY");
    PageView();
  }, []);
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ padding: 20 }}>
      <Link to="/">Home</Link>
      {history.location.pathname !== "/" ? (
        <Link to={history.location.pathname}>
          {getFormattedBreadcrumb(history.location.pathname)}
        </Link>
      ) : null}
    </Breadcrumbs>
  );
};

export default withRouter(Breadcrumb);
