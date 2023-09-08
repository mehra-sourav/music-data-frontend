import { useState, useRef, useEffect, useCallback } from "react";
import { useManageSongs } from "@/hooks/useManageSongs";
import CircularProgress from "@mui/material/CircularProgress";
import Dashboard from "@/components/Dashboard/Dashboard";
import SearchBar from "@/components/SearchBar/SearchBar";
import SnackBar from "@/components/SnackBar/SnackBar";
import Box from "@mui/material/Box";
import {
  handleChangeUtil,
  handleSearchUtil,
  handleRatingChangeUtil,
} from "@/utils";
import "./App.css";

function App() {
  const [snackMsg, setSnackMsg] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { isLoading, allSongsData, setSongsData, fetchData, rateSong } =
    useManageSongs(setSnackMsg, setSnackOpen);
  const searchInputRef = useRef(null);

  const handleChange = (e) => handleChangeUtil(e, setSearchText);
  const handleSearch = () =>
    handleSearchUtil(searchText, fetchData, searchInputRef);
  const handleRatingChange = useCallback(
    (songId, newRating, x, y) =>
      handleRatingChangeUtil(
        songId,
        newRating,
        x,
        y,
        allSongsData,
        rateSong,
        setSongsData
      ),
    [allSongsData]
  );

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <Box>
      <h1>Songs Data</h1>
      <SearchBar
        inputRef={searchInputRef}
        value={searchText}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <Dashboard
          songsData={allSongsData}
          handleRatingChange={handleRatingChange}
        />
      )}

      <SnackBar
        open={snackOpen}
        msg={snackMsg}
        onClose={() => setSnackOpen(false)}
      />
    </Box>
  );
}

export default App;
