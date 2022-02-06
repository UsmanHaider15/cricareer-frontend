import Typography from "@mui/material/Typography";
import humanify from "Utils/humanify";
import { Box } from "@mui/material";

const TableView = ({ data, excludedKeys }) => {
  return (
    <Typography>
      {Object.keys(data.first_player)
        .filter((key) => !excludedKeys.includes(key))
        .map((key) => (
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Box
              style={{
                color: "#00154f",
                // background: "linear-gradient(225deg, #F2BC94 85%, white 15%)",
                borderRadius: "5px 0px 0px 5px",
                background: "#F2BC94",
                flex: "1 1 0",
                fontWeight: "bolder",
              }}
              sx={{ fontSize: { xs: 18, md: 24 } }}
            >
              {data.first_player[key]}
            </Box>
            <Box
              style={{
                backgroundColor: "#170451",
                color: "#eee6e0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "2 1 0",
                whiteSpace: "nowrap",
              }}
              sx={{ fontSize: { xs: 18, md: 18 } }}
            >
              {humanify(key)}
            </Box>
            <Box
              style={{
                color: "#00154F",
                // background: "linear-gradient(135deg, #F2BC94 85%, white 15%)",
                borderRadius: "0px 5px 5px 0px",
                background: "#F2BC94",
                flex: "1 1 0",
                fontWeight: "bolder",
              }}
              sx={{ fontSize: { xs: 18, md: 24 } }}
            >
              {data.second_player[key]}
            </Box>
          </Box>
        ))}
    </Typography>
  );
};

export default TableView;
