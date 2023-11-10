import Link from "next/link";
import Menu from "./Menu";
import { BsCart4 } from "react-icons/bs";
import NavBar from "./NavBar";
const Header = () => {
  const navList = [
    { title: "Accueil", url: "/" },
    { title: "Enfant", url: "/children" },
    { title: "Homme", url: "/men" },
    { title: "Femme", url: "/women" },
  ] as const;

  return (
    <header className="h-12 bg-gray flex items-center px-[1rem] justify-between text-blue">
      <Menu navList={navList} />
      <Link href="/">
        <h1 className="text-xl uppercase">UrbanSoul</h1>
      </Link>
      <NavBar navList={navList} />
      <Link href="/cart">
        <BsCart4 size="2rem" />
      </Link>
    </header>
  );
};

export default Header;
