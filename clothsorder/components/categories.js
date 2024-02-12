import React from "react";
import categories from "./categories_data";

export default function Categories() {
  return (
    <div className="border-b border-[#D9D9D9] pb-2 pt-8 pl-8">
      <ul className="flex text-[#944E63]">
        {/* <li className="mr-5">Men</li>
        <li className="mr-5">Women</li>
        <li className="mr-5">Children</li>
        <li>Dolls</li> */}
        {categories?.map(
          (el, i) => (
            <li key={i} className="mr-5">
              {el.name}
            </li>
          )
          // console.log(el.name)
        )}
      </ul>
    </div>
  );
}
