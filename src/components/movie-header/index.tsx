import { IMovieDetails } from "@/types/movie.types";
import { formatLocaleDate, formatTimeToHM, getFullYear } from "@/utils/format";

interface IMovieHeaderProps {
  movieData: IMovieDetails;
}

const MovieHeader: React.FC<IMovieHeaderProps> = ({
  movieData,
}: IMovieHeaderProps) => {
  return (
    <>
      <h2 className="text-xl md:text-3xl font-semibold">
        {movieData.title}
        <span className="font-normal text-gray-300">
          &nbsp;({getFullYear(movieData.release_date)})
        </span>
      </h2>
      <div className="font-light">
        <span>{formatLocaleDate(movieData.release_date)} (US) &nbsp;</span>
        <span>
          &#183;{" "}
          {movieData.genres
            .map((genre, index) =>
              index !== movieData.genres.length - 1
                ? genre.name + ", "
                : genre.name
            )
            .join("")}{" "}
          &#183; &nbsp;
        </span>

        <span>{formatTimeToHM(movieData.runtime)}</span>
      </div>
    </>
  );
};

export default MovieHeader;
