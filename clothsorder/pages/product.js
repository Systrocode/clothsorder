import React from "react";
import { product_details } from "@/components/product_details";
import Image from "next/image";
import ColorsAvailable from "@/components/colors_availabe";
import SizesAvailable from "@/components/sizes_available";
import Rating from "@/components/rating";
import { comments } from "@/components/comments";
import StarRating from "@/components/starRating";

export default function Product() {
  return (
    <div className="m-10">
      <h1 className="text-[#944E63] text-lg">{product_details.name}</h1>
      <div className="flex gap-20 pt-5">
        <div>
          <Image src={product_details.url} alt="" height={400} />
        </div>

        <div>
          <div className="flex gap-1">
            <span> {product_details.rating}</span>
            <Rating
              color={"#FDF0D1"}
              size={20}
              rating={product_details.rating}
              maxRating={5}
            />
          </div>

          <div className="text-lg">
            ${product_details.price - product_details.off}{" "}
            <strike className="text-[#B4B4B8]">${product_details.price}</strike>
          </div>

          <div className="text-[#42AF4D]">${product_details.off} OFF</div>

          <br />

          <ColorsAvailable></ColorsAvailable>
          <SizesAvailable></SizesAvailable>

          <div className="text-xs mt-5 wrap">
            <span className="font-medium">Measurement: </span> Chest{" "}
            {product_details.chest} inches, Front {product_details.front}{" "}
            inches, Sleeves {product_details.sleeves} inches
          </div>

          <div className="mt-10 font-light flex gap-5">
            <button className="bg-[#944E63] text-[#fff] p-2 w-40 rounded hover:bg-[#fff] hover:text-[#944E63] hover:outline hover:outline-1 hover:outline-[#944E63]">
              ADD TO BAG
            </button>
            <button className="border border-[#333] p-2 w-40 rounded hover:bg-[#333] hover:text-[#fff]">
              WISHLIST
            </button>
          </div>

          <div className="border border-[#C7C8CC] p-4 mt-10 rounded">
            <div className="font-light flex gap-3 border-b border-[#C7C8CC] pb-3">
              <button className="border border-[#944E63] text-[#944E63] text-xs p-2 w-20 rounded hover:bg-[#944E63] hover:text-[#fff] focus:bg-[#944E63] focus:text-[#fff]">
                Most Recent
              </button>
              <button className="border border-[#944E63] text-[#944E63] text-xs p-2 w-20 rounded hover:bg-[#944E63] hover:text-[#fff] focus:bg-[#944E63] focus:text-[#fff]">
                Most Liked
              </button>
            </div>
            <div>
              {comments.map((e, i) => {
                return (
                  <div key={i} className="mt-1 pb-6 border-b border-[#C7C8CC]">
                    <span className="text-xs text-[#B4B4B8]">
                      {e.name} {e.date}
                    </span>
                    <Rating
                      color={"#FDF0D1"}
                      size={20}
                      rating={e.rating}
                      maxRating={5}
                    />
                    <div className="text-sm mt-2">{e.comment}</div>
                  </div>
                );
              })}
            </div>
            <button className="border border-[#944E63] text-[#944E63] text-xs font-light p-2 w-20 mt-5 rounded hover:bg-[#944E63] hover:text-[#fff]">
              View All
            </button>
          </div>
        </div>
        {/* <StarRating /> */}
      </div>
    </div>
  );
}
