import React from "react";
import { product_details } from "./product_details";

export default function ColorsAvailable() {
  return (
    <>
      <h2 className="text-sm">Colors Available</h2>
      <div className="flex gap-2 mt-5">
        {product_details.colors.map((e, i) => {
          return (
            <button
              key={i}
              className={`bg-[${e}] w-10 h-10 border border-[#B4B4B8] rounded-full hover:h-15 hover:w-15`}
            ></button>
          );
        })}
      </div>
    </>
  );
}
