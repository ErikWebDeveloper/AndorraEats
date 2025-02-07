import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useStaticData } from "../../context/StaticDataContext";

import ResultsPageLayout from "../../layouts/components/ResultPageLayout";

const ResultsCountryPage = () => {
  const { country } = useParams();
  const [result, setResult] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filtersSelected, setFiltersSelected] = useState([]); // Filtros seleccionados
  const [loading, setLoading] = useState(true);
  const { types: filters } = useStaticData();

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

  const searchType = async (country) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL_COUNTRIES_FILTER}/${country}.json`
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
    searchType(country);
    setLoading(false);
  }, []);

  // Filtrar restaurantes cuando cambien los filtros seleccionados
  useEffect(() => {
    if (filtersSelected.length === 0) {
      // Sin filtros, mostrar todos los restaurantes
      setFilteredRestaurants(result);
    } else {
      // Filtrar por los tipo seleccionados
      const filtered = result.filter((restaurant) =>
        filtersSelected.includes(restaurant.type.split(" ")[1])
      );
      setFilteredRestaurants(filtered);
    }
  }, [filtersSelected, result]);

  if (loading) return <p>Cargando ...</p>;

  return (
    <ResultsPageLayout
      title={country}
      logo="🗺️"
      filters={filters}
      handleFiltersSelected={handleFiltersSelected}
      filteredRestaurants={filteredRestaurants}
      result={result}
      path={`${import.meta.env.VITE_COUNTRY_URL}`}
    />
  );
};

export default ResultsCountryPage;
