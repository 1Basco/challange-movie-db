"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Image from "next/image";

const MobileHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<Boolean>(false);
  const [isMovieMenuOpen, setIsMovieMenuOpen] = useState<Boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMovieMenu = () => {
    setIsMovieMenuOpen(!isMovieMenuOpen);
  };
  return (
    <div className="flex w-full justify-between md:hidden items-center text-white">
      <button className="p-2 rounded-md w-1/3" onClick={toggleMobileMenu}>
        <GiHamburgerMenu />
      </button>
      <div
        className={`${
          isMobileMenuOpen
            ? "left-0 translate-x-0"
            : "-left-full -translate-x-full"
        } inline-block fixed top-16  z-10 h-full w-11/12 overflow-hidden bg-dark-blue opacity-90 backdrop-blur-xl transition-transform ease-in duration-300 delay-300 transform p-5`}
      >
        <ul>
          <li>
            <button onClick={toggleMovieMenu} className="font-semibold text-xl">
              Movies
            </button>
            <ul className={isMovieMenuOpen ? "block" : "hidden"}>
              <li className="text-white font-normal text-base py-1">
                <Link href="/">Popular</Link>
              </li>
              <li className="text-white font-normal text-base py-1">
                <Link href="/upcoming">Upcoming</Link>
              </li>
              <li className="text-white font-normal text-base py-1">
                <Link href="/top-rated">Top Rated</Link>
              </li>
            </ul>
          </li>
          <li className="text-gray-400 font-semibold text-xl">
            <Link href="#">TV Shows</Link>
          </li>
          <li className="text-gray-400 font-semibold text-xl">
            <Link href="#">People</Link>
          </li>
          <li className="text-gray-400 font-semibold text-xl">
            <Link href="#">More</Link>
          </li>
        </ul>
      </div>
      <Link href="/">
        <Image
          src="/icons/tmdb-primary-long-logo.svg"
          alt="The Movie DB Logo"
          height={40}
          width={55}
        />
      </Link>
      <div className="flex items-center w-1/3 justify-end">
        <IoPersonSharp className="text-gray-400" />
        <button className="p-1 ml-4">
          <FaSearch color="#01B4E4" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
