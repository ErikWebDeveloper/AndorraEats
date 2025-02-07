import { Link } from "react-router";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
function LandingPage() {
  return (
    <main className="landing-page">
      <div className="container">
        {/* Header */}
        <section className="py-5 text-center">
          <Logo emoji="🥗" />
          <p className="lead fw-bold">
            Nuestra plataforma ofrece una forma rápida y fácil de encontrar
            restaurantes en Andorra.
          </p>
        </section>

        {/* Quien somos */}
        <section className="py-5">
          <h2
            className="display-5 text-center mb-3"
            style={{
              fontFamily: "gagalin-regular",
            }}
          >
            ¿Quien somos?
          </h2>
          <p className="lead text-center">
            En <strong>Andorra Eats App</strong>, somos un grupo de
            emprendedores locales que creen en el poder de la{" "}
            <strong>tecnología para conectar el mundo</strong>. Nuestra misión
            es ayudar a los <strong>restaurantes de Andorra</strong> a ganar
            visibilidad entre los miles de turistas que visitan nuestro hermoso
            país cada año.
          </p>
        </section>

        {/* Demo y Insertar Restaurante */}
        <section className="py-5  fw-medium">
          <div className="container">
            <div className="row justify-content-center">
              {/* Card para Demo */}
              <div className="col-12 col-md-5 mb-4">
                <div
                  className="card shadow-md h-100 border-0"
                  style={{ color: "#582d00", backgroundColor: "#ffe79f" }}
                >
                  <div className="card-body text-center">
                    <h2
                      className="card-title mb-4"
                      style={{
                        fontFamily: "gagalin-regular",
                      }}
                    >
                      Prueba nuestra App
                    </h2>
                    <p className="card-text mb-4">
                      Accede a una demo con datos ficticios para ver cómo
                      funciona nuestra app. ¡Es muy fácil y rápida!
                    </p>
                    <Link to={"/explore"} className="btn btn-success btn-lg">
                      👉 Ver Demo
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card para Insertar Restaurante */}
              <div className="col-12 col-md-5 mb-4">
                <div
                  className="card shadow-sm h-100 border-0"
                  style={{ color: "#582d00", backgroundColor: "#ffe79f" }}
                >
                  <div className="card-body text-center">
                    <h2
                      className="card-title mb-4"
                      style={{
                        fontFamily: "gagalin-regular",
                      }}
                    >
                      ¡Añade tu restaurante!
                    </h2>
                    <p className="card-text mb-4">
                      Ofrecemos un servicio <strong>gratuito</strong> y amigable
                      para mejorar la visibilidad de tu restaurante entre los
                      turistas.
                    </p>
                    <a
                      href="https://forms.gle/xqEvBxPnVzc81q2F6"
                      target="_blank"
                      className="btn btn-primary btn-lg"
                    >
                      🚀 Insertar Restaurante
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Text */}
        <section className="py-5">
          <h2
            className="display-5 text-center mb-3"
            style={{
              fontFamily: "gagalin-regular",
            }}
          >
            Ventajas
          </h2>
          <p className="lead text-center">
            Esta es una oportunidad única para tu restaurante:{" "}
            <strong>mejora tu visibilidad</strong>, atrae a nuevos clientes y
            forma parte de la comunidad gastronómica más importante de Andorra.{" "}
            <strong>Crear tu perfil es completamente gratis</strong>, y no solo
            eso, sino que te permitirá llegar directamente a turistas
            interesados en disfrutar de una experiencia gastronómica única.
          </p>
        </section>

        {/* Text */}
        <section className="py-5">
          <h2
            className="display-5 text-center mb-3"
            style={{
              fontFamily: "gagalin-regular",
            }}
          >
            ¡No dejes pasar esta oportunidad!
          </h2>
          <p className="lead text-center">
            Al agregar tu restaurante, no solo estarás ayudando a tu negocio,
            sino también colaborando para hacer que Andorra sea aún más{" "}
            <strong>accesible</strong> para los turistas, mejorando su
            experiencia en nuestro país. Con <strong>Andorra Eats</strong>, todo
            el mundo gana.
          </p>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default LandingPage;
