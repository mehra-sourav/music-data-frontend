import { useState, useRef, useEffect } from "react";
import { useFetchSongData } from "@/hooks/useFetchSongs";
import CircularProgress from "@mui/material/CircularProgress";
import Dashboard from "@/components/Dashboard/Dashboard";
import SearchBar from "@/components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const { isLoading, allSongsData, err, fetchData } = useFetchSongData();
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    fetchData(searchText);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <>
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
        <Dashboard isLoading={isLoading} songsData={allSongsData} error={err} />
      )}
    </>
  );
}

export default App;
