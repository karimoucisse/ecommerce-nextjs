import Link from "next/link";
import React from "react";

const Menu = ({ navList, open }) => {
  return (
    <div>
      {open && (
        <div className="w-[100vw] h-[calc(100vh-3rem)] absolute bg-blue left-0 top-[3rem] z-10">
          <ul className="flex items-center justify-center flex-col gap-8 h-full hover:text-green">
            {navList.map((list: { title: string; url: string }) => (
              <li key={list.url}>
                <Link href={list.url} className="text-3xl">
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
