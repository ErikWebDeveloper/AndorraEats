const NewRestaurantPage = () => {
  return (
    <section className="bg-primary-custom pb-5">
      <div className="container">
        {/* Instrucciones */}
        <div className="my-5">
          <h2
            className="display-5 opacity-75 mb-5 text-center"
            style={{
              fontFamily: "gagalin-regular",
            }}
          >
            Sigue estos pasos para aparecer en nuestra guia
          </h2>
          <div className="container">
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6 col-lg-3">
                <article
                  className="card h-100"
                  style={{ color: "#582d00", backgroundColor: "#ffe79f" }}
                >
                  <div className="card-body">
                    <h4
                      className="card-title"
                      style={{
                        fontFamily: "gagalin-regular",
                      }}
                    >
                      🔍 Verifica
                    </h4>
                    <p className="card-text">
                      Antes de empezar, revisa si tu restaurante{" "}
                      <strong>ya está en la guia</strong> de Andorra Eats.
                    </p>
                  </div>
                </article>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <article
                  className="card h-100"
                  style={{ color: "#582d00", backgroundColor: "#ffe79f" }}
                >
                  <div className="card-body">
                    <h4
                      className="card-title"
                      style={{
                        fontFamily: "gagalin-regular",
                      }}
                    >
                      📝 Completa el formulario
                    </h4>
                    <p className="card-text">
                      Es necesario usar una cuenta de <strong>Google</strong>{" "}
                      para rellenar el formulario.
                    </p>
                  </div>
                </article>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <article
                  className="card h-100"
                  style={{ color: "#582d00", backgroundColor: "#ffe79f" }}
                >
                  <div className="card-body">
                    <h4
                      className="card-title"
                      style={{
                        fontFamily: "gagalin-regular",
                      }}
                    >
                      📌 Datos requeridos
                    </h4>
                    <p className="card-text">
                      Completar el formulario te tomará{" "}
                      <strong>aproximadamente 5 minutos</strong>.
                    </p>
                  </div>
                </article>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <article
                  className="card h-100"
                  style={{ color: "#582d00", backgroundColor: "#ffe79f" }}
                >
                  <div className="card-body">
                    <h4
                      className="card-title"
                      style={{
                        fontFamily: "gagalin-regular",
                      }}
                    >
                      🚀 Publicación
                    </h4>
                    <p className="card-text">
                      Una vez enviado, revisaremos tu solicitud y añadiremos tu
                      restaurante lo antes posible.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p
            className="fs-4 opacity-75"
            style={{
              fontFamily: "gagalin-regular",
            }}
          >
            🎯 ¡Es totalmente gratis y fácil!
          </p>
          <a
            role="button"
            href={`${import.meta.env.VITE_GOOGLE_FORM_INSERT}`}
            target="_blank"
            className="btn btn-lg btn-success"
          >
            Haz clic en el botón para comenzar
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewRestaurantPage;
