import Stars from "./Stars";

const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <Header restaurant={restaurant} />
      <Card restaurant={restaurant} />
    </>
  );
};

const Header = ({ restaurant }) => {
  return (
    <>
      <div
        className="card-header"
        style={{ backgroundColor: "var(--primary-color" }}
      >
        {restaurant.image && restaurant.image !== "" && (
          <img
            src={`${import.meta.env.VITE_API_URL_IMAGES}/${restaurant.image}`}
          />
        )}
      </div>
    </>
  );
};

const Card = ({ restaurant }) => {
  return (
    <>
      <article className="container pt-3">
        {/** Titulo */}
        <h1 className="display-3 fw-bold">{restaurant.name}</h1>

        {/** Valoración */}
        <Stars rating={restaurant.rating} />
        {/** Info */}
        <div className="d-flex flex-wrap gap-2 mb-3">
     
          <span key={restaurant.type} className="me-3">
            {restaurant.type}{" "}
          </span>

          <span className="badge text-bg-warning d-flex align-items-center justify-content-center">📍 {restaurant.country}</span>
        </div>
        {/** Descripcón */}
        <p>{restaurant.description}</p>
        {/** Links */}
        <div>
          {restaurant.link && restaurant.link !== "" && (
            <a
              role="button"
              className="btn btn-sm btn-primary me-3"
              href={restaurant.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar el sitio web de ${restaurant.name}`}
              title={`Visitar el sitio web de ${restaurant.name}`}
            >
              🔗 Ver enlace del sitio
              <span className="visually-hidden">Ver enlace del sitio</span>
            </a>
          )}

          {restaurant.location && restaurant.location !== "" && (
            <a
              role="button"
              className="btn btn-sm btn-warning"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                restaurant.name + " " + restaurant.location
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ubicación de ${restaurant.name} en Google Maps`}
              title={`Ver ubicación de ${restaurant.name} en Google Maps`}
            >
              📍Ver ubicación
              <span className="visually-hidden">Ver ubicación</span>
            </a>
          )}
        </div>

        <hr />
      </article>
    </>
  );
};



export default RestaurantCard;
