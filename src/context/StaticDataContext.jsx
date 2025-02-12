import React, { createContext, useState, useEffect, useContext } from "react";

export const StaticData = createContext();

export const StaticDataProvider = ({ children }) => {
  const [index, setIndex] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [types, setTypes] = useState([]);
  const [subTypes, setSubTypes] = useState([]);
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

  const fetchSubTypes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_SUBTYPES}`);
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();
      setSubTypes(data);
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
    fetchSponsors();
    fetchPopulars();
    fetchTypes();
    fetchSubTypes();
    fetchCounties();
    setLoading(false);
  }, []);

  return (
    <StaticData.Provider
      value={{ types, subTypes, loading, countries, index, sponsors, populars }}
    >
      {children}
    </StaticData.Provider>
  );
};

export const useStaticData = () => {
  return useContext(StaticData);
};
