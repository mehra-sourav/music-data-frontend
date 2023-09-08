import { memo } from "react";
import { Bar } from "react-chartjs-2";
import { getRandomColor, extractBarData } from "@/utils";

/**
 * A component for showing a bar chart based on the passed data
 */
const BarChart = ({ songsData, xLabel, yLabel }) => {
  // Extracting data from songsData and formatting them into
  // x and y arrays
  const { xData, yData } = extractBarData(songsData, xLabel, yLabel);

  // Creating chart data
  const data = {
    labels: xData,
    datasets: [
      {
        label: yLabel,
        data: yData,
        backgroundColor: getRandomColor(),
      },
    ],
  };

  // Creating chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Bar
      data={data}
      options={options}
      style={{ maxWidth: "45%", maxHeight: "50%" }}
    />
  );
};

export default memo(BarChart);
