import GridListLayout from "@/components/Layout/grid-list-layout";
import MovieCard from "@/components/movie-card";
import { IMovieLists } from "@/types/movie.types";
import { getMovieGenreData, getTopRatedMoviesData } from "@/utils/api";

export default async function TopRated() {
  const topRatedMovies = await getTopRatedMoviesData();
  const movieGenreList = await getMovieGenreData();
  return (
    <main className="flex min-h-screen flex-col p-24">
      <GridListLayout title="Top Rated Movies">
        {topRatedMovies.results.map((movie: IMovieLists, key: any) => (
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
