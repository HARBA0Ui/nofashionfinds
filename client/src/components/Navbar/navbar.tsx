import Logo from "../logo";
import styles from "./navbar.module.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useSidebar } from "@/context/sidebar-context";

const Navbar = () => {
  const { toggleSideBar } = useSidebar();
  return (
    <header className="mb-6 ">
      <nav className="container flex items-center justify-between w-full py-5">
        <Logo />
        <img src="/menu.png" className="w-12 h-12  text-zinc-950 cursor-pointer hover:scale-[115%] transition-all" onClick={toggleSideBar}/>
        <div
          className={`${styles.input} text-zinc-950 w-[270px] text-lg pb-1 `}
        >
          <input
            placeholder="search..."
            className="placeholder:text-zinc-950/65  text-zinc-950 w-full px-2"
          />
        </div>
      </nav>
      <div className="line w-[650px] mt-4 mx-auto"></div>
    </header>
    //   {
    //     toggle && <Sidebar toggleSideBar={toggleSideBar}/>
    //   }
  );
};

export default Navbar;
