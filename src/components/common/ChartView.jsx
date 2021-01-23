import { Bar } from "react-chartjs-2";

/*  
Interface prop chartData
chartData Structure

const obj = {
  first_player: { Tests: 90, ODIs: 350, T20Is: 98, T20s: 321 },
  second_player: { Tests: 86, ODIs: 248, T20Is: 82, T20s: 285 },
  first_player_name: "Virat Koli",
  second_player_name: "Babar Azam",
};
*/

const ChartView = ({ chartData }) => {
  console.log("chartData", chartData);
  const data = {
    labels: Object.keys(chartData.first_player),
    datasets: [
      {
        label: chartData.first_player_name,
        backgroundColor: "rgba(255, 36, 0, 0.6)",
        borderWidth: 1,
        data: Object.values(chartData.first_player),
      },

      {
        label: chartData.second_player_name,
        backgroundColor: "rgba(0, 115, 207, 0.6)",
        borderWidth: 1,
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

export default ChartView;
