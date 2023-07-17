import { IMovieDetails } from "@/types/movie.types";
import UserScoreChart from "../user-score-chart";
import { FaListUl, FaPlay } from "react-icons/fa";
import { BsBookmarkFill, BsFillStarFill, BsHeartFill } from "react-icons/bs";
import MovieActionItem from "../movie-action-item";

interface IMovieActionsProps {
  movieData: IMovieDetails;
}
const MovieActions: React.FC<IMovieActionsProps> = ({
  movieData,
}: IMovieActionsProps) => {
  return (
    <ul className="flex items-center justify-start w-full my-2">
      <li className="mr-0 md:mr-6">
        <div className="text-3xl md:inline-flex items-center hidden">
          <UserScoreChart
            score={movieData.vote_average * 10}
            cx={"40"}
            cy={"40"}
            r={"35"}
            width={"80px"}
            height={"80px"}
          />
          <span className="font-semibold text-xl ml-2 whitespace-pre-line">
            User <br /> Score
          </span>
        </div>
      </li>
      <MovieActionItem icon={<FaListUl color="white" size={16} />} />
      <MovieActionItem icon={<BsHeartFill color="white" size={16} />} />
      <MovieActionItem icon={<BsBookmarkFill color="white" size={16} />} />
      <MovieActionItem icon={<BsFillStarFill color="white" size={16} />} />
      <li className="flex items-center gap-4 font-medium hover:opacity-40">
        <FaPlay color="white" size={16} />
        Play Trailer
      </li>
    </ul>
  );
};

export default MovieActions;
