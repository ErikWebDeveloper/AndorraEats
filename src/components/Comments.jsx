const Closer = () => {
  return (
    <>
      <section className="container py-4">
        <h4>Cerca de Magical Black Cat</h4>
        <div className="carousel-container">
          <CloserCard />
          <CloserCard />
          <CloserCard />
          <CloserCard />
          <CloserCard />
          <CloserCard />
          <CloserCard />
          <CloserCard />
        </div>
      </section>
    </>
  );
};

const CloserCard = () => {
  return (
    <>
      <article className="card border-0">
        <img src="./plato.jpg" className="card-img-top rounded-3" alt="..." />
        <div className="card-body px-0 py-2">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">17.80 €</p>
        </div>
      </article>
    </>
  );
};

export default Closer;
