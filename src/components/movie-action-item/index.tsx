interface IMovieActionItemProps {
  icon: JSX.Element;
}

const MovieActionItem: React.FC<IMovieActionItemProps> = ({
  icon,
}: IMovieActionItemProps) => {
  return <li className="rounded-full bg-oxford-blue p-4 mr-6">{icon}</li>;
};

export default MovieActionItem;
