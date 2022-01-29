import React from "react";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, columnNamesLookup } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = Object.entries(columnNamesLookup).map(([key, value]) => ({
    id: key,
    numeric: false,
    disablePadding: true,
    label: value,
  }));

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              ...(headCell.label === "Teams"
                ? {
                    left: 0,
                    zIndex: (theme) => theme.zIndex.appBar + 2,
                  }
                : {}),

              backgroundColor: "rgb(180,180,180)",
              padding: "5px 0px",
              fontSize: 16,
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <b>{headCell.label}</b>
              {orderBy === headCell.id ? (
                <span>
                  {/* {order === "desc" ? "sorted descending" : "sorted ascending"} */}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableHead;
