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

/**
 * Function to rate a song by ID using the API
 *
 * @param {string} songId - The ID of the song to rate
 * @param {number} newRating - The new rating of the song
 * @returns {Promise}
 */
export const rateSongById = async (songId, newRating) => {
  return await axios.patch(`${BASE_URL}/api/songs/title/${songId}/rate`, {
    new_rating: newRating,
  });
};
