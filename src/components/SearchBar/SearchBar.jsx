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
        id="sourav"
        sx={{
          marginBottom: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Search by Song Title"
          id="searchbar"
          value={value}
          onChange={handleChange}
          inputRef={inputRef}
          onKeyDown={handleKeyPress}
          style={{ backgroundColor: "white", width: "30%" }}
        />

        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          sx={{ width: "150px" }}
          onClick={handleSearch}
        >
          Get Song
        </Button>
      </Box>
    </>
  );
};

export default memo(Searchbar);
