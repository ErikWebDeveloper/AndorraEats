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
      <div className="card-header">
        <img
          src={`${import.meta.env.VITE_API_URL_IMAGES}/${restaurant.image}`}
        />
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
        <p style={{ color: "orange" }}>★★★☆☆ {restaurant.rating}</p>
        {/** Features */}
        <div className="d-flex flex-wrap gap-2">
          <p key={restaurant.type} className="me-3">
            {restaurant.type}{" "}
          </p>

          <p className="badge text-bg-warning">📍 {restaurant.country}</p>
        </div>
        {/** Descripcón */}
        <p>{restaurant.description}</p>
        {/** Links */}
        <div>
          <a role="button" className="btn btn-sm btn-primary me-3" href={restaurant.link} target="_blank">
            🔗 Ver enlace del sitio
          </a>
          <a
            role="button"
            className="btn btn-sm btn-warning"
            href={restaurant.location}
            target="_blank"
          >
            📍 Ver ubicación
          </a>
        </div>
        <hr />
      </article>
    </>
  );
};

export default RestaurantCard;
