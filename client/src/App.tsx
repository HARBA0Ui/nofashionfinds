import Banner from "./components/banner/banner";
import Carousel from "./components/carousel/carousel";
import { BsFillSendFill } from "react-icons/bs";

function App() {
  return (
    <>
      <Banner />
      <Carousel />

      <div className="flex flex-col py-16">
        <div className="w-[70%] m-auto flex items-center gap-x-12">
          <img
            src="/p3.jpg"
            className="max-w-[400px] border-2 border-zinc-950"
          />
          <form action="#" className="flex flex-col space-y-4 flex-1">
            <h1 className="text-center text-5xl">Contact</h1>
            <input
              type="text"
              required
              className="border-2 border-zinc-900 h-14 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900"
              placeholder="Enter Your Name..."
            />
            <input
              type="email"
              required
              className="border-2 border-zinc-900 h-14 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900"
              placeholder="Enter Your Email..."
            />
            <textarea
              required
              name=""
              cols={30}
              rows={10}
              minLength={10}
              className="border-2 border-zinc-900 rounded-[.5rem] p-4 mr-10 placeholder:text-zinc-700 text-zinc-900 h-[200px]"
              placeholder="Enter Your Message..."
            ></textarea>
            <button
              type="submit"
              className="border-2 border-zinc-900 h-14 rounded-[.5rem] pl-4 mr-10 hover:bg-zinc-900 hover:text-white transition-all flex items-center justify-center gap-x-2"
            >
              Send <BsFillSendFill className="w-4 h-4" />{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
