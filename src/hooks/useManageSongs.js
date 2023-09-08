import { useEffect, useState } from "react";
import { fetchAllSongs, fetchSongByTitle, rateSongById } from "@/api";

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
export const useManageSongs = (setMsg, setOpen) => {
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

  /**
   * Rates a specfic song based on the provided ID
   * @param {string} songId - The ID of the song to rate
   */
  async function rateSong(songId, newRating, x, y, updateCellValue) {
    rateSongById(songId, newRating)
      .then((res) => {
        setMsg("Song was rated successfully!!");
        updateCellValue(x, y, newRating);
        setOpen(true);
      })
      .catch((err) => {
        // Songs couldn't be rated successfully
        setMsg("Oh no!! There was some error while rating the song");
        setOpen(true);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading: loading,
    allSongsData: songsData,
    err: error,
    setSongsData,
    fetchData,
    rateSong,
  };
};
