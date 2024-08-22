import Card from "@/components/card/card";
// import { useParams } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";

const ProductPage = () => {
  // const params = useParams();

  const cityOptions = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kasserine",
    "Kef",
    "Mahdia",
    "Manouba",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Sousse",
    "Siliana",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
    "Medenine",
    "Kebili",
    "Kairouan",
  ];
  return (
    <div className="min-h-[70vh]">
      <div className="container h-full py-12 m-auto flex items-center gap-x-12">
        <img src="/p3.jpg" className="max-w-[450px]" />
        <div className="w-full">
          <article className="text-zinc-900 space-y-1">
            <h2 className="text-5xl capitalize font-semibold ">Product Name</h2>
            <h2 className="font-bold text-3xl text-zinc-950">70.99 TND</h2>
            <h3>
              <span className="font-semibold">Category: </span>Bags
            </h3>
            <p className="text-justify">
              <span className="font-semibold">Description: </span>
              Elevate your style with this versatile bag, designed for both
              function and fashion. Crafted from high-quality materials, it
              offers ample storage space while maintaining a sleek and modern
              silhouette.
            </p>
          </article>
          <div className="line w-full mx-auto my-4" />
          <p className="text-md mb-2">
            To place an order, please complete these fields:{" "}
          </p>
          <form action="#" className="flex w-full flex-col space-y-4 flex-1">
            <input
              type="text"
              required
              className="border-2 border-zinc-900 h-12 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900 placeholder:text-sm"
              placeholder="Enter Your Name..."
            />
            <input
              type="email"
              required
              className="border-2 border-zinc-900 h-12 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900 placeholder:text-sm"
              placeholder="Your phone number..."
            />
            <input
              type="text"
              required
              className="border-2 border-zinc-900 h-12 rounded-[.5rem] pl-4 mr-10 placeholder:text-zinc-700 text-zinc-900 placeholder:text-sm"
              placeholder="Your Adresse..."
            />

            <select
              required
              className="border-2 border-zinc-900 h-12 rounded-[.5rem] px-3 mr-10 placeholder:text-zinc-700 text-zinc-900 placeholder:text-sm"
              aria-label="city"
            >
              <option value="" disabled selected>
                Enter your city
              </option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-zinc-900 hover:bg-zinc-950 text-white h-14 rounded-[.5rem] pl-4 mr-10 transition-all flex items-center justify-center gap-x-2"
            >
              Send <BsFillSendFill className="w-4 h-4" />{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="line w-[650px] mx-auto mt-6"></div>
      <h1 className="text-center text-5xl my-10">Other Products</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 px-24 pb-12 justify-items-center justify-center">
        <Card imgSrc={"/p11.jpg"} />
        <Card imgSrc={"/p12.jpg"} />
        <Card imgSrc={"/p13.jpg"} />
        <Card imgSrc={"/p14.jpg"} />
      </div>
    </div>
  );
};

export default ProductPage;
