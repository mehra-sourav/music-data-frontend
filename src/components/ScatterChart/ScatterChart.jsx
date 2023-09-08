import { memo } from "react";
import { Scatter } from "react-chartjs-2";
import { getRandomColor, extractScatterData } from "@/utils";

/**
 * A component for showing a scatter chart based on the passed data
 */
const ScatterChart = ({ songsData, xLabel, yLabel }) => {
  // Creating chart data
  const data = {
    datasets: [
      {
        label: `${yLabel} vs. ${xLabel}`,
        data: extractScatterData(songsData, xLabel, yLabel),
        backgroundColor: getRandomColor(),
      },
    ],
  };

  // Creating chart options
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: xLabel,
        },
      },
      y: {
        title: {
          display: true,
          text: yLabel,
        },
        beginAtZero: false,
        suggestedMax: 1,
      },
    },
  };

  return (
    <Scatter
      data={data}
      options={options}
      style={{ maxWidth: "33%", maxHeight: "50%" }}
    />
  );
};

export default memo(ScatterChart);
