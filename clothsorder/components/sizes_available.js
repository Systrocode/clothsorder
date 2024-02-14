import React from "react";
import { product_details } from "./product_details";

export default function SizesAvailable() {
  return (
    <div className="mt-10">
      <h2 className="text-sm">Sizes Available</h2>
      <div className="flex gap-3 mt-5">
        {product_details.sizes.map((e, i) => {
          return (
            <button
              key={i}
              className={`w-10 h-10 text-[#333] text-sm border border-[#333] rounded hover:bg-[#333] hover:text-[#fff] focus:bg-[#333] focus:text-[#fff]`}
            >
              {e}
            </button>
          );
        })}
      </div>
    </div>
  );
}
