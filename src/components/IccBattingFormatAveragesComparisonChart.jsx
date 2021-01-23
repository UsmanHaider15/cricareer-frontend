import { Bar } from "react-chartjs-2";

const IccBattingFormatAveragesComparisonChart = ({
  chartData,
  firstPlayer,
  secondPlayer,
}) => {
  const data = {
    labels: Object.keys(chartData.first_player),
    datasets: [
      {
        label: firstPlayer.player_name,
        backgroundColor: "rgba(255, 36, 0, 0.6)",
        // borderColor: "rgba(255, 36, 0,1)",
        borderWidth: 1,
        //stack: 1,
        // hoverBackgroundColor: "rgba(255, 36, 0,0.4)",
        // hoverBorderColor: "rgba(255, 36, 0,1)",
        data: Object.values(chartData.first_player),
      },

      {
        label: secondPlayer.player_name,
        backgroundColor: "rgba(0, 115, 207, 0.6)",
        // borderColor: "rgba(255, 36, 0,1)",
        borderWidth: 1,
        //stack: 1,
        // hoverBackgroundColor: "rgba(255, 36, 0,0.4)",
        // hoverBorderColor: "rgba(255, 36, 0,1)",
        data: Object.values(chartData.second_player),
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      display: true,
    },
    type: "bar",
  };
  return <Bar data={data} width={null} height={null} options={options} />;
};

export default IccBattingFormatAveragesComparisonChart;
