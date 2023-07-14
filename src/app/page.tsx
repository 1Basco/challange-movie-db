import { getMovieGenreData, getPopularMoviesData } from "@/api/movies";
import MovieCard from "@/components/movie-card";
import { IMovie } from "@/types/movie.types";

export default async function Home() {
  const popularMovies = await getPopularMoviesData();
  const movieGenreList = await getMovieGenreData();
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-4xl font-bold mb-6">Popular Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto">
        {popularMovies.results.map((movie: IMovie, key: any) => (
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
