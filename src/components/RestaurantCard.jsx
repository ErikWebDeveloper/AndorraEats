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
        <div className="d-flex flex-wrap gap-3 my-1">
          {/** Referencia */}
          <span className="badge bg-primary">🏷️ #{restaurant.id}</span>
          {restaurant.trusted && (
            <span className="badge bg-success">🥇 Perfil verificado</span>
          )}
        </div>
        {/** Valoración */}
        <Stars rating={restaurant.rating} />
        {/** Info */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span key={restaurant.type} className="me-3">
            {restaurant.type}{" "}
          </span>

          <span className="badge text-bg-warning d-flex align-items-center justify-content-center">
            📍{" "}
            {restaurant.country === restaurant?.sub_country
              ? restaurant.country
              : restaurant?.sub_country}
          </span>
        </div>
        {/** Descripcón */}
        <p>{restaurant.description}</p>
        {/** Links */}
        <div className="mb-3">
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
        {!restaurant.trusted && (
          <div className="alert alert-warning text-center" role="alert">
            ⚠️ Esta información puede estar obsoleta o contener errores.
            <br />
            Ayúdanos a mejorar:{" "}
            <a
              href={`${import.meta.env.VITE_GOOGLE_FORM_ERROR}`}
              className="alert-link"
              target="_blank"
            >
              reportar un error
            </a>{" "}
            o{" "}
            <a
              href={`${import.meta.env.VITE_GOOGLE_FORM_UPDATE_DINAMIC}${
                restaurant.id
              }`}
              className="alert-link"
              target="_blank"
            >
              añadir información del sitio
            </a>
            .
          </div>
        )}

        <hr />
      </article>
    </>
  );
};

export default RestaurantCard;
