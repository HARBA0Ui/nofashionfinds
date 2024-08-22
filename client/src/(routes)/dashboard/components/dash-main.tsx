import DashProduct from "./dash-product";
import { Link } from "react-router-dom"
import { CgMathPlus, CgSearch } from "react-icons/cg";

const DashMain = () => {
  return (
    <>
      <h1 className="text-center text-6xl mb-10">Products</h1>
      <div className="flex justify-between items-center w-[90vw] lg:w-[700px] mx-auto">
        <Link
          to="/dashboard/create"
          className="bg-zinc-950 text-white flex gap-2 text-md items-center px-4 py-2 rounded-tr-md rounded-bl-md transition-all w-[150x] md:w-[250px]"
        >
          <CgMathPlus className="w-7 h-7 text-white rounded-full p-1" /> Create a new product
        </Link>
        <form >
          <div className="flex items-center bg-zinc-950 text-white gap-4 h-fit py-2 text-sm px-2 rounded-tl-md rounded-br-md">
            <input
              type="text"
              placeholder="Search..."
              // value={searchField}
              // onChange={(e) => setSearchField(e.target.value)}
              className="bg-transparent w-full placeholder:text-gray-300"
            />
            <button
              type="submit"
              className="cursor-pointer transition-all rounded-full flex justify-center items-center text-darkPruple  bg-zinc-900"
            >
              <CgSearch className="w-8 h-7 bg-white text-zinc-950 rounded-full p-1 pr-2 !m-0" />
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-y-6 py-12">
        <DashProduct />
        <DashProduct />
        <DashProduct />
        <DashProduct />
      </div>
    </>
  );
};

export default DashMain;
