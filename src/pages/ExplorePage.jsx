import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SwiperSlide } from "swiper/react";

// Const
const IMAGE_URL = "/assets";

// Hooks
import { useStaticData } from "../context/StaticDataContext";
// Components
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import {
  SwiperCarousel,
  CarouselInfinite,
  CarouselStatic,
} from "../components/SwiperCarousel";
import RestaurantCardSingle from "../components/RestaurantCardSingle";

const ExplorePage = () => {
  const navigate = useNavigate();
  const [populars, setPopulars] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  const [loading, setLoading] = useState(true);
  const { countries, loading: loadingStaticData, types } = useStaticData(); // Hook para datos estáticos
  const [error, setError] = useState(false);

  const searchType = async (type) => {
    navigate(`/explore/${type}`);
  };

  const fetchSponsors = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_SPONSORS}`);
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();
      setSponsors(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const fetchPopulars = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_POPULARS}`);
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();
      setPopulars(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  // Carga inicial
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetchSponsors();
        await fetchPopulars();
      } catch (error) {
        console.error("Error durante la carga inicial:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || loadingStaticData) {
    return <p>Cargando restaurante...</p>;
  }

  if (error) {
    return <p>No se ha encntrado el contenido...</p>;
  }

  return (
    <>
      <Header restaurants={sponsors} />
      <Types types={types} handleOnClick={searchType} />
      <Countries countries={countries} />
      <Popular restaurants={populars} />
      <Footer />
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav
        className="container d-flex py-3 align-items-center"
        //style={{ position: "sticky", top: "0px", backgroundColor: "orange" }}
      >
        <div className="flex-fill">
          <Logo />
        </div>
        <div>
          <button
            className="btn btn-light shadow-lg"
            style={{ aspectRatio: "1" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgb(96, 49, 0)"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

const Header = ({ restaurants }) => {
  return (
    <>
      <header className="explore-header mb-4">
        <Navbar />
        <section className="container">
          <h3
            className="text-center"
            style={{
              color: "var(--primary-color-brown",
              fontFamily: "gagalin-regular",
              lineHeight: "1",
            }}
          >
            ¡Descubre nuestros favoritos!
          </h3>
          <SwiperCarousel>
            {restaurants.map((restaurant) => (
              <SwiperSlide key={restaurant.id}>
                <RestaurantCardSingle
                  restaurant={restaurant}
                  cssClass="border-0"
                />
              </SwiperSlide>
            ))}
          </SwiperCarousel>
        </section>
      </header>
    </>
  );
};

const Types = ({ types = [] }) => {
  return (
    <>
      <section className="container mb-5 pe-0">
        <h3 className="display-5 mb-3">¿Qué te apetece comer hoy?</h3>
        <CarouselInfinite>
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

const Countries = ({ countries = [] }) => {
  return (
    <>
      <section className="container mb-5 pe-0">
        <h3 className="display-5 mb-3">Encuentra el lugar perfecto</h3>
        <CarouselStatic>
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

const Popular = ({ restaurants = [] }) => {
  return (
    <>
      <section className="container mb-5">
        <h3 className="display-5 mb-3">
          Los mejores valorados{" "}
          <span style={{ color: "var(--primary-color" }}>★</span>
        </h3>

        <div className="row g-3">
          {restaurants.length > 0 && (
            <>
              {restaurants.map((restaurant = []) => (
                <div
                  key={restaurant.id}
                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <RestaurantCardSingle restaurant={restaurant} />
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ExplorePage;
