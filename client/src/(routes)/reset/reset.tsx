import { FaUser } from "react-icons/fa6";

const Reset = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] gap-5 ">
      <div className="bg-zinc-950 rounded-[.3rem] w-[480px] min-h-[350px] flex flex-col gap-3 justify-center items-center drop-shadow-lg text-white -mt-4">
        <h1 className="font-bold text-3xl text-center uppercase tracking-wide mb-2">
          Forgot Password?
        </h1>
        <form
          action=""
          //   onSubmit={handleSubmit}
          className=" flex flex-col gap-4 py-2 w-full"
        >
          <div className="relative w-4/5 pl-10 pr-3 mx-auto border-b border-pinky">
            <input
              type="email"
              placeholder="Enter the admin email..."
              name="username"
              required
              className="h-14 bg-transparent w-full placeholder:text-white/85"
            />
            <div className="absolute left-3 top-1/2 translate-y-[-50%] ">
              <FaUser className="text-pinky" />
            </div>
          </div>

          <div className="mx-auto w-4/5">
            <button
              //   disabled={isLoading}
              type="submit"
              id="loginbtn"
              className={`w-full h-14 bg-white text-zinc-950 hover:bg-white/90 transition-all mt-6 text-xl relative rounded-[.2rem]`}
              //   className={`
              //     ${isLoading && "[border-radius: 5rem]"}
              //     w-full h-14 text-white mt-6  bg-pinky hover:bg-pinky/95 text-xl relative
              //     `}
            >
              Submit
              {/* {isLoading && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <CgSpinnerTwo className="w-6 h-6 animate-spin" />
                    </div>
                  )} */}
            </button>
          </div>
          {/* {error != "" && (
                <p className="bg-red-600 text-white text-md py-2 w-4/5 mx-auto text-center mt-4 ">
                  {error}
                </p>
              )} */}
        </form>
      </div>
    </div>
  );
};

export default Reset;
