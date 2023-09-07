import { useEffect, useState } from "react";
import { fetchAllSongs } from "@/api";

export const useFetchAllSongs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const response = await fetchAllSongs();

        setSongsData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { loading, songsData, error };
};

// exp;
