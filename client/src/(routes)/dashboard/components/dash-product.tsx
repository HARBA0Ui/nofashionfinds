import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const DashProduct = () => {
  return (
    <div className="mx-auto !rounded-[.5rem] bg-white shadow-md py-4 text-center text-lg flex justify-between items-center w-[750px] border border-zinc-700">
      <div id="image" className=" w-1/4 overflow-hidden flex justify-center">
        <img src={"/p3.jpg"} className="w-20 h-24" />
      </div>
      <div className="w-1/4">title</div>
      <div className="w-1/4">price</div>
      <div className="flex gap-4 w-1/4 justify-center">
        <Link
          to={""}
          className=" p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105"
        >
          <AiFillEdit className="h-6 w-6 pointer-events-none" />
        </Link>
        <Link
          to={"/"}
          className=" p-2 rounded-full bg-pinky hover:bg-darkPruple transition-all hover:scale-105"
        >
          <AiFillDelete className="h-6 w-6 pointer-events-none" />
        </Link>
      </div>
    </div>
  );
};

export default DashProduct;
