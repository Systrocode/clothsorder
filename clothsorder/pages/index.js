import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/header";
import Categories from "@/components/categories";
import banner from "../public/images/banner.png";
import men from "../public/images/men.png";
import women from "../public/images/women.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div>
        <Categories></Categories>
        <div className="mt-5">
          <Image src={banner} alt="" />
        </div>
        <div className="flex justify-between mt-10">
          <Image src={men} alt="" className="mr-10" />
          <Image src={women} alt="" />
        </div>
      </div>
    </main>
  );
}
