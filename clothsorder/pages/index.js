import { Inter } from "next/font/google";
import NavBar from "@/components/header";
import Categories from "@/components/categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home_page";
import Cart from "./cart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div>
        <Categories></Categories>
        <Cart></Cart>
        {/* <HomePage></HomePage> */}

        {/* <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}
      </div>
    </main>
  );
}
