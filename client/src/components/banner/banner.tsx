import Logo from "../logo";
import TypingAnimation from "../magicui/typing-animation";
import styles from "./banner.module.css";
import { CgMenuRightAlt } from "react-icons/cg";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {  useSidebar } from "@/context/sidebar-context";

const Banner = () => {
  const { toggleSideBar, toggle } = useSidebar();
  return (
    <div className="relative max-h-screen flex">
      <header className="absolute top-0 left-1/2 -translate-x-1/2 py-4 z-10 w-[90%] lg:w-[80%] max-w-[1700px]">
        <nav className="flex items-center justify-between w-full py-2">
          <Logo bg="black" />
          <div className="flex items-center gap-x-5">
            <div
              className={`${styles.input} text-white/95 w-[270px] text-lg pb-1 `}
            >
              <input
                placeholder="search..."
                className="placeholder:text-white/75 text-white w-full px-2"
              />
            </div>
            <CgMenuRightAlt
              className="w-9 h-9 text-white cursor-pointer hover:scale-[115%] transition-all"
              onClick={toggleSideBar}
            />
          </div>
        </nav>
      </header>
      <Link to={"/products/bags"} className={`${styles.imgWrapper} h-screen w-screen cursor-pointer`}>
          <img src="/p10.jpg" className={`${styles.img} brightness-50`} />
          <h1 className="absolute z-[4] left-1/2 top-1/2 text-7xl text-white -translate-x-1/2 -translate-y-1/2">
            <TypingAnimation text="bags" duration={100} />
          </h1>
      </Link>
      <Link to={"products/accessories"} className={`${styles.imgWrapper} h-screen w-screen cursor-pointer`}>
        <img src="/p12.jpg" className={`${styles.img} brightness-50`} />
        <h1 className="absolute z-[4] left-1/2 top-1/2 text-7xl text-white -translate-x-1/2 -translate-y-1/2">
          <TypingAnimation text="Accessories" duration={100} />
        </h1>
      </Link>
    </div>
  );
};

export default Banner;
