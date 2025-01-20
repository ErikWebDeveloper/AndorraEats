const Recommended = ({ restaurant = [] }) => {
  return (
    <>
      <section className="container py-4 mb-5">
        <h3 className="display-4">Platos recomendados</h3>
        {/**Si hay platos de sugerencia */}
        {restaurant?.recommended_dishes ? (
          <>
            <div className="carousel-container">
              {restaurant.recommended_dishes.map((item) => (
                <RecommendedCard key={item.name} item={item} />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-muted">No hay elementos ha mostrar ...</p>
          </>
        )}
      </section>
    </>
  );
};

const RecommendedCard = ({ item }) => {
  return (
    <>
      <article className="card border-0">
        <img
          src={item.image}
          className="card-img-top rounded-3"
          alt={item.name}
        />
        <div className="card-body px-0 py-2">
          <h6 className="card-title">{item.name}</h6>
        </div>
      </article>
    </>
  );
};

export default Recommended;
