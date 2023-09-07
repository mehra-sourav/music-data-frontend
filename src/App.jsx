import { useState } from "react";
import { useFetchAllSongs } from "@/hooks/useFetchSongs";
import CircularProgress from "@mui/material/CircularProgress";
import Dashboard from "@/components/Dashboard/Dashboard";
import SearchBar from "@/components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const { isLoading, songsData, error } = useFetchAllSongs();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  console.log("app render");

  return (
    <>
      <h1>Songs Data</h1>
      <SearchBar
        value={searchText}
        handleChange={handleChange}
        onSearch={handleSearch}
      />
      <Dashboard isLoading={isLoading} songsData={songsData} error={error} />
    </>
  );
}

export default App;
