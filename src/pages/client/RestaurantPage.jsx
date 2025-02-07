import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router";

// Components
import RestaurantCard from "../../components/RestaurantCard";
import Features from "../../components/Features";
import Recommended from "../../components/Recommended";
import Schedule from "../../components/Schedule";
import Footer from "../../components/Footer";

function RestaurantPage() {
  const { state } = useLocation();
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL_RESTAURANTS}`
        );
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        const data = await response.json();

        // Filtrar el restaurante por ID
        const filteredRestaurant = data.find(
          (item) => item.id === restaurantId
        );

        if (!filteredRestaurant) return setError(true);

        setRestaurant(filteredRestaurant);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <p>Cargando restaurante...</p>;
  }

  if (error) {
    return <p>No se ha encntrado el contenido...</p>;
  }
  return (
    <>
      {state?.from && <BackButton returnPath={state.from} />}
      <RestaurantCard restaurant={restaurant} />
      <Features restaurant={restaurant} />
      <Schedule restaurant={restaurant} />
      <Recommended restaurant={restaurant} />
      <Footer />
    </>
  );
}

const BackButton = ({ returnPath }) => {
  return (
    <nav className="position-absolute p-3">
      <Link
        role="button"
        to={returnPath}
        className="btn btn-light btn-sm shadow-lg d-flex align-items-center justify-content-center rounded-circle"
        style={{
          aspectRatio: "1/1",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </Link>
    </nav>
  );
};

export default RestaurantPage;
