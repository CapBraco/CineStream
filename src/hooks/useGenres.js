import { useEffect, useState } from "react";
import { getGenres } from "../services/tmdb";

export const useGenres = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await getGenres();
        setCategories(genres);
      } catch (err) {
        setError(err);
        console.error("Error fetching genres:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  return { categories, loading, error };
};