import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import humanify from "../../Utils/humanify";
import getFormattedBreadcrumb from "../../Utils/getFormattedBreadcrumb";

const Breadcrumb = ({ history }) => {
  console.log("history.location.pathname: ", history.location.pathname);
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: 20 }}>
      <Link to="/">Home</Link>
      {history.location.pathname != "/" ? (
        <Link to={history.location.pathname}>
          {getFormattedBreadcrumb(history.location.pathname)}
        </Link>
      ) : null}
    </Breadcrumbs>
  );
};

export default withRouter(Breadcrumb);
