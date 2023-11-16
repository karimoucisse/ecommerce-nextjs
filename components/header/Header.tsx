import Link from "next/link";
import Menu from "./Menu";
import { BsCart4 } from "react-icons/bs";
import { GiGhost } from "react-icons/gi";
import NavBar from "./NavBar";
const Header = () => {
  const navList = [
    { title: "Homme", url: "/men" },
    { title: "Femme", url: "/women" },
    { title: "Enfant", url: "/children" },
    { title: "Nouveautés", url: "/novelties" },
  ] as const;

  return (
    <header
      className="h-12 bg-gray flex items-center p-2 md:px-[3rem] 
     text-blue shadow-[0px 2px 24px 0px] shadow-[rgba(0, 0, 0, 0.09)]"
    >
      <Menu navList={navList} />
      <NavBar navList={navList} />
      <div className="flex-1 flex justify-center items-center gap-2">
        {/* <GiGhost size="2rem" /> */}
        <Link href="/" className="text-center">
          <h1 className="text-xl uppercase font-bold">UrbanSoul</h1>
        </Link>
      </div>
      <Link href="/cart" className="flex-1 flex justify-end">
        <BsCart4 size="2rem" />
      </Link>
    </header>
  );
};

export default Header;
