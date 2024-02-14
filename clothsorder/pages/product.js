import React from "react";
import { product_details } from "@/components/product_details";
import Image from "next/image";
import ColorsAvailable from "@/components/colors_availabe";
import SizesAvailable from "@/components/sizes_available";

export default function Product() {
  return (
    <div className="m-10">
      <h1 className="text-[#944E63] text-lg">{product_details.name}</h1>
      <div className="flex gap-10 pt-5">
        <div>
          <Image src={product_details.url} alt="" height={400} />
        </div>

        <div>
          <div>{product_details.rating}</div>

          <div className="text-lg">
            ${product_details.price - product_details.off}{" "}
            <strike className="text-[#B4B4B8]">${product_details.price}</strike>
          </div>

          <div className="text-[#42AF4D]">${product_details.off} OFF</div>

          <br />

          <ColorsAvailable></ColorsAvailable>
          <SizesAvailable></SizesAvailable>
        </div>
      </div>
    </div>
  );
}
