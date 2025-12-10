import { useState, useEffect } from "react";
import { getMovieTrailer } from "../services/tmdb";

export const useMovieTrailer = (movieId) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setVideos([]);
      return;
    }

    const fetchTrailer = async () => {
      setLoading(true);
      try {
        const data = await getMovieTrailer(movieId);
        setVideos(data.results || []);
      } catch (err) {
        setError(err);
        console.error("Error fetching trailer:", err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return { videos, loading, error };
};