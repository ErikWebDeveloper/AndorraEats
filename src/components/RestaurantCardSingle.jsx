import { useNavigate } from "react-router";

import Stars from "./Stars";

const RestaurantCardSingle = ({ restaurant, cssClass = "", location }) => {
  const navigate = useNavigate();

  const handleOnClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`, {state:{from: location}});
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
            src={
              restaurant.image && restaurant.image !== ""
                ? `${import.meta.env.VITE_API_URL_IMAGES}/${restaurant.image}`
                : "/img/app/no_photo.png"
            }
            alt={restaurant.name}
          />
        </div>
        <div className="card-body">
          {/** Titulo */}
          <h1 className="card-title fw-bold" style={{ fontSize: "1.2rem" }}>
            {restaurant.name}
          </h1>
          {/** Valoración */}
          <Stars rating={restaurant.rating} />
        </div>
        {/** Footer */}
        <div
          className="card-footer d-flex align-items-center justify-content-between"
          style={{ fontSize: "0.8rem" }}
        >
          <span
            key={restaurant.type}
            className="flex-fill d-flex align-items-center"
          >
            {restaurant.type}
          </span>
          <span
            className="badge text-bg-warning d-flex align-items-center justify-content-center"
            style={{ minWidth: "60px" }}
          >
            📍{" "}
            {restaurant.country === restaurant?.sub_country
              ? restaurant.country
              : restaurant?.sub_country}
          </span>
        </div>
      </article>
    </>
  );
};

export const RestaurantCardSinglePlaceHolder = () => {
  return (
    <>
      <article aria-hidden="true" className={`card h-100 shadow-md border-0`}>
        <div
          className="card-header"
          style={{ backgroundColor: "#a3a3a3", border: "none" }}
          aria-hidden="true"
        ></div>

        <p className="card-body placeholder-glow">
          <span className="placeholder col-7"></span>
        </p>

        <p className="card-footer placeholder-glow">
          <span className="placeholder col-3"></span>
        </p>
      </article>
    </>
  );
};

export default RestaurantCardSingle;
