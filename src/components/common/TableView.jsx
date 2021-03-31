import Typography from "@material-ui/core/Typography";
import humanify from "../../Utils/humanify";

const TableView = ({ data, excludedKeys }) => {
  return (
    <Typography>
      {Object.keys(data.first_player)
        .filter((key) => !excludedKeys.includes(key))
        .map((key) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <div
              style={{
                color: "#00154f",
                background: "linear-gradient(225deg, #F2BC94 85%, white 15%)",
                flex: "1 1 0",
                fontWeight: "bold",
              }}
            >
              {data.first_player[key]}
            </div>
            <div
              style={{
                backgroundColor: "#00154F",
                color: "white",
                flex: "2 1 0",
                whiteSpace: "nowrap",
                fontWeight: "bolder",
              }}
            >
              {humanify(key)}
            </div>
            <div
              style={{
                color: "#00154F",
                background: "linear-gradient(135deg, #F2BC94 85%, white 15%)",
                flex: "1 1 0",

                fontWeight: "bold",
              }}
            >
              {data.second_player[key]}
            </div>
          </div>
        ))}
    </Typography>
  );
};

export default TableView;
