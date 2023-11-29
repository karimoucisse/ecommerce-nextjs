import React from "react";

const CartOrderSummary = () => {
  return (
    <div className="px-4 py-6 md:w-[800px] shadow-md lg:max-w-[500px]">
      <p className="text-2xl font-seme-bold mb-2">Commande</p>
      <div className="flex w-full justify-between py-4">
        <p>Valeur de la commande</p>
        <p>25.99€</p>
      </div>
      <div className="flex w-full justify-between py-4">
        <p>Livraison</p>
        <p>25.99€</p>
      </div>
      <div className="flex w-full justify-between py-4">
        <p className="font-bold">Total</p>
        <p>25.99€</p>
      </div>
      <button className="bg-blue text-white w-full py-4 rounded-md text-[16px]">
        Terminer la commande
      </button>
    </div>
  );
};

export default CartOrderSummary;
