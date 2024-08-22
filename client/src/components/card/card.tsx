import { Link } from "react-router-dom";

interface CardProps {
  imgSrc: string;
}

const Card = ({ imgSrc }: CardProps) => {
  return (
    <div className="flex flex-col w-[100%] cursor-pointer h-full">
      <Link to={"/product/productID"} className="h-full w-full">
        <img
          src={imgSrc}
          className={`imgShadow w-full h-full object-cover border border-zinc-950/70 !flex-1 hover:brightness-75 transition-all`}
        />
      </Link>
      <div className="text-center pt-2">
        <h2 className="text-sm md:text-md md:-mb-2 leading-3 md:leading-normal">
          Product Name
        </h2>
        <span className="font-bold text-xs md:text-sm">75 TND</span>
      </div>
    </div>
  );
};

export default Card;
