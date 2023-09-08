import { useEffect, useState } from "react";
import { fetchAllSongs, fetchSongByTitle } from "@/api";

/**
 * A custom hook fetch songs data from the API
 *
 * @returns {{
 *   isLoading: boolean,
 *   allSongsData: Array<Object>,
 *   err: boolean|Error,
 *   fetchData: Function
 * }}
 */
export const useFetchSongData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [songsData, setSongsData] = useState([]);

  /**
   * Fetches specfic song or all songs based on the provided title
   * @param {string} title - The title of the song to search for
   */
  async function fetchData(title = "") {
    setLoading(true);

    let response;

    // Search by title
    if (title.length) {
      response = fetchSongByTitle(title);
    }
    // Fetch all songs
    else {
      response = fetchAllSongs();
    }

    response
      .then((res) => {
        setSongsData(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        // Searched song title not found
        if (err?.response?.status === 404) {
          setSongsData([]);
        } else {
          setError(err);
        }
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading: loading,
    allSongsData: songsData,
    err: error,
    fetchData,
  };
};
