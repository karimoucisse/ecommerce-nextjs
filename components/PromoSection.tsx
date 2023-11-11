import Image from "next/image";
import Link from "next/link";
import React from "react";

const PromoSection = () => {
  return (
    <div className="relative py-[3rem] sm:px-6 lg:px-8 overflow-hidden    ">
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Explorez la mode à chaque pas.
        </h1>
        <p className="mt-2 text-xl text-gray-500">
          votre destination ultime pour des sneakers, des chaussures et des
          vêtements à la pointe du style.
        </p>
      </div>
      <Image
        src="/fashion.jpg"
        alt="Picture of the author"
        width={600}
        height={600}
        className="right-0 top-0 rounded-md my-4 md:absolute "
      />
      <div className="flex gap-x-2 px-1 justify-between md:justify-center">
        <button className="inline-block rounded-md border bg-blue px-7 py-3 text-center font-medium text-white">
          <Link href="/men">Homme</Link>
        </button>
        <button className="inline-block rounded-md border bg-blue px-7 py-3 text-center font-medium text-white">
          <Link href="/women">Femme</Link>
        </button>
        <button className="inline-block rounded-md border bg-blue px-7 py-3 text-center font-medium text-white">
          <Link href="/children">Enfant</Link>
        </button>
      </div>
    </div>
  );
};

export default PromoSection;
