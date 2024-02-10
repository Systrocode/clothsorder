import React from "react";
import userIcon from "../public/images/user.png";
import cartIcon from "../public/images/cart.png";
import Image from "next/image";
export default function Header() {
  return (
    <div className="shadow-md pb-2">
      <div> </div>
      <div className="flex flex-row-reverse mr-5 mt-3">
        <Image src={cartIcon} width={25} alt="" className="m-3" />
        <div className="flex items-center mr-4">
          <Image src={userIcon} width={25} alt="" className="m-2" />
          <h2 className="text-[#B47B84] hidden sm:block">John Doe</h2>
        </div>
        <input
          placeholder="Search..."
          className="border-2 border-[#B47B84] rounded m-2 p-1 pl-1 mr-5 w-1/4 text-[#B47B84] focus:outline-[#B47B84]"
        />
      </div>
    </div>
  );
}
