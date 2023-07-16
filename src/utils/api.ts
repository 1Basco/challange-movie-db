import {
  MOVIE_GENRE_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "@/utils/api.constants";

export async function getPopularMoviesData() {
  const res = await fetch(POPULAR_MOVIES_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch popular movie data");
  }

  return res.json();
}

export async function getTopRatedMoviesData(): Promise<any> {
  const res = await fetch(TOP_RATED_MOVIES_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies data");
  }

  return res.json();
}

export async function getUpcomingMoviesData(): Promise<any> {
  const res = await fetch(UPCOMING_MOVIES_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies data");
  }

  return res.json();
}

export async function getMovieGenreData(): Promise<any> {
  const res = await fetch(MOVIE_GENRE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch movies genre list");
  }

  return res.json();
}

export async function getMovieData(movieId?: string): Promise<any> {
  const res = await fetch(
    process.env.THE_MOVIE_DB_API_BASE_URL +
      `/movie/${movieId}}?api_key=` +
      process.env.THE_MOVIE_DB_API_KEY
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie data");
  }

  return res.json();
}
