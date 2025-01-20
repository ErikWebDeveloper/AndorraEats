import React, { createContext, useState, useEffect, useContext } from "react";

export const StaticData = createContext();

export const StaticDataProvider = ({ children }) => {
  const [index, setIndex] = useState([]);
  const [types, setTypes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIndexRestaurants = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL_INDEX_RESTAURANTS}`
      );
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();

      setIndex(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_TYPES}`);
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();

      setTypes(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const fetchCounties = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_COUNTRIES}`);
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();

      setCountries(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchIndexRestaurants();
    fetchTypes();
    fetchCounties();
    setLoading(false);
  }, []);

  return (
    <StaticData.Provider value={{ types, loading, countries, index }}>
      {children}
    </StaticData.Provider>
  );
};

export const useStaticData = () => {
  return useContext(StaticData);
};
