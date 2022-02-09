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
        {headCells.map((headCell, idx) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              ...(!idx
                ? {
                    left: 0,
                    zIndex: (theme) => theme.zIndex.appBar + 2,
                    textAlign: "left",
                  }
                : {
                    textAlign: "right",
                  }),

              backgroundColor: "#170451",
              color: "white",
              padding: { xs: 1 },

              fontSize: { xs: 12, md: 18 },
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={[
                {
                  ".MuiTableSortLabel-icon": {
                    color: "white !important",
                    "&:hover": {
                      color: "white",
                    },
                  },
                },
              ]}
            >
              <b style={{ color: "white" }}>{headCell.label}</b>
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
