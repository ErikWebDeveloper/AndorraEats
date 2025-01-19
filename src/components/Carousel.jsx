const SRVER_URL = import.meta.env.VITE_SERVER_URL;

const Carousel = ({ products }) => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {products.map((product, index) => {
          if (product.imagen)
            return (
              <div
                key={product.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <h1>Hola</h1>
                <img
                  src={`${SRVER_URL}${product.imagen.url}`}
                  className="d-block w-100"
                  alt="Fotografia del plato"
                />
                <div class="carousel-caption d-block bg-success">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
            );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
