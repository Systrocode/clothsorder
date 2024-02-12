import React from "react";
import cart_items from "@/components/cart_items";
import CartCard from "@/components/cart_card";
import Bill from "@/components/bill";

export default function Cart() {
  return (
    <div className="m-20 mt-10">
      <h1 className="text-[#944E63]">
        Cart{" "}
        <strong>
          {cart_items.length} {cart_items.length > 1 ? "items" : "item"}
        </strong>
      </h1>

      {/* <CartCard element={cart_items[0]}></CartCard> */}

      <div className="flex justify-between">
        <div className="w-1/2">
          {cart_items.map((e, i) => {
            return <CartCard element={e} key={i} />;
          })}
        </div>
        <div className="w-1/2 p-10">
          <Bill></Bill>
        </div>
      </div>
    </div>
  );
}
