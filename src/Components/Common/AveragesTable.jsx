import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import NoData from "./NoData";
import { Link } from "react-router-dom";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const AveragesTable = ({ rows, columnNamesLookup }) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("opposition_team");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  if (rows.length === 0) {
    return <NoData />;
  }

  console.log("rows", rows);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            columnNamesLookup={columnNamesLookup}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map(
              (row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.opposition_team}>
                    {Object.values(row).map((col_val, ind) => (
                      <TableCell
                        sx={{
                          ...(!ind
                            ? {
                                backgroundColor: "white",
                                left: 0,
                                position: "sticky",
                                align: "left",
                                whiteSpace: "nowrap",
                              }
                            : {
                                textAlign: { xs: "left", md: "center" },
                              }),
                          fontSize: { xs: 12, md: 18 },
                          padding: { xs: 1 },
                        }}
                      >
                        {col_val}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AveragesTable;
