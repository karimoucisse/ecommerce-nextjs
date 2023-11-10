import Link from "next/link";

const Header = () => {
  const navList = [
    { name: "Accueil", link: "/" },
    { name: "Enfant", link: "/children" },
    { name: "Hommes", link: "/men" },
    { name: "Femmes", link: "/women" },
  ] as const;

  return (
    <header className="h-[3rem] bg-[#212A2F] flex items-center px-[3rem] justify-between text-gray-200">
      <div>UrbanSoul</div>
      <nav>
        <ul className="flex items-center gap-x-6">
          {navList.map((list) => (
            <li key={list.link}>
              <Link href={list.link}>{list.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
