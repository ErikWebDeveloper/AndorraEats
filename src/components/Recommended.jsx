const Recommended = ({ restaurant }) => {
  return (
    <>
      <section className="container py-4">
        <h3>Platos recomendados</h3>
        <div className="carousel-container">
          {restaurant.recommended_dishes.map((item) => (
            <RecommendedCard key={item.name} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

const RecommendedCard = ({ item }) => {
  return (
    <>
      <article className="card border-0">
        <img src={item.image} className="card-img-top rounded-3" alt={item.name} />
        <div className="card-body px-0 py-2">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price} €</p>
        </div>
      </article>
    </>
  );
};

export default Recommended;
