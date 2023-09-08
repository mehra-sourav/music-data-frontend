import { memo } from "react";
import ChartContainer from "@/components/ChartContainer/ChartContainer";
import Table from "@/components/Table/Table";

/**
 * A container for the charts and table components
 */
const Dashboard = ({ songsData, handleRatingChange }) => {
  return (
    <>
      <ChartContainer songsData={songsData} />
      <Table
        songsData={songsData}
        handleRatingChange={handleRatingChange}
        ratingColumnLabel="rating"
      />
    </>
  );
};

export default memo(Dashboard);
