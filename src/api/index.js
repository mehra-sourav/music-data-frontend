import axios from "axios";
const BASE_URL = "http://127.0.0.1:5000";

/**
 * Function to fetch all songs data from the API
 *
 * @returns {Promise}
 */
export const fetchAllSongs = async () => {
  return await axios.get(`${BASE_URL}/api/songs/all`);
};

/**
 * Function to fetch song data by title from the API
 *
 * @param {string} title - The title of the song to fetch
 * @returns {Promise}
 */
export const fetchSongByTitle = async (title) => {
  let encodedTitle = encodeURIComponent(title);
  return await axios.get(`${BASE_URL}/api/songs/title/${encodedTitle}`);
};
