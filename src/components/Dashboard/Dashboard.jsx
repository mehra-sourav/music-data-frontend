import { memo } from "react";
import MUIDataTable from "mui-datatables";

/**
 * A dashboard for showing the songs data in a tabular format
 */
const Dashboard = ({ songsData, ...props }) => {
  const columns = songsData[0];
  const data = songsData.slice(1);
  const options = {
    selectableRows: "none",
    print: false,
    viewColumns: false,
    filter: false,
    search: false,
  };

  return (
    <>
      <MUIDataTable data={data} columns={columns} options={options} />
    </>
  );
};

export default memo(Dashboard);
