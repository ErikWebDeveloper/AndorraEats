// Import Swiper React components
import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import useBootstrapBreakpoint from "../hooks/useBootstrapBreakpoint";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, FreeMode, Navigation } from "swiper/modules";

export const SwiperCarousel = ({ children }) => {
  const breakpoint = useBootstrapBreakpoint();
  const [slides, setSlides] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    let newSlidesPerView = ["xs", "sm"].includes(breakpoint) ? 1 : 3;
    newSlidesPerView = ["md"].includes(breakpoint) ? 2 : newSlidesPerView;
    setSlides(newSlidesPerView);
    setLoad(true);
  }, [breakpoint]);

  if (!load) return <p>Cargando...</p>;

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
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    let newSlidesPerView = ["xs", "sm"].includes(breakpoint) ? 4 : 10;
    newSlidesPerView = ["md"].includes(breakpoint) ? 6 : newSlidesPerView;
    setSlides(newSlidesPerView);
    setLoad(true);
  }, [breakpoint]);

  if (!load) return <p>Cargando...</p>;

  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={20}
        freeMode={true}
        loop={true}
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
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    let newSlidesPerView = ["xs", "sm"].includes(breakpoint) ? 2 : 5;
    newSlidesPerView = ["md"].includes(breakpoint) ? 4 : newSlidesPerView;
    setSlides(newSlidesPerView);
    setLoad(true);
  }, [breakpoint]);

  if (!load) return <p>Cargando...</p>;

  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={20}
        freeMode={true}
        loop={true}
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
