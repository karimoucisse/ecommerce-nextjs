import Link from "next/link";
import React from "react";

const PromoSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Explorez la mode à chaque pas.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              votre destination ultime pour des sneakers, des chaussures et des
              vêtements à la pointe du style. Découvrez une collection
              soigneusement sélectionnée qui redéfinit l'élégance décontractée.
              {/* Prêt(e) à affirmer votre style ? Parcourez notre sélection dès
              maintenant */}
            </p>
          </div>

          <div>
            <div className="flex gap-4">
              <button className="inline-block rounded-md border bg-blue px-12 py-3 text-center font-medium text-gray">
                <Link href="/men">Homme</Link>
              </button>
              <button className="inline-block rounded-md border bg-blue px-12 py-3 text-center font-medium text-gray">
                <Link href="/women">Femme</Link>
              </button>
              <button className="inline-block rounded-md border bg-blue px-12 py-3 text-center font-medium text-gray">
                <Link href="/children">Enfant</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
