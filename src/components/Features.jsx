const Features = ({ restaurant }) => {
  return (
    <>
      <article className="container py-4">
        {/** Info */}
        <p className="d-flex flex-wrap gap-2">
          {restaurant.features.map((feature) => (
            <span key={feature} className="badge text-bg-secondary">
              {feature}
            </span>
          ))}
          <span className="badge text-bg-secondary">🚗 Parking </span>
          <span className="badge text-bg-secondary">🐶 Pet friendly</span>
        </p>
      </article>
    </>
  );
};

export default Features;
