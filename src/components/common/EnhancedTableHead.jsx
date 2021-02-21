import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import humanify from "../../Utils/humanify";

// const headCells = [
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Dessert (100g serving)",
//   },
//   { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
//   { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
//   { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
//   { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
// ];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, row } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = Object.keys(row).map((column) => ({
    id: column,
    numeric: false,
    disablePadding: true,
    label: humanify(column),
  }));

  console.log("headCells", headCells);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
