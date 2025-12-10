import { useState, useEffect } from "react";
import { getMoviesByGender, getRandomMovie } from "../services/tmdb";

export const useRandomMovie = (genre) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!genre) return;

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const moviesByGenre = await getMoviesByGender(genre);
        if (moviesByGenre && moviesByGenre.length > 0) {
          const randomMovie = getRandomMovie(moviesByGenre);
          setMovie(randomMovie);
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching random movie:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [genre]);

  return { movie, loading, error };
};