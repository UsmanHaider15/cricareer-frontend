import Typography from "@material-ui/core/Typography";
import humanify from "../../Utils/humanify";

const TableView = ({ data }) => {
  return (
    <div
      style={{
        marginBottom: 20,
      }}
    >
      <Typography>
        <div
          style={{
            boxShadow: "2px 2px 6px 0px #888888",
            borderRadius: "10px 10px 10px 10px",
            padding: 8,
          }}
        >
          {Object.keys(data.first_player)
            .filter(
              (key) =>
                !["player_id", "match_type", "stumpings_made"].includes(key)
            )
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
                    color: "white",
                    backgroundColor: "#ff2400",
                    flex: "1 1 0",
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    fontWeight: "bold",
                  }}
                >
                  {data.first_player[key]}
                </div>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #ff2400, #0073cf)",
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
                    color: "white",
                    backgroundColor: "#0073cf",
                    flex: "1 1 0",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    fontWeight: "bold",
                  }}
                >
                  {data.second_player[key]}
                </div>
              </div>
            ))}
        </div>
      </Typography>
    </div>
  );
};

export default TableView;
