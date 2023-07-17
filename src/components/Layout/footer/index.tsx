import Image from "next/image";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="flex mt-4 justify-center content-between items-center bg-cover p-4 bg-gradient-to-l from-oxford-blue to-dark-blue h-[300px] z-20 w-full text-white">
      <Link href={"/"}>
        <Image
          alt="The Movie DB Logo"
          height={94}
          width={130}
          src="/icons/tmdb-primary-long-logo.svg"
        />
      </Link>
    </footer>
  );
};

export default Footer;
