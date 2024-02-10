import React from "react";
import types from "./types_data";
import Image from "next/image";
export default function TypesOfClothes() {
  return (
    <div className="flex flex-wrap mt-20 ml-5 mr-5">
      {types.map((el, i) => (
        <div key={i} className="basis-1/5 mb-5 p-1">
          <Image src={el.img.url} height={150} alt="" />
          <h2 className="text-center">{el.name}</h2>
        </div>
      ))}
    </div>
  );
}
