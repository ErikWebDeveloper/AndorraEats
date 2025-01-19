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
        <h1>{restaurant.name}</h1>
        {/** Valoración */}
        <p style={{ color: "orange" }}>★★★☆☆ {restaurant.rating}</p>
        {/** Features */}
        <p className="row">
          <span className="col-4">
            <span key={restaurant.type}>{restaurant.type} </span>
          </span>
          <span className="col-4 link">📍 {restaurant.country}</span>
          {/*<span className="col-4">🪙 {restaurant.price}/per.</span>*/}
        </p>
      </article>
    </>
  );
};

export default RestaurantCard;
