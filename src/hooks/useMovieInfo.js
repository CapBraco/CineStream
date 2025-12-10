import { useState, useEffect } from "react";
import { getMovieInfo } from "../services/tmdb";

export const useMovieInfo = (movieId) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setMovieInfo(null);
      return;
    }

    const fetchMovieInfo = async () => {
      setLoading(true);
      try {
        const data = await getMovieInfo(movieId);
        setMovieInfo(data);
      } catch (err) {
        setError(err);
        console.error("Error fetching movie info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieInfo();
  }, [movieId]);

  return { movieInfo, loading, error };
};