import CartOrderSummary from "@/components/cart/CartOrderSummary";
import CartProductList from "@/components/cart/CartProductList";
import React from "react";

const Cart = () => {
  return (
    <div>
      <h2 className="text-center pt-8 text-2xl font-bold">Panier</h2>
      <div className="flex flex-col min-h-[80vh] py-[32px] px-[16px] md:px-8 md:items-center gap-4 lg:flex-row lg:items-start justify-center lg:gap-8 ">
        <CartProductList />
        <CartOrderSummary />
      </div>
    </div>
  );
};

export default Cart;
