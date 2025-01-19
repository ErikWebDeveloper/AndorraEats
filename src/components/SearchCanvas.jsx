import { useState } from "react";
import RestaurantCardSingle from "./RestaurantCardSingle";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const SearchCanvas = ({ result = [], filters = [], handleFilters }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const handleClose = () => {
    navigate("/explore");
  };

  useEffect(() => {
    // Obtener el offcanvas element
    const offcanvasElement = document.getElementById("offcanvasBottom");

    // Añadir el evento para manejar cuando el offcanvas se muestra
    const handleShow = async () => {
      //await fetchByType();
    };

    // Agregar el event listener para manejar la apertura
    offcanvasElement.addEventListener("shown.bs.offcanvas", handleShow);

    // Añadir el evento para el cierre manual
    const handleHide = () => {
      handleClose();
    };

    // Agregar los event listeners para manejar el cierre
    offcanvasElement.addEventListener("hidden.bs.offcanvas", handleHide);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      offcanvasElement.removeEventListener("shown.bs.offcanvas", handleShow);
      offcanvasElement.removeEventListener("hidden.bs.offcanvas", handleHide);
    };
  }, [navigate]);

  return (
    <div
      className="offcanvas offcanvas-bottom"
      tabIndex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div
        className="offcanvas-header"
        style={{ background: "var(--primary-color)" }}
      >
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
          {type} ·{" "}
          <span className="text-secondary fs-6">{result.length} items</span>
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={handleClose}
        ></button>
      </div>
      <div className="offcanvas-body small">
        <nav className="mb-3">
          <h6 className="text-secondary">Filtros</h6>
          <form
            onChange={handleFilters}
            className="d-flex flex-wrap gap-1"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            {filters.length > 0 && (
              <>
                {filters.map((filter) => (
                  <>
                    <input
                      key={filter.name}
                      type="checkbox"
                      className="btn-check"
                      id={filter.name}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      htmlFor={filter.name}
                    >
                      {filter.name}
                    </label>
                  </>
                ))}
              </>
            )}
          </form>
        </nav>

        <div className="row g-3">
          {result.length > 0 ? (
            <>
              {result.map((restaurant) => (
                <>
                  <div key={restaurant.id} className="col-12 col-md-6 col-lg-4">
                    <RestaurantCardSingle restaurant={restaurant} />
                  </div>
                </>
              ))}
            </>
          ) : (
            <p>No hay resultados ha mostrar</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCanvas;
