import { Link } from "react-router-dom";
import { X } from "lucide-react";

import styles from "./sidebar.module.css";
import {  useSidebar } from "@/context/sidebar-context";

const Sidebar = () => {
  const { toggleSideBar, toggle } = useSidebar();
  console.log("toggle: ", toggle)

  return (
    <div
      className={`${styles.div} fixed inset-0 z-30 bg-zinc-950/50 transition-all 
       ${
        !toggle && "hidden"
       }
      `}
    >
      <ul
        className={`${styles.ul} relative bg-white h-full  text-xl space-y-5 transition-all flex flex-col justify-center items-center md:pl-[35%] lg:pl-[40%] xl:lg:pl-[45%]`}
      >
        <div onClick={toggleSideBar}>
          <X className="w-12 h-12 absolute top-12 right-12 text-zinc-950 cursor-pointer hover:rotate-90 duration-500 transition-all" />
        </div>
        <li className="text-5xl text-zinc-950 hover:tracking-wider transition-all">
          <Link to={"/products/all"} className="kaush" 
            onClick={toggleSideBar}
          >All Products</Link>
        </li>
        <li className="text-5xl text-zinc-950 hover:tracking-wider transition-all">
          <Link to={"/products/bags"} className="kaush" 
            onClick={toggleSideBar}
          >Bags</Link>
        </li>
        <li className="text-5xl text-zinc-950 hover:tracking-wider transition-all">
          <Link to={"/products/accessoires"} className="kaush" 
            onClick={toggleSideBar}
          >Accessories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
