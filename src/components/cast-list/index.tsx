import { ICast } from "@/types/movie.types";
import { POSTER_SIZE } from "@/utils/api.constants";
import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";

interface ICastListProps {
  castData: Array<ICast>;
}
const CastList: React.FC<ICastListProps> = ({ castData }: ICastListProps) => {
  const getActingCast = () => {
    return castData.filter((cast) => cast.known_for_department === "Acting");
  };

  const actingCast = getActingCast();

  return (
    <div>
      <div className="grid max-w-fit mx-auto md:mx-0 grid-cols-2 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-3 gap-y-2 md:gap-y-5">
        {actingCast.map((cast, key) => (
          <div key={key}>
            <div className="shadow-lg shadow-gray-300 h-full rounded-lg">
              {cast.profile_path === null ? (
                <div className="w-[138px] h-[175px] rounded-t-lg flex justify-center items-center bg-gray-300">
                  <IoPersonSharp size={80} className="text-gray-400" />
                </div>
              ) : (
                <Image
                  src={POSTER_SIZE.profile_pic + cast.profile_path}
                  alt={cast.name}
                  width={138}
                  height={175}
                  className="rounded-t-lg"
                />
              )}
              <div className="max-w-[138px] max-h-fit p-2">
                <p className="font-bold">{cast.name}</p>
                <p className="text-sm">{cast.character}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
