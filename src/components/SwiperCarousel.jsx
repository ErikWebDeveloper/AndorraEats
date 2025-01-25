// Import Swiper React components
import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import useBootstrapBreakpoint from "../hooks/useBootstrapBreakpoint";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

export const SwiperCarousel = ({ children }) => {
  const breakpoint = useBootstrapBreakpoint();
  const [slides, setSlides] = useState(1);

  useEffect(() => {
    let newSlidesPerView = ["xs", "sm"].includes(breakpoint) ? 1 : 3;
    newSlidesPerView = ["md"].includes(breakpoint) ? 2 : newSlidesPerView;
    setSlides(newSlidesPerView);
  }, [breakpoint]);

  return (
    <>
      <Swiper
        slidesPerView={slides}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-5"
      >
        {children}
      </Swiper>
    </>
  );
};

export const CarouselInfinite = ({ children }) => {
  const breakpoint = useBootstrapBreakpoint();
  const [slides, setSlides] = useState(1);

  useEffect(() => {
    let newSlidesPerView = ["xs", "sm"].includes(breakpoint) ? 2 : 5;
    newSlidesPerView = ["md"].includes(breakpoint) ? 3 : newSlidesPerView;
    setSlides(newSlidesPerView);
  }, [breakpoint]);

  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={20}
        freeMode={true}
        loop={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pb-5"
      >
        {children}
      </Swiper>
    </>
  );
};

export const CarouselStatic = ({ children }) => {
  const breakpoint = useBootstrapBreakpoint();
  const [slides, setSlides] = useState(1);

  useEffect(() => {
    let newSlidesPerView = ["xs", "sm"].includes(breakpoint) ? 2 : 4;
    newSlidesPerView = ["md"].includes(breakpoint) ? 3 : newSlidesPerView;
    setSlides(newSlidesPerView);
  }, [breakpoint]);

  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={20}
        freeMode={true}
        loop={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pb-5"
      >
        {children}
      </Swiper>
    </>
  );
};
