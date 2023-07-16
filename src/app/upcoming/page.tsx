import GridListLayout from "@/components/Layout/grid-list-layout";
import MovieCard from "@/components/movie-card";
import { IMovieLists } from "@/types/movie.types";
import { getMovieGenreData, getUpcomingMoviesData } from "@/utils/api";

export default async function Upcoming() {
  const upcomingMovies = await getUpcomingMoviesData();
  const movieGenreList = await getMovieGenreData();
  return (
    <main className="flex min-h-screen flex-col p-24">
      <GridListLayout title="Upcoming Movies">
        {upcomingMovies.results.map((movie: IMovieLists, key: any) => (
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
