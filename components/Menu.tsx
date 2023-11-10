"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Menu = ({ navList }) => {
  const [open, setOpen] = useState<boolean>(false);
  const user: boolean = false;

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="md:hidden">
      {!open ? (
        <FaBarsStaggered size="2rem" onClick={handleMenu} />
      ) : (
        <IoMdClose size="2rem" onClick={handleMenu} />
      )}

      {open && (
        <div className="w-[100vw] h-[calc(100vh-3rem)] absolute bg-blue left-0 top-[3rem] z-10 uppercase">
          <ul className="flex items-center justify-center flex-col gap-10 h-full hover:text-green text-gray">
            {navList.map((list: { title: string; url: string }) => (
              <li key={list.url} onClick={handleMenu}>
                <Link href={list.url} className="text-3xl">
                  {list.title}
                </Link>
              </li>
            ))}
            {user ? (
              <li onClick={handleMenu}>
                <Link href="/login" className="text-3xl">
                  Connexion
                </Link>
              </li>
            ) : (
              <li onClick={handleMenu}>
                <Link href="/cart" className="text-3xl">
                  Panier
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
