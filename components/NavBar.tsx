import Link from "next/link";

const NavBar = ({ navList }) => {
  return (
    <nav className="hidden md:flex flex-1">
      <ul className="flex items-center gap-x-6 uppercase">
        {navList.map((list) => (
          <li key={list.url} className="cursor-pointer">
            <Link href={list.url}>{list.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
