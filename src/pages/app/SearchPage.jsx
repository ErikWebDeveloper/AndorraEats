import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useStaticData } from "../../context/StaticDataContext";

// Layouts
import Section from "../../layouts/components/SectionLayout";

const SearchPage = () => {
  const { index, loading } = useStaticData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (index.length === 0 || loading) return;

    // Filtramos los resultados basados en el término de búsqueda
    const results = index.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Limpiar en caso de estar el input vacio
    if (searchTerm.length === 0) return setFilteredResults([]);

    // Mostar solo si el termino tiene mas de tres caracteres
    if (searchTerm.length > 2) return setFilteredResults(results);
  }, [searchTerm, index, loading]);

  return (
    <main
      id="search-page"
      aria-label="Buscar por nombre de restaurantes."
      className="py-5"
    >
      <SearchInput setSearchTerm={setSearchTerm} />
      <ResultsContainer results={filteredResults} />
    </main>
  );
};

const SearchInput = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value); // Actualiza el término de búsqueda
  };

  return (
    <div className="mb-4 container">
      <div className="input-group mb-3 input-group-lg">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscar restaurante ..."
          aria-label="Buscar restaurante ..."
          aria-describedby="button-addon2"
        />
        <button className="btn btn-warning" type="button" id="button-addon2">
          🔎
        </button>
      </div>
    </div>
  );
};

const ResultsContainer = ({ results }) => {
  return (
    <div className="container">
      {results.length > 1 && (
        <p>Se han encontrado {results.length} resultados ...</p>
      )}
      <div className="row g-3">
        {results.length > 0 ? (
          results.map((result) => (
            // Añadir la key en el div directamente
            <div key={result.id} className="col-12 col-md-6 col-lg-4">
              <ResultCard result={result} />
            </div>
          ))
        ) : (
          <p className="text-muted">No se encontraron resultados ...</p>
        )}
      </div>
    </div>
  );
};

const ResultCard = ({ result }) => {
  return (
    <div className="card shadow-md bg-body-tertiary h-100">
      <div className="card-body d-flex flex-warp gap-3">
        <Link
          className="text-decoration-none text-black flex-fill"
          role="button"
          to={`/restaurant/${result.id}`}
          state={{ from: "/search" }}
        >
          {result.name}
        </Link>
        <div>
          <span className="badge text-bg-warning text-end">
            📍 {result.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
