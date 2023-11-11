import Link from "next/link";
import { GiGhost } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="bg-blue w-full h-[20rem] text-gray p-4">
      <div className="flex-1 flex items-center gap-2">
        <GiGhost size="4rem" />
        <Link href="/" >
          <h1 className="text-4xl uppercase font-bold">UrbanSoul</h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
