import { memo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ value, handleChange, handleSearch }) => {
  console.log("rendering search");
  return (
    <>
      <Box
        sx={{
          marginBottom: 2,
          maxWidth: "50%",
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <TextField
          fullWidth
          label="Search by Song Title"
          id="searchbar"
          value={value}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          sx={{ width: "25%" }}
          onClick={handleSearch}
        >
          Get Song
        </Button>
      </Box>
    </>
  );
};

export default memo(Searchbar);
