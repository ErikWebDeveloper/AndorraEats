import { useNavigate } from "react-router";
import { SwiperSlide } from "swiper/react";
// Hooks
import { useTranslation } from "react-i18next";
import { useStaticData } from "../context/StaticDataContext";
// Components
import {
  SwiperCarousel,
  CarouselInfinite,
  CarouselStatic,
} from "../components/SwiperCarousel";
import RestaurantCardSingle from "../components/RestaurantCardSingle";
import { RestaurantCardSinglePlaceHolder } from "../components/RestaurantCardSingle";

const ExplorePage = () => {
  return (
    <>
      <Hero />
      <Types />
      <Countries />
      <Popular />
    </>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const { sponsors, loading } = useStaticData();
  return (
    <>
      <header className="explore-header mb-4 py-4">
        <section className="container">
          <h3
            className="text-center pb-3"
            style={{
              color: "var(--primary-color-brown",
              fontFamily: "gagalin-regular",
              lineHeight: "1",
            }}
          >
            {t('pages.home.hero')}
          </h3>
          <SwiperCarousel>
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
                    />
                  </SwiperSlide>
                ))}
              </>
            )}
          </SwiperCarousel>
        </section>
      </header>
    </>
  );
};

const Types = () => {
  const { t } = useTranslation();
  const { types, loading } = useStaticData();
  return (
    <>
      <section className="container mb-5 pe-0">
        <h3 className="display-5 mb-3">{t("pages.home.eat")}</h3>
        <CarouselInfinite>
          {!loading ? (
            <>
              {types.length > 0 &&
                types.map((type) => (
                  <SwiperSlide
                    className="mb-3"
                    key={type.name}
                    style={{ minWidth: "8rem" }}
                  >
                    <TypeCard type={type} />
                  </SwiperSlide>
                ))}
            </>
          ) : (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide
                  className="mb-3"
                  key={`types-${index}`}
                  style={{ minWidth: "8rem" }}
                >
                  <TypeCardPlaceHolder />
                </SwiperSlide>
              ))}
            </>
          )}
        </CarouselInfinite>
      </section>
    </>
  );
};

const TypeCard = ({ type }) => {
  const navigate = useNavigate();

  return (
    <>
      <article
        className="card pointer text-center"
        style={{ backgroundColor: "var(--primary-color-soft)" }}
        onClick={() => {
          navigate(`/explore/type/${type.name}`);
        }}
      >
        <div className="card-body">
          <p className="display-4">{type.image}</p>
        </div>
        <div className="card-footer">
          <p className="card-text fw-bold" style={{ fontSize: ".8rem" }}>
            {type.name}
          </p>
        </div>
      </article>
    </>
  );
};

const TypeCardPlaceHolder = () => {
  return (
    <>
      <article className="card text-center" aria-hidden="true">
        <div className="card-body">
          <p className="card-title  placeholder-glow">
            <span className="placeholder col-2"></span>
          </p>
        </div>
        <div className="card-footer">
          <p className="card-text placeholder-glow">
            <span className="placeholder col-6"></span>
          </p>
        </div>
      </article>
    </>
  );
};

const Countries = () => {
  const { t } = useTranslation();

  const { countries, loading } = useStaticData();
  return (
    <>
      <section className="container mb-5 pe-0">
        <h3 className="display-5 mb-3">{t("pages.home.location")}</h3>
        <CarouselStatic>
          {!loading ? (
            <>
              {countries.length > 0 &&
                countries.map((country) => (
                  <SwiperSlide
                    className="mb-3"
                    key={country.name}
                    style={{ minWidth: "10rem", minHeight: "10rem" }}
                  >
                    <CountriesCard country={country} />
                  </SwiperSlide>
                ))}
            </>
          ) : (
            <>
              {Array.from({ length: 7 }).map((_, index) => (
                <SwiperSlide
                  className="mb-3"
                  key={`countries-${index}`}
                  style={{ minWidth: "10rem", minHeight: "10rem" }}
                >
                  <CountriesCardPlaceholder />
                </SwiperSlide>
              ))}
            </>
          )}
        </CarouselStatic>
      </section>
    </>
  );
};

const CountriesCard = ({ country }) => {
  const navigate = useNavigate();

  return (
    <>
      <article
        className="card text-center pointer"
        onClick={() => {
          navigate(`/explore/country/${country.name}`);
        }}
      >
        <div className="card-body align-items-center">
          <img
            className="img-fluid"
            style={{ maxWidth: "60px" }}
            src={`${import.meta.env.VITE_ASSETS_COUNTRIES_URL}/${
              country.image
            }`}
            alt={country.name}
          />
        </div>
        <div className="card-footer">
          <p className="card-text fw-bold" style={{ fontSize: ".8rem" }}>
            {country.name}
          </p>
        </div>
      </article>
    </>
  );
};

const CountriesCardPlaceholder = () => {
  return (
    <>
      <article className="card text-center" aria-hidden="true">
        <div className="card-body" style={{ minHeight: "5.5rem" }}></div>
        <div className="card-footer">
          <p className="card-text placeholder-glow">
            <span className="placeholder col-6"></span>
          </p>
        </div>
      </article>
    </>
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
          {t('pages.home.top')}
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
                      <RestaurantCardSingle restaurant={restaurant} />
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
