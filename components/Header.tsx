"use client";
import { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  const [open, setOpen] = useState<boolean>(true);
  const navList = [
    { title: "Accueil", url: "/" },
    { title: "Enfant", url: "/children" },
    { title: "Hommes", url: "/men" },
    { title: "Femmes", url: "/women" },
  ] as const;

  return (
    <header className="h-12 bg-blue flex items-center px-[1rem] justify-between text-gray-200">
      <div className="text-xl uppercase">UrbanSoul</div>
      {/* <nav>
        <ul className="flex items-center gap-x-6">
          {navList.map((list) => (
            <li key={list.url}>
              <Link href={list.url}>{list.title}</Link>
            </li>
          ))}
        </ul>
      </nav> */}
      <Menu navList={navList} open={open} />
    </header>
  );
};

export default Header;
