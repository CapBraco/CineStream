import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";
import MovieInfo from "../components/MovieInfo";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieTrailer from "../components/MovieTrailer";
import { useState, useEffect } from "react";
import { useGenres } from "../hooks/useGenres";
import { useMovies } from "../hooks/useMovies";
import { useMovieInfo } from "../hooks/useMovieInfo";
import { useRandomMovie } from "../hooks/useRandomMovie";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const GenresContainer = () => {
  const { categories } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Load default genre when categories are available
  useEffect(() => {
    if (categories && categories.length > 0 && !selectedGenre) {
      setSelectedGenre(categories[0].id);
    }
  }, [categories, selectedGenre]);

  const { movies, loading } = useMovies(selectedGenre);
  const { movieInfo } = useMovieInfo(selectedMovie);
  const { movie: randomMovie } = useRandomMovie(selectedGenre);
  const { videos } = useMovieTrailer(selectedMovie);

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMovieSelect = (movieId) => {
    setSelectedMovie(movieId);
  };

  const handleMoreInfo = (movieId) => {
    setSelectedMovie(movieId);
  };

  return (
    <>
      <NavBar
        categories={categories}
        onSelect={handleGenreChange}
        selectedGenre={selectedGenre}
      />

      <div className="main with-sidebar" role="main">
        <FeaturedMovie 
          randomMovie={randomMovie} 
          onMoreInfo={handleMoreInfo}
        />

        {loading ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            color: 'var(--text-secondary)' 
          }}>
            <p>Loading movies...</p>
          </div>
        ) : movies.length > 0 ? (
          <MovieList
            movies={movies}
            onSelect={handleMovieSelect}
            categories={categories}
          />
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            color: 'var(--text-secondary)' 
          }}>
            <p>No movies found for this genre.</p>
          </div>
        )}

        {selectedMovie && movieInfo && (
          <MovieInfo
            movieInfo={movieInfo}
            onClose={() => setSelectedMovie(null)}
          >
            {videos.length > 0 && <MovieTrailer videos={videos} />}
          </MovieInfo>
        )}
      </div>
    </>
  );
};

export default GenresContainer;
