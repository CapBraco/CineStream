// TMDb API configuration
const tmdbKey = 'de0f68dacc87c34adac8de33c84e277a';
const tmdbUrl = 'https://api.themoviedb.org/3';

// Get list of movie genres
export const getGenres = async () => {
  const genRequestEndPoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbUrl}${genRequestEndPoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.genres;
    }
    throw new Error('Failed to fetch genres');
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

// Get movies by genre
export const getMoviesByGender = async (genreId) => {
  const movieRequestEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${genreId}&sort_by=popularity.desc&language=en-US&page=1`;
  const urlToFetch = `${tmdbUrl}${movieRequestEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.results;
    }
    throw new Error('Failed to fetch movies');
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Get random movie from array
export const getRandomMovie = (movies) => {
  if (!movies || movies.length === 0) return null;
  const index = Math.floor(Math.random() * movies.length);
  return movies[index];
};

// Get detailed movie information
export const getMovieInfo = async (movieId) => {
  const movieInfoEndPoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}&language=en-US`;
  const urlToFetch = `${tmdbUrl}${movieInfoEndPoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Failed to fetch movie info');
  } catch (error) {
    console.error('Error fetching movie info:', error);
    throw error;
  }
};

// Get movie trailers and videos
export const getMovieTrailer = async (movieId) => {
  const movieInfoEndPoint = `/movie/${movieId}/videos`;
  const requestParams = `?api_key=${tmdbKey}&language=en-US`;
  const urlToFetch = `${tmdbUrl}${movieInfoEndPoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Failed to fetch movie trailer');
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    return { results: [] };
  }
};