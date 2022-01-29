import React from "react";
import {
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";

const TestTable = () => {
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }

  const data = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  ];

  return (
    <div>
      Sticky Header + Column
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#ddd",
                  left: 0,
                  zIndex: (theme) => theme.zIndex.appBar + 2,
                }}
              >
                Dessert (100g serving)
              </TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>

              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell
                    sx={{
                      backgroundColor: "#ddd",
                      left: 0,
                      position: "sticky",
                    }}
                    numeric
                    align="right"
                  >
                    {n.name}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.fat}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.carbs}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.protein}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.calories}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.fat}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.carbs}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.protein}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.calories}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.fat}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.carbs}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.protein}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.carbs}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.protein}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.calories}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.protein}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.carbs}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.protein}
                  </TableCell>
                  <TableCell numeric align="center">
                    {n.calories}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TestTable;
