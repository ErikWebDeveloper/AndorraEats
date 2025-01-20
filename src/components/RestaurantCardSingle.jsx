import { useNavigate } from "react-router";

const RestaurantCardSingle = ({ restaurant, cssClass = "" }) => {
  const navigate = useNavigate();

  const handleOnClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`);
  };
  return (
    <>
      <article
        className={`card h-100 shadow-md card-scale ${cssClass}`}
        onClick={() => {
          handleOnClick(restaurant.id);
        }}
      >
        <div className="card-header p-0">
          <img
            src={`${import.meta.env.VITE_API_URL_IMAGES}/${restaurant.image}`}
            alt={restaurant.name}
          />
        </div>
        <div className="card-body">
          {/** Titulo */}
          <h1 className="card-title fw-bold" style={{ fontSize: "1.2rem" }}>
            {restaurant.name}
          </h1>
          {/** Valoración */}
          <p
            className="card-text"
            style={{ color: "orange", fontSize: "0.8rem" }}
          >
            ★★★☆☆ {restaurant.rating}
          </p>
        </div>
        {/** Footer */}
        <div className="card-footer d-flex" style={{ fontSize: "0.8rem" }}>
          <span key={restaurant.type} className="flex-fill">
            {restaurant.type}{" "}
          </span>
          <p className="badge text-bg-warning">📍 {restaurant.country}</p>
        </div>
      </article>
    </>
  );
};

export default RestaurantCardSingle;
