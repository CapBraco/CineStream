const MovieTrailer = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No trailers available</p>;
  }

  const youtubeTrailers = videos.filter(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  if (youtubeTrailers.length === 0) {
    return <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No trailers available</p>;
  }

  const youtubeUrl = "https://www.youtube.com/embed/";

  return (
    <div>
      {youtubeTrailers.map((video) => (
        <div key={video.id}>
          <h3>{video.name}</h3>
          <iframe
            width="100%"
            height="450"
            src={`${youtubeUrl}${video.key}?autoplay=0&rel=0`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default MovieTrailer;
