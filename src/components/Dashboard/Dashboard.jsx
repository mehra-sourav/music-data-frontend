import { memo } from "react";
import MUIDataTable from "mui-datatables";

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

  console.log("rendering dash");

  return (
    <>
      <MUIDataTable data={data} columns={columns} options={options} />
    </>
  );
};

export default memo(Dashboard);
