import { AiFillSetting, AiFillSwitcher, AiOutlineLogout } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";

import { Link } from "react-router-dom";

const DashSidebar = () => {
  return (
    <aside className="w-32 bg-zinc-950 text-zinc-950 flex flex-col  gap-4 pt-12 text-pinky text-sm  border-r border-r-zinc-500">
      <ul className="flex flex-col gap-4 flex-1">
        <Link
          to={"/dashboard"}
          className="flex gap-2 bg-white w-full items-center px-2 py-3 hover:bg-zinc-800 hover:text-white transition-all"
        >
          <AiFillSwitcher className="w-6 h-6" /> <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/create"
          className="flex gap-2 bg-white w-full items-center px-2 py-3 hover:bg-zinc-800 hover:text-white transition-all"
        >
          <CgMathPlus className="w-6 h-6" /> <span>Create</span>
        </Link>
        <Link
          to={"/dashboard/settings"}
          className="flex gap-2 bg-white w-full items-center px-2 py-3 hover:bg-zinc-800 hover:text-white transition-all"
        >
          <AiFillSetting className="w-6 h-6" /> <span>Settings</span>
        </Link>
      </ul>
      <button className="flex gap-2 bg-white  items-center px-2 py-3 hover:bg-zinc-800 hover:text-white transition-all sticky bottom-0 w-full">
        <AiOutlineLogout className="w-6 h-6" /> <span>Logout</span>
      </button>
    </aside>
  );
};

export default DashSidebar;
