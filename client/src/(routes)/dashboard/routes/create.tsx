import { HiMiniCursorArrowRays } from "react-icons/hi2";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { CgSpinnerTwo } from "react-icons/cg";

const CreateProduct = () => {
  return (
    <div className="flex flex-col w-full items-center min-h-[76vh]">
      <h1 className="text-5xl mb-6">Create a new product</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="title">Title</label>
              </td>
              <td className="py-2 mb-1 w-[550px]">
                <input
                  type="text"
                  className="border-2 h-16 w-full px-4 border-zinc-900 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900"
                  name="title"
                  // onChange={(e) => setTitle(e.target.value)}
                  // value={title}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="desc">Description</label>
              </td>
              <td className="py-2 mb-1 w-[550px]">
                <textarea
                  className="border-2 h-16 w-full px-4 border-zinc-900 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900"
                  id="desc"
                  name="desc"
                  // onChange={(e) => setDesc(e.target.value)}
                  // value={desc}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="price">Price</label>
              </td>
              <td className="py-2 pb-5 mb-1 w-[550px]">
                <input
                  className="border-2 h-16 w-full px-4 border-zinc-900 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900"
                  type="number"
                  id="price"
                  name="price"
                  // onChange={(e) => setPrice(parseFloat(e.target.value))}
                  // value={price}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="images">Images</label>
              </td>
              <td className="mb-1" id="fileTd">
                <input
                  type="file"
                  name="images"
                  id="images"
                  multiple
                  // onChange={(e) => setImages(e.target.files)}
                  required
                />
                <div id="fileOverlay" className="hover:bg-zinc-300 w-full">
                  Click To Upload Or Drop it here{" "}
                  <HiMiniCursorArrowRays className="w-9 h-9 mt-2" />
                  {/* {images.length == 0 ? (
                    <>
                      Click To Upload Or Drop it here{" "}
                      <HiMiniCursorArrowRays className="w-9 h-9 mt-2" />
                    </>
                  ) : (
                    <div className="flex items-center flex-col gap-2">
                      <span>Files uploaded successfully</span>
                      <AiFillCheckCircle className="w-10 h-10 text-pinky" />
                    </div>
                  )} */}
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex-1"></td>
              <td className="flex justify-center my-4 py-3">
                <button
                  type="submit"
                  id="btn"
                  className="bg-zinc-950 px-4 py-3 text-white w-full h-16 text-md font-bold uppercase hover:tracking-widest transition-all flex justify-center items-center gap-4"
                >
                  Add Product
                  {/* {isLoading && (
                    <CgSpinnerTwo className="w-6 h-6 animate-spin text-white" />
                  )} */}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CreateProduct;
