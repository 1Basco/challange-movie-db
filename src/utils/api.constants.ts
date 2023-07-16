export const POSTER_SIZE = {
  lg: `${process.env.THE_MOVIE_DB_BASE_IMAGE_URL}` + "/w500",
  md: `${process.env.THE_MOVIE_DB_BASE_IMAGE_URL}` + "/w342",
  sm: `${process.env.THE_MOVIE_DB_BASE_IMAGE_URL}` + "/w154",
};

export const POPULAR_MOVIES_URL = `${
  process.env.THE_MOVIE_DB_API_BASE_URL +
  "/movie/popular?language=en-US&page=1&api_key=" +
  process.env.THE_MOVIE_DB_API_KEY
}`;

export const TOP_RATED_MOVIES_URL = `${
  process.env.THE_MOVIE_DB_API_BASE_URL +
  "/movie/top_rated?language=en-US&page=1&api_key=" +
  process.env.THE_MOVIE_DB_API_KEY
}`;

export const UPCOMING_MOVIES_URL = `${
  process.env.THE_MOVIE_DB_API_BASE_URL +
  "/movie/upcoming?language=en-US&page=1&api_key=" +
  process.env.THE_MOVIE_DB_API_KEY
}`;

export const MOVIE_GENRE_URL = `${
  process.env.THE_MOVIE_DB_API_BASE_URL +
  "/genre/movie/list?api_key=" +
  process.env.THE_MOVIE_DB_API_KEY
}`;
