// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"; // Import Swiper autoplay styles (if needed)
import { SwiperNavButtons } from "../SwiperNavButton/SwiperNavButton";

import styles from "./carousel.module.css";

const Carousel = () => {
  return (
    <section className="pt-12 pl-12 pb-6 bg-gray-50 relative">
      <h1 className="text-4xl mb-3">Out Latest Products</h1>
      <Swiper
        className="flex flex-col pt-14 pb-12 !static"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={14}
        slidesPerView={5.5}
        navigation
        autoplay={{
          delay: 2000, // 3 seconds delay between slides
          disableOnInteraction: false, // Continue autoplay even after user interactions
        }}
        speed={600}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="absolute top-16 right-16">
          <SwiperNavButtons />
        </div>
        <div>
          <SwiperSlide>
            <img
              src="/p1.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/p2.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/p3.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/p4.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/p5.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/p6.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/p7.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/p8.jpg"
              className={`${styles.img} w-[350px] h-[400px] object-cover border border-zinc-950/70`}
            />
            <div className="text-center pt-2">
              <h2 className="text-md -mb-2">Product Name</h2>
              <span className="font-bold text-sm">75 TND</span>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};

export default Carousel;
