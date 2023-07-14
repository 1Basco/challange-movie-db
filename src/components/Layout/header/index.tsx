import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { RxPlus } from "react-icons/rx";
import MobileHeader from "../mobile-header";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center p-4 bg-oxford-blue h-16 z-20 fixed w-full text-white">
      <div className="hidden md:flex justify-between max-w-7xl container px-10">
        <div className="flex items-center justify-start flex-nowrap space-x-4">
          <Link href="/">
            <Image
              src="/icons/tmdb-short-logo.svg"
              alt="The Movie DB Logo"
              height={20}
              width={154}
            />
          </Link>
          <nav>
            <ul className="flex justify-start items-center space-x-10 font-semibold">
              <li className="group relative">
                <Link href="#">Movies</Link>
                <div className="absolute left-0 hidden group-hover:block hover:block bg-white py-2 px-4 rounded shadow-lg w-[200px] overflow-hidden">
                  <ul>
                    <li className="text-black font-normal text-base py-1">
                      <Link href="/">Popular</Link>
                    </li>
                    <li className="text-black font-normal text-base py-1">
                      <Link href="/upcoming">Upcoming</Link>
                    </li>
                    <li className="text-black font-normal text-base py-1">
                      <Link href="/top-rated">Top Rated</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-gray-400">
                <Link href="#">TV Shows</Link>
              </li>
              <li className="text-gray-400">
                <Link href="#">People</Link>
              </li>
              <li className="text-gray-400">
                <Link href="#">More</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-end items-center text-gray-400 font-semibold space-x-6">
          <RxPlus size={24} fontWeight={700} />
          <Link
            href="#"
            className="px-2 py-1 border border-gray-400 rounded-md hover:bg-gray-400 hover:text-white"
          >
            EN
          </Link>
          <Link href="#">Login</Link>
          <Link href="#">Join TMDB</Link>
          <button className="p-1">
            <FaSearch size={22} color="#01B4E4" />
          </button>
        </div>
      </div>
      <MobileHeader />
    </header>
  );
};

export default Header;
