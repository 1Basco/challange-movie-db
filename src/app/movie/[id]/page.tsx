import CastList from "@/components/cast-list";
import CastOverview from "@/components/cast-overview";
import MovieActions from "@/components/movie-actions";
import MovieHeader from "@/components/movie-header";
import MovieStatus from "@/components/movie-status";
import { IMovieDetails } from "@/types/movie.types";
import { getMovieData } from "@/utils/api";
import { POSTER_SIZE } from "@/utils/api.constants";
import Image from "next/image";

interface IMoviePageProps {
  params: {
    id?: string;
  };
}

export default async function Movie({
  params,
}: IMoviePageProps): Promise<JSX.Element> {
  const movieData: IMovieDetails | null = await getMovieData(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {params.id && movieData ? (
        <>
          <section className="flex w-full">
            <div
              className="bg-no-repeat mt-[60px] bg-top md:bg-left w-full mx-auto"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieData.backdrop_path})`,
              }}
            >
              <div className="bg-opacity-70 bg-dark-blue">
                <section className="flex gap-10 p-2 md:p-12 max-w-7xl mx-auto flex-col md:flex-row">
                  <div className="flex h-auto min-w-[300px] mx-auto">
                    <Image
                      width={300}
                      height={450}
                      src={POSTER_SIZE.md + movieData.poster_path}
                      alt={movieData.title}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-nowrap">
                    <div className="flex flex-wrap content-center text-white">
                      <div className="my-5">
                        <MovieHeader movieData={movieData} />
                        <MovieActions movieData={movieData} />
                        <div>
                          <h3 className="text-base md:text-xl italic font-light">
                            {movieData.tagline}
                          </h3>
                        </div>
                        <div>
                          <h3 className="font-medium text-base md:text-2xl mb-3 mt-2">
                            Overview
                          </h3>
                          <p className="font-light text-sm md:text-base">
                            {movieData.overview}
                          </p>
                        </div>
                        <div>
                          <CastOverview castData={movieData.credits.cast} />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section className="w-full">
            <div className="flex max-w-7xl mx-auto p-2 md:p-12 justify-around">
              <div className="flex-grow">
                <h3 className="font-semibold text-base md:text-3xl mb-3 mt-2">
                  Cast
                </h3>
                <CastList castData={movieData.credits.cast} />
              </div>
              <div className="flex-end max-w-md ">
                <MovieStatus
                  status={movieData.status}
                  language={movieData.original_language}
                  budget={movieData.budget}
                  revenue={movieData.revenue}
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <h1>Movie info not found try again later</h1>
        </>
      )}
    </main>
  );
}
