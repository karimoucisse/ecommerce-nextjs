import Link from "next/link";
import Menu from "./Menu";
import { BsCart4 } from "react-icons/bs";
import NavBar from "./NavBar";
const Header = () => {
  const navList = [
    { title: "Homme", url: "/men" },
    { title: "Femme", url: "/women" },
    { title: "Enfant", url: "/children" },
    { title: "Nouveautés", url: "/novelties" },
  ] as const;

  return (
    <header className="h-12 bg-gray flex items-center px-[1rem] md:px-[3rem] justify-between text-blue">
      <Menu navList={navList} />
      <NavBar navList={navList} />
      <Link href="/" className="flex-1 text-center">
        <h1 className="text-xl uppercase font-bold">UrbanSoul</h1>
      </Link>
      <Link href="/cart" className="flex-1 flex justify-end">
        <BsCart4 size="2rem" />
      </Link>
    </header>
  );
};

export default Header;
