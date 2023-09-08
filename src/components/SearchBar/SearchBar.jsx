import { memo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

/**
 * A search bar component
 */
const Searchbar = ({ value, handleChange, handleSearch, inputRef }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <Box
        sx={{
          marginBottom: 2,
          width: "1900px",
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
          inputRef={inputRef}
          onKeyDown={handleKeyPress}
        />

        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          sx={{ width: "200px" }}
          onClick={handleSearch}
        >
          Get Song
        </Button>
      </Box>
    </>
  );
};

export default memo(Searchbar);
