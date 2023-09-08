import { memo } from "react";
import ChartContainer from "@/components/ChartContainer/ChartContainer";
import MUIDataTable from "mui-datatables";

/**
 * A dashboard for showing the songs data in a tabular format
 */
const Dashboard = ({ songsData }) => {
  const columns = songsData[0];
  const data = songsData.slice(1);
  const tableOptions = {
    selectableRows: "none",
    print: false,
    viewColumns: false,
    filter: false,
    search: false,
  };

  return (
    <>
      <ChartContainer songsData={songsData} />
      <MUIDataTable data={data} columns={columns} options={tableOptions} />
    </>
  );
};

export default memo(Dashboard);
