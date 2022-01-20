import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

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
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            // {...(index ? {} : { style: { paddingLeft: 15, paddingRight: 70 } })}
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
