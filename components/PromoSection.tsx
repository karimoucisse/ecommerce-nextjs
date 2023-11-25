import Image from "next/image";
import Link from "next/link";
import React from "react";

const PromoSection = () => {
  return (
    <div className="relative py-[3rem] md:px-4 lg:px-12 lg:py-[80px] overflow-hidden">
      <div className="sm:max-w-lg px-2 relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Explorez la mode à chaque pas.
        </h1>
        <p className="mt-2 text-xl text-gray-500 md:mt-6 md:mb-10">
          votre destination ultime pour des sneakers et des vêtements à la
          pointe du style.Découvrez une collection soigneusement sélectionnée
          qui redéfinit l'élégance décontractée.
        </p>
      </div>
      <Image
        src="/fashion.jpg"
        alt="Picture of the author"
        width={700}
        height={600}
        className="right-0 top-0 rounded-md my-4 w-full lg:absolute lg:w-[700px] -z-1"
      />
      <div className="absolute lg:relative bottom-[100px] lg:bottom-0 flex gap-4 md:gap-12 px-1 w-full justify-center lg:justify-start">
        <button className="inline-block rounded-md bg-gray lg:bg-blue px-7 py-3 text-center font-medium text-blue lg:text-white">
          <Link href="/men">Homme</Link>
        </button>
        <button className="inline-block rounded-md bg-gray lg:bg-blue px-7 py-3 text-center font-medium text-blue lg:text-white">
          <Link href="/women">Femme</Link>
        </button>
        <button className="inline-block rounded-md bg-gray lg:bg-blue px-7 py-3 text-center font-medium text-blue lg:text-white">
          <Link href="/children">Enfant</Link>
        </button>
      </div>
    </div>
  );
};

export default PromoSection;
