import Card from "@/components/card/card";
import { useParams } from "react-router-dom";

const Products = () => {
  const params= useParams()
  return (
    <section className="flex flex-col items-center">
      <h1 className="capitalize text-center text-5xl mt-7">{params.genre} (16)</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 px-8 py-12 justify-items-center justify-center">
        <Card imgSrc={"/p1.jpg"} />
        <Card imgSrc={"/p2.jpg"} />
        <Card imgSrc={"/p3.jpg"} />
        <Card imgSrc={"/p4.jpg"} />
        <Card imgSrc={"/p5.jpg"} />
        <Card imgSrc={"/p6.jpg"} />
        <Card imgSrc={"/p7.jpg"} />
        <Card imgSrc={"/p8.jpg"} />
        <Card imgSrc={"/p9.jpg"} />
        <Card imgSrc={"/p10.jpg"} />
        <Card imgSrc={"/p4.jpg"} />
        <Card imgSrc={"/p1.jpg"} />
        <Card imgSrc={"/p5.jpg"} />
        <Card imgSrc={"/p3.jpg"} />
        <Card imgSrc={"/p2.jpg"} />
      </div>
      {/* hedhom yodhahrou ken k les produits lkol deja wfew */}
      <div className="line w-[650px]"></div>
      <h1 className="text-center text-5xl my-10">Latest Products</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 px-24 pb-12 justify-items-center justify-center">
        <Card imgSrc={"/p11.jpg"} />
        <Card imgSrc={"/p12.jpg"} />
        <Card imgSrc={"/p13.jpg"} />
        <Card imgSrc={"/p14.jpg"} />
      </div>
    </section>
  );
};

export default Products;
