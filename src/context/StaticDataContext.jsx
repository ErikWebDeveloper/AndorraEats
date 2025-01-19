import React, { createContext, useState, useEffect, useContext } from "react";

export const StaticData = createContext();

export const StaticDataProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
    fetchTypes();
    fetchCounties();
    setLoading(false);
  }, []);

  return (
    <StaticData.Provider value={{ types, loading, countries }}>
      {children}
    </StaticData.Provider>
  );
};

export const useStaticData = () => {
  return useContext(StaticData); 
};
