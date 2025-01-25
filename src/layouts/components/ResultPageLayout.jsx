import RestaurantCardSingle from "../../components/RestaurantCardSingle";

const ResultsPageLayout = ({
  title = "",
  logo = "",
  result = [],
  handleFiltersSelected = [],
  filters = [],
  filteredRestaurants = [],
}) => {
  return (
    <>
      {/** Header */}
      <HeaderResults title={title} logo={logo} result={result} />

      {/** Filtros */}
      <section className="container">
        <FiltersBox
          handleFiltersSelected={handleFiltersSelected}
          filters={filters}
        />
        {/** Resultados */}
        <ResultsContainer filteredRestaurants={filteredRestaurants} />
      </section>
    </>
  );
};

const HeaderResults = ({ logo = "", result = [], title = "" }) => {
  return (
    <section
      className="mb-3"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="container">
        <div className="row py-3 align-items-center">
          {/* Alineación vertical */}
          <h5 className="col-12 m-0">
            <span className="display-6">{logo} </span>
            {title} ·{" "}
            <span className="text-secondary fs-6">{result.length} items</span>
          </h5>
        </div>
      </div>
    </section>
  );
};

const FiltersBox = ({ handleFiltersSelected, filters = [] }) => {
  return (
    <>
      {filters.length > 0 ? (
        <form
          onChange={handleFiltersSelected}
          className="d-flex flex-wrap gap-1 mb-3"
          role="group"
          aria-label="Filtros de búsqueda"
        >
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
        </form>
      ) : (
        <>
          <div aria-hidden="true" className="d-flex flex-wrap gap-1 mb-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <span
                key={index}
                className="placeholder col-2 rounded-5 py-3"
              ></span>
            ))}
          </div>
        </>
      )}
    </>
  );
};

const ResultsContainer = ({ filteredRestaurants = [] }) => {
  return (
    <div className="row g-3 mb-5">
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
          No hay resultados disponibles ...
        </p>
      )}
    </div>
  );
};

export default ResultsPageLayout;
