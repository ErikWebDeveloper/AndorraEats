import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { SwiperSlide } from "swiper/react";

import { CarouselStatic } from "./SwiperCarousel";

export const CategoryCarousel = ({
  title,
  items,
  loading,
  CardComponent,
  carouselType,
  minWidth,
  minHeight,
  pathPrefix,
  isImage,
}) => {
  const { t } = useTranslation();
  const Carousel = carouselType === "static" ? CarouselStatic : CarouselStatic;

  return (
    <section className="container mb-5 pe-0">
      <h3 className="display-5 mb-3">{t(title)}</h3>
      <Carousel>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight, width: "100%" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          items.length > 0 &&
          items.map((item) => (
            <SwiperSlide key={item.name} style={{ minWidth, minHeight }}>
              <CardComponent
                item={item}
                pathPrefix={pathPrefix}
                isImage={isImage}
              />
            </SwiperSlide>
          ))
        )}
      </Carousel>
    </section>
  );
};

export const CategoryCard = ({ item, pathPrefix, isImage }) => {
  const navigate = useNavigate();

  return (
    <article
      className="card pointer text-center"
      onClick={() => navigate(`/explore/${pathPrefix}/${item.name}`)}
    >
      <div className="card-body align-items-center">
        {isImage ? (
          <img
            className="img-fluid"
            style={{ maxWidth: "60px" }}
            src={`${import.meta.env.VITE_ASSETS_COUNTRIES_URL}/${item.image}`}
            alt={item.name}
          />
        ) : (
          <p className="display-4">{item.image}</p>
        )}
      </div>
      <div className="card-footer">
        <p className="card-text fw-bold" style={{ fontSize: ".8rem" }}>
          {item.name}
        </p>
      </div>
    </article>
  );
};
