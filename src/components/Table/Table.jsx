import { memo } from "react";
import MUIDataTable from "mui-datatables";
import Rating from "@mui/material/Rating";

/**
 * A component for showing the songs data in a tabular format
 */
const Table = ({ songsData, ratingColumnLabel, handleRatingChange }) => {
  const columns = songsData[0];
  const data = songsData.slice(1);

  // Adding the rating column label if doesn't already exist in the data
  if (columns?.length && !columns?.includes(ratingColumnLabel))
    [columns.push(ratingColumnLabel)];

  const tableOptions = {
    selectableRows: "none",
    print: false,
    viewColumns: false,
    filter: false,
    search: false,
  };

  const customColumns = columns?.map((colName) => {
    const columnConfig = {
      name: colName,
      label: colName,
    };

    // Adding custom component for the 'Rating' Column
    if (colName === ratingColumnLabel) {
      columnConfig.options = {
        customBodyRender: (value, tableMetadata, cellValue) => {
          const { rowData, rowIndex, columnIndex } = tableMetadata;
          const songId = rowData[0];

          return (
            <Rating
              value={value}
              onChange={(event, newValue) => {
                value = newValue;
                handleRatingChange(songId, newValue, rowIndex, columnIndex);
              }}
            />
          );
        },
      };
    }
    return columnConfig;
  });

  return (
    <MUIDataTable data={data} columns={customColumns} options={tableOptions} />
  );
};

export default memo(Table);
