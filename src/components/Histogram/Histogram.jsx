import { memo } from "react";
import { Bar } from "react-chartjs-2";
import { getRandomColor, extractHistogramData } from "@/utils";

/**
 * A component for showing a Histogram based on the passed data
 */
const Histogram = ({ songsData, xLabel }) => {
  // Extracting data from songsData and formatting them into
  // x and y arrays
  const { xData, yData } = extractHistogramData(songsData, xLabel);

  // Creating chart data
  const data = {
    labels: xData,
    datasets: [
      {
        label: "Song Duration (seconds)",
        data: yData,
        backgroundColor: getRandomColor(),
      },
    ],
  };

  // Creating chart options
  const options = {
    categoryPercentage: 1,
    barPercentage: 1,
  };

  return (
    <Bar
      data={data}
      options={options}
      style={{ maxWidth: "33%", maxHeight: "50%" }}
    />
  );
};

export default memo(Histogram);
