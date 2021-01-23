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
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: Object.values(chartData.first_player),
      },

      {
        label: secondPlayer.player_name,
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
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
