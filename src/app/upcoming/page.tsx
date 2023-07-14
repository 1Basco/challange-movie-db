import { getMovieGenreData, getUpcomingMoviesData } from "@/api/movies";
import MovieCard from "@/components/movie-card";
import { IMovieLists } from "@/types/movie.types";

export default async function Upcoming() {
  const upcomingMovies = await getUpcomingMoviesData();
  const movieGenreList = await getMovieGenreData();
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-4xl font-semibold mb-6">Upcoming Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto">
        {upcomingMovies.results.map((movie: IMovieLists, key: any) => (
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
