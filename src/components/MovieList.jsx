const MovieList = ({ movies, onSelect, categories }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const getGenreNames = (genresIds = []) => {
    return genresIds
      .map(id => categories.find(cat => cat.id === id)?.name)
      .filter(Boolean)
      .join(", ");
  };

  return (
    <div className="movie-list">
      <ul className="list">
        {movies.map((movie) => (
          <li
            key={movie.id}
            value={movie.id}
            onClick={() => onSelect(movie.id)}
          >
            <img
              src={
                movie.poster_path
                  ? `${posterBaseUrl}${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
              className="cover"
            />
            <div className="movie-overlay">
              <p className="title">{movie.title}</p>
              <p className="genre">{getGenreNames(movie.genre_ids)}</p>
              <p className="date">{movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</p>
              {movie.vote_average > 0 && (
                <div className="movie-rating">
                  <i className="fa fa-star"></i>
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
