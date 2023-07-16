import GridListLayout from "@/components/Layout/grid-list-layout";
import MovieCard from "@/components/movie-card";
import { IMovieLists } from "@/types/movie.types";
import { getMovieGenreData, getPopularMoviesData } from "@/utils/api";

export default async function Home() {
  const popularMovies = await getPopularMoviesData();
  const movieGenreList = await getMovieGenreData();
  return (
    <main className="flex min-h-screen flex-col p-24">
      <GridListLayout title="Popular Movies">
        {popularMovies.results.map((movie: IMovieLists, key: any) => (
          <MovieCard
            key={key}
            movie={movie}
            genreList={movieGenreList.genres}
          />
        ))}
      </GridListLayout>
    </main>
  );
}
