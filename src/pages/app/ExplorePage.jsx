// Hooks
import { useTranslation } from "react-i18next";
import { useStaticData } from "../../context/StaticDataContext";

// Components
import { SwiperSlide } from "swiper/react";
import { CarouselAutoplay } from "../../components/Carousel/SwiperCarousel";
import {
  CategoryCarousel,
  CategoryCard,
} from "../../components/Carousel/CategoryCarousel";

import RestaurantCardSingle from "../../components/RestaurantCardSingle";
import { RestaurantCardSinglePlaceHolder } from "../../components/RestaurantCardSingle";

const ExplorePage = () => {
  return (
    <main id="explore-page">
      <Hero />
      <Product />
      <Flavours />
      <Drinks />
      <Bakeries />
      <Countries />
      <Popular />
    </main>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const { sponsors, loading } = useStaticData();
  return (
    <>
      <section className="explore-header mb-4 py-4" role="banner">
        <div
          className="container"
          aria-label={t("pages.home.hero")}
          aria-labelledby="banner-title"
        >
          <h2
            id="banner-title"
            className="text-center pb-3 display-4"
            style={{
              color: "var(--primary-color-brown",
              fontFamily: "gagalin-regular",
              lineHeight: "1",
            }}
          >
            {t("pages.home.hero")}
          </h2>
          <CarouselAutoplay>
            {loading ? (
              <>
                {Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <RestaurantCardSinglePlaceHolder />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <>
                {sponsors.map((restaurant) => (
                  <SwiperSlide key={restaurant.id}>
                    <RestaurantCardSingle
                      restaurant={restaurant}
                      cssClass="border-0"
                      location={"/"}
                    />
                  </SwiperSlide>
                ))}
              </>
            )}
          </CarouselAutoplay>
        </div>
      </section>
    </>
  );
};

const Product = () => {
  const { subTypes, loading } = useStaticData();
  const products = subTypes?.product || [];
  return (
    <CategoryCarousel
      title="pages.home.eat"
      items={products}
      loading={loading}
      CardComponent={CategoryCard}
      carouselType="static"
      minWidth="8rem"
      minHeight="10rem"
      pathPrefix="type"
      isImage={false}
    />
  );
};

const Flavours = () => {
  const { subTypes, loading } = useStaticData();
  const flavours = subTypes?.flavours || [];

  return (
    <CategoryCarousel
      title="pages.home.flavours"
      items={flavours}
      loading={loading}
      CardComponent={CategoryCard}
      carouselType="static"
      minWidth="8rem"
      minHeight="10rem"
      pathPrefix="type"
      isImage={false}
    />
  );
};

const Drinks = () => {
  const { subTypes, loading } = useStaticData();
  const drinks = subTypes?.drinks || [];

  return (
    <CategoryCarousel
      title="pages.home.drinks"
      items={drinks}
      loading={loading}
      CardComponent={CategoryCard}
      carouselType="static"
      minWidth="8rem"
      minHeight="10rem"
      pathPrefix="type"
      isImage={false}
    />
  );
};

const Bakeries = () => {
  const { subTypes, loading } = useStaticData();
  const bakeries = subTypes?.bakery || [];

  return (
    <CategoryCarousel
      title="pages.home.bakery"
      items={bakeries}
      loading={loading}
      CardComponent={CategoryCard}
      carouselType="static"
      minWidth="8rem"
      minHeight="10rem"
      pathPrefix="type"
      isImage={false}
    />
  );
};

const Countries = () => {
  const { countries, loading } = useStaticData();
  return (
    <CategoryCarousel
      title="pages.home.location"
      items={countries}
      loading={loading}
      CardComponent={CategoryCard}
      carouselType="static"
      minWidth="10rem"
      minHeight="10rem"
      pathPrefix="country"
      isImage={true}
    />
  );
};

const Popular = () => {
  const { t } = useTranslation();

  const { populars, loading } = useStaticData();
  return (
    <>
      <section className="container mb-5">
        <h3 className="display-5 mb-3">
          <span style={{ color: "var(--primary-color" }}>★ </span>
          {t("pages.home.top")}
        </h3>

        <div className="row g-3">
          {!loading ? (
            <>
              {populars.length > 0 && (
                <>
                  {populars.map((restaurant = []) => (
                    <div
                      key={restaurant.id}
                      className="col-12 col-md-6 col-lg-4 col-xl-3"
                    >
                      <RestaurantCardSingle
                        restaurant={restaurant}
                        location={"/"}
                      />
                    </div>
                  ))}
                </>
              )}
            </>
          ) : (
            <p>Cargando ...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ExplorePage;
