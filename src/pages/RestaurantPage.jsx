import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import RestaurantCard from "../components/RestaurantCard";
import Features from "../components/Features";
import Recommended from "../components/Recommended";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

function RestaurantPage() {
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
      <RestaurantCard restaurant={restaurant} />
      <Features restaurant={restaurant} />
      <Schedule restaurant={restaurant} />
      <Recommended restaurant={restaurant} />
      <Footer />
    </>
  );
}

export default RestaurantPage;
