import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useStaticData } from "../context/StaticDataContext";
import RestaurantCardSingle from "../components/RestaurantCardSingle";

const ResultsTypePage = () => {
  const { type } = useParams();
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filtersSelected, setFiltersSelected] = useState([]); // Filtros seleccionados
  const [loading, setLoading] = useState(true);
  const {
    countries: filters,
    loading: loadingStaticData,
    types,
  } = useStaticData();

  const handleClose = () => {
    navigate("/explore");
  };

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

  if (loading) return <p>Cargando ...</p>;

  return (
    <>
      {/** Header */}
      <section
        className="mb-3"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div className="container">
          <div className="row py-3 align-items-center">
            {/* Alineación vertical */}
            <h5 className="col-10 m-0">
              <span className="display-6">{logo} </span>
              {type} ·{" "}
              <span className="text-secondary fs-6">{result.length} items</span>
            </h5>
            <div className="col-2 text-end">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        {/** Filtros */}
        <form
          onChange={handleFiltersSelected}
          className="d-flex flex-wrap gap-1 mb-3"
          role="group"
          aria-label="Filtros de búsqueda"
        >
          {filters.length > 0 && (
            <>
              {filters.map((filter) => (
                <div key={filter.name}>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={filter.name}
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-secondary btn-sm rounded-5"
                    htmlFor={filter.name}
                  >
                    {filter.name}
                  </label>
                </div>
              ))}
            </>
          )}
        </form>
        {/** Resultados */}
        <div className="row g-3">
          {filteredRestaurants.length > 0 ? (
            <>
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <RestaurantCardSingle restaurant={restaurant} />
                </div>
              ))}
            </>
          ) : (
            <p className="text-muted text-center">
              No hay resultados ha mostrar ...
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ResultsTypePage;
