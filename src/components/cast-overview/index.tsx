import { ICast } from "@/types/movie.types";

interface ICastOverviewProps {
  castData: Array<ICast>;
}
const CastOverview: React.FC<ICastOverviewProps> = ({
  castData,
}: ICastOverviewProps) => {
  return (
    <div className="my-4 grid grid-cols-3 gap-4">
      {castData.slice(0, 6).map((person: ICast, index: number) => (
        <div key={index}>
          <p className="font-semibold">{person.name}</p>
          <p className="text-sm font-light">{person.known_for_department}</p>
        </div>
      ))}
    </div>
  );
};

export default CastOverview;
