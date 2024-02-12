import React from "react";

export default function Bill() {
  return (
    <div className="border border-[#C7C8CC] rounded p-3">
      <div className="flex justify-between bg-[#FFE7E7] p-4 pt-2 pb-2 mb-4 text-[#944E63] rounded">
        <span className="text-sm">Apply Coupon</span>
        <button className="text-sm">Redeem</button>
      </div>

      <div className="p-4 text-sm border-t border-[#C7C8CC]">
        <h2 className="text-base mb-2">Price Details</h2>
        <div className="flex justify-between">
          <span>Price</span>
          <span>$9</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery fee</span>
          <span className="text-[#42AF4D]">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>-$4</span>
        </div>
        <div className="flex justify-between text-[#944E63]">
          <span>Total Price</span>
          <span>$5</span>
        </div>
        <div className="flex justify-between">
          <div></div>
          <button className="bg-[#B47B84] text-[#fff] p-1 pl-7 pr-7 rounded mt-5 object-left">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
