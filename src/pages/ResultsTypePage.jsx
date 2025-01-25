import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useStaticData } from "../context/StaticDataContext";
import RestaurantCardSingle from "../components/RestaurantCardSingle";

// Layouts
import ResultsPageLayout from "../layouts/components/ResultPageLayout";

const ResultsTypePage = () => {
  const { type } = useParams();
  const [logo, setLogo] = useState("⏳");
  const [result, setResult] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filtersSelected, setFiltersSelected] = useState([]); // Filtros seleccionados
  const [loading, setLoading] = useState(true);
  const {
    countries: filters,
    types,
    loading: loadingStaticData,
  } = useStaticData();

  const handleFiltersSelected = (event) => {
    // Actualizar estado de filtros
    const filter = event.target.id;
    const filterStatus = event.target.checked;

    setFiltersSelected((prev) => {
      if (filterStatus) {
        return prev.includes(filter) ? prev : [...prev, filter];
      } else {
        return prev.filter((item) => item !== filter);
      }
    });
  };

  const searchType = async (type) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL_TYPES_FILTER}/${type}.json`
      );
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const data = await response.json();

      setResult(data); // Actualizar los resultados generales
      setFilteredRestaurants(data); // Inicializar los resultados filtrados
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    searchType(type);
    setLoading(false);
  }, []);

  // Cargar logotipo de la categoria
  useEffect(() => {
    if (types.length === 0) return;
    const { image } = types.find((item) => item.name === type);
    setLogo(image);
  }, [types]);

  // Filtrar restaurantes cuando cambien los filtros seleccionados
  useEffect(() => {
    if (filtersSelected.length === 0) {
      // Sin filtros, mostrar todos los restaurantes
      setFilteredRestaurants(result);
    } else {
      // Filtrar por los países seleccionados
      const filtered = result.filter((restaurant) =>
        filtersSelected.includes(restaurant.country)
      );
      setFilteredRestaurants(filtered);
    }
  }, [filtersSelected, result]);

  return (
    <ResultsPageLayout
      title={type}
      logo={logo}
      filters={filters}
      filteredRestaurants={filteredRestaurants}
      result={result}
      handleFiltersSelected={handleFiltersSelected}
    />
  );
};

export default ResultsTypePage;
