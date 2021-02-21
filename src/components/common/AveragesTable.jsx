import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import EnhancedTableHead from "./EnhancedTableHead";

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    // minWidth: 750,
  },

  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const AveragesTable = ({ rows }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [dense, setDense] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              row={rows[0]}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.opposition_team}>
                      <TableCell component="th" scope="row" padding="none">
                        {row.opposition_team}
                      </TableCell>
                      <TableCell align="left">{row.innings_played}</TableCell>
                      <TableCell align="left">{row.not_outs}</TableCell>
                      <TableCell align="left">{row.runs_scored}</TableCell>
                      <TableCell align="left">
                        {row.highest_inns_score}
                      </TableCell>
                      <TableCell align="left">{row.batting_average}</TableCell>
                      <TableCell align="left">{row.balls_faced}</TableCell>
                      <TableCell align="left">
                        {row.batting_strike_rate}
                      </TableCell>
                      <TableCell align="left">{row.hundreds_scored}</TableCell>
                      <TableCell align="left">{row.fifties_scored}</TableCell>
                      <TableCell align="left">{row.boundary_fours}</TableCell>
                      <TableCell align="left">{row.boundary_sixes}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
};

export default AveragesTable;
