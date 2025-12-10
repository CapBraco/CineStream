import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useState } from "react";

const FeaturedMovie = ({ randomMovie, onMoreInfo }) => {
  const [isMuted, setIsMuted] = useState(true);
  const movieId = randomMovie?.id;
  const { videos } = useMovieTrailer(movieId);

  if (!randomMovie) return null;

  const { title, backdrop_path, vote_average, overview } = randomMovie;
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  const trailer = videos?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  const handleMoreInfo = () => {
    if (onMoreInfo) {
      onMoreInfo(randomMovie.id);
    }
  };

  return (
    <div className="featured-movie">
      {trailer ? (
        <iframe
          width="100%"
          className="iframe-featured"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${trailer.key}&modestbranding=1&rel=0`}
          title={title}
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          className="cover"
          src={
            backdrop_path
              ? `${posterBaseUrl}${backdrop_path}`
              : "https://via.placeholder.com/1920x1080?text=No+Image"
          }
          alt={title}
        />
      )}

      <p className="corner-title">
        <i className="fa fa-star"></i> Featured
      </p>

      <div className="bottom-bar">
        <div className="title-container">
          <b>{title}</b>
          {overview && (
            <p className="subtitle">
              {overview.length > 150 ? `${overview.substring(0, 150)}...` : overview}
            </p>
          )}
        </div>

        <div className="movie-meta">
          <div className="rating-badge">
            <div className="stars">
              {"★".repeat(Math.round(vote_average / 2))}
              {"☆".repeat(5 - Math.round(vote_average / 2))}
            </div>
            <span className="rating-number">{vote_average.toFixed(1)}/10</span>
          </div>
        </div>

        <div className="featured-actions">
          <button className="btn btn-primary" onClick={handleMoreInfo}>
            <i className="fa fa-play"></i>
            More Info
          </button>
          {trailer && (
            <button 
              className="btn btn-secondary" 
              onClick={() => setIsMuted(!isMuted)}
            >
              <i className={`fa fa-volume-${isMuted ? 'off' : 'up'}`}></i>
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
