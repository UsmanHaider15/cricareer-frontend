import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import humanify from "../../Utils/humanify";

const Breadcrumb = ({ history }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/">Home</Link>
      {history.location.pathname != "/" ? (
        <Link to={history.location.pathname}>
          {humanify(history.location.pathname.match("[^/]+$")[0])}
        </Link>
      ) : null}
    </Breadcrumbs>
  );
};

export default withRouter(Breadcrumb);
