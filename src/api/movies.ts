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

export async function getTopRatedMoviesData() {
  const res = await fetch(TOP_RATED_MOVIES_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movie data");
  }

  return res.json();
}

export async function getUpcomingMoviesData() {
  const res = await fetch(UPCOMING_MOVIES_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movie data");
  }

  return res.json();
}

export async function getMovieGenreData() {
  const res = await fetch(MOVIE_GENRE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch movie genre list");
  }

  return res.json();
}
