import { IGenre } from "@/types/movie.types";

interface GenreListProps {
  genreIds: Array<number>;
  genreList: Array<IGenre>;
}

const GenreList: React.FC<GenreListProps> = ({
  genreIds,
  genreList,
}): JSX.Element => {
  const genreNames = genreIds
    .map((id) => genreList.find((genre) => genre.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  return <p className="text-gray-400 text-xs">Genres: {genreNames}</p>;
};

export default GenreList;
