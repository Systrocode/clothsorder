import React from "react";
import Image from "next/image";
export default function CartCard({ element }) {
  return (
    <div className="flex w-fit border border-[#B4B4B8] rounded mt-7">
      <div className="flex flex-col justify-between">
        <div className="pl-5 pt-3 pr-20 mr-20">
          <h2 className="font-normal">{element.name}</h2>
          <b>${element.price - element.off}</b>{" "}
          <strike className="text-[#B4B4B8] text-sm">${element.price}</strike>
          <br />
          <span className="text-[#42AF4D] text-sm">Save ${element.off}</span>
          <br />
          <div className="flex gap-5">
            <span className="border border-[#B4B4B8] rounded p-1.5 pl-4 pr-4 text-xs block mt-2">
              Size : {element.size}
            </span>
            <span className="border border-[#B4B4B8] rounded p-1.5 pl-4 pr-4 text-xs block mt-2">
              Qty : {element.quantity}
            </span>
          </div>
        </div>

        <div className="flex h-7">
          <button className="text-xs basis-1/3 bg-[#B47B84] text-[#fff]">
            Remove
          </button>
          <button className="text-xs basis-2/3 border border-[#B4B4B8]">
            Add To Wishlist
          </button>
        </div>
      </div>
      <div>
        <Image
          src={element.url.img}
          height={170}
          alt=""
          className="rounded-r"
        />
      </div>
    </div>
  );
}
