import React from "react";
import TypesOfClothes from "@/components/type_of_clothes";
import Image from "next/image";
import banner from "../public/images/banner.png";
import men from "../public/images/men.png";
import women from "../public/images/women.png";

export default function HomePage() {
  return (
    <>
      <div className="mt-5">
        <Image src={banner} alt="" />
      </div>
      <div className="flex justify-between mt-10">
        <Image src={men} alt="" className="mr-10" />
        <Image src={women} alt="" />
      </div>
      <TypesOfClothes></TypesOfClothes>
    </>
  );
}
