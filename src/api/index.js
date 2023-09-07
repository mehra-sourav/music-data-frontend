import axios from "axios";
const BASE_URL = "http://127.0.0.1:5000";

export const fetchAllSongs = async () => {
  return await axios.get(`${BASE_URL}/api/songs/all`);
};

export const fetchSongByTitle = (title) => {
  let encodedTitle = encodeURIComponent(title);
  axios.get(`${BASE_URL}/api/songs/title/${encodedTitle}`);
};
