import React from "react";

const MovieInfo = ({ movieInfo, onClose, children }) => {
  if (!movieInfo) return null;

  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

  const handleContainerClick = (e) => e.stopPropagation();

  return (
    <div className="movie-info-overlay" onClick={onClose}>
      <div className="movie-info" onClick={handleContainerClick}>
        <div className="movie-info-title">
          <h2>{movieInfo.title}</h2>
        </div>
        
        <div className="movie-info-media">
          <div className="movie-info-media-img">
            <img
              src={
                movieInfo.poster_path
                  ? `${posterBaseUrl}${movieInfo.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movieInfo.title}
            />
          </div>
          
          <div className="movie-info-media-text">
            <h5>Original Title</h5>
            <p>"{movieInfo.original_title}"</p>
            
            <h5>Overview</h5>
            <p>{movieInfo.overview || "No overview available."}</p>
            
            <h5>Rating</h5>
            <p>
              <span className="stars">
                {"★".repeat(Math.round(movieInfo.vote_average / 2))}
                {"☆".repeat(5 - Math.round(movieInfo.vote_average / 2))}
              </span>
              {" "}
              {movieInfo.vote_average.toFixed(1)}/10 ({movieInfo.vote_count} votes)
            </p>
            
            {movieInfo.release_date && (
              <>
                <h5>Release Date</h5>
                <p>{new Date(movieInfo.release_date).toLocaleDateString()}</p>
              </>
            )}
            
            {movieInfo.runtime && (
              <>
                <h5>Runtime</h5>
                <p>{Math.floor(movieInfo.runtime / 60)}h {movieInfo.runtime % 60}m</p>
              </>
            )}
          </div>
        </div>
        
        {movieInfo.genres && movieInfo.genres.length > 0 && (
          <div className="movie-info-genres">
            <p>
              {movieInfo.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
        )}
        
        <div className="media-trailer">{children}</div>
      </div>
    </div>
  );
};

export default MovieInfo;
