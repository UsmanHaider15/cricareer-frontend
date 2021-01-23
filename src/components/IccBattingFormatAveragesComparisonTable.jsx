import humanify from "../Utils/humanify";

const IccBattingFormatAveragesComparisonTable = ({ data }) => {
  return (
    <div>
      {Object.keys(data.first_player).map((format) => (
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
            {data.first_player[format]}
          </div>
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #ff2400, #0073cf)",
              color: "white",
              flex: "2 1 0",
              whiteSpace: "nowrap",
              fontWeight: "bolder",
            }}
          >
            {humanify(format)}
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
            {data.second_player[format]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IccBattingFormatAveragesComparisonTable;
