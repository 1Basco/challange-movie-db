import { POSTER_SIZE } from "@/utils/api.constants";
import { formatDateToLongMonth } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import UserScoreChart from "../user-score-chart";
import { IGenre, IMovieLists } from "@/types/movie.types";
import GenreList from "../genre-list";

interface IMovieCardProps {
  movie: IMovieLists;
  genreList: Array<IGenre>;
}

const MovieCard: React.FC<IMovieCardProps> = ({
  movie,
  genreList,
}: IMovieCardProps) => {
  return (
    <div className="shadow-lg rounded max-w-max">
      <div>
        <Link href={`/movie/${movie.id}`}>
          <Image
            width={191}
            height={290}
            src={POSTER_SIZE.md + movie.poster_path}
            alt={movie.title}
            className="rounded-t-lg"
          />
        </Link>
      </div>
      <div className="max-w-[180px] p-4">
        <div className="-mt-[37px] text-sm">
          <UserScoreChart
            score={movie.vote_average * 10}
            cx={"20"}
            cy={"20"}
            r={"17"}
            width={"40"}
            height={"40"}
          />
        </div>
        <h2 className="font-bold text-base leading-tight">
          <Link href={`/movie/${movie.id}`} className="hover:text-light-blue">
            {movie.title}
          </Link>
        </h2>
        <p>{formatDateToLongMonth(movie.release_date)}</p>
        <GenreList genreList={genreList} genreIds={movie.genre_ids} />
      </div>
    </div>
  );
};

export default MovieCard;
