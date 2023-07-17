import { USDollar, getLanguageName } from "@/utils/format";

interface IMovieStatusProps {
  status?: string;
  language?: string;
  budget: number;
  revenue: number;
}

const StatusItem: React.FC<{ value?: string; title: string }> = ({
  value,
  title,
}: {
  value?: string;
  title: string;
}) => {
  return (
    <div className="my-3">
      <span className="font-semibold">{title}</span>
      <p>{value}</p>
    </div>
  );
};

const MovieStatus: React.FC<IMovieStatusProps> = ({
  status,
  language,
  budget,
  revenue,
}: IMovieStatusProps) => {
  return (
    <>
      {status && <StatusItem value={status} title="Status" />}
      {language && (
        <StatusItem
          value={getLanguageName.of(language)}
          title="Original Language"
        />
      )}
      {budget && <StatusItem value={USDollar.format(budget)} title="Budget" />}
      {revenue > 0 && (
        <StatusItem value={USDollar.format(revenue)} title="Revenue" />
      )}
    </>
  );
};

export default MovieStatus;
