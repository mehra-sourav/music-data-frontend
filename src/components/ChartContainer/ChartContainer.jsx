import { memo } from "react";
import Box from "@mui/material/Box";
import Chart from "chart.js/auto";
import ScatterChart from "@/components/ScatterChart/ScatterChart";
import BarChart from "@/components/BarChart/BarChart";
import Histogram from "@/components/Histogram/Histogram";

/**
 * A container for charts
 */
const ChartContainer = ({ songsData }) => {
  return (
    <Box
      style={{
        marginBottom: 10,
        maxWidth: "100%",
        height: "60vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        rowGap: "5px",
      }}
    >
      <ScatterChart
        songsData={songsData}
        xLabel="energy"
        yLabel="danceability"
      />
      <Histogram songsData={songsData} xLabel="duration_ms" />
      <BarChart songsData={songsData} xLabel="title" yLabel="acousticness" />
      <BarChart songsData={songsData} xLabel="title" yLabel="tempo" />
    </Box>
  );
};

export default memo(ChartContainer);
