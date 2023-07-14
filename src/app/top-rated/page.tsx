import { getMovieGenreData, getTopRatedMoviesData } from "@/api/movies";
import MovieCard from "@/components/movie-card";
import { IMovieLists } from "@/types/movie.types";

export default async function TopRated() {
  const topRatedMovies = await getTopRatedMoviesData();
  const movieGenreList = await getMovieGenreData();
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-4xl font-semibold mb-6">Top Rated Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto">
        {topRatedMovies.results.map((movie: IMovieLists, key: any) => (
          <MovieCard
            key={key}
            movie={movie}
            genreList={movieGenreList.genres}
          />
        ))}
      </div>
    </main>
  );
}
