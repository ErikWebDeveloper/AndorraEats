import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <section className="pt-5 bg-primary-custom">
      <div className="container my-5">
        <h1 className="text-center mb-4">Sobre Andorra Eats</h1>
        <p className="text-center text-muted mb-5">
          Descubre más sobre nuestra misión y cómo ayudamos a los negocios
          locales.
        </p>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 className="h4">Nuestra Misión</h2>
            <p>
              En <strong>Andorra Eats</strong>, creemos en el poder de la
              tecnología para transformar la manera en que los negocios locales
              se conectan con sus clientes. Nuestro objetivo es ofrecer una
              plataforma gratuita que facilite la visibilidad de restaurantes,
              cafeterías y negocios gastronómicos en Andorra.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <h2 className="h4">¿Qué Hacemos?</h2>
            <p>
              Proporcionamos un espacio donde los negocios locales pueden
              compartir su información, como menús, horarios y ubicación, de
              manera sencilla y accesible. Queremos que las personas puedan
              descubrir fácilmente los mejores lugares para disfrutar de una
              comida deliciosa.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 className="h4">¿Por Qué Andorra Eats?</h2>
            <p>
              Andorra Eats nació de la necesidad de conectar a los pequeños
              negocios con sus comunidades. Nos enfocamos en destacar los
              negocios locales y apoyar a los emprendedores que son el corazón
              de nuestra economía.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <h2 className="h4">Facilitar la Visibilidad</h2>
            <p>
              Nuestro propósito es ayudarte a que tu negocio sea descubierto por
              más personas. Ya sea que dirijas un restaurante, un food truck o
              una panadería, estamos aquí para ayudarte a alcanzar a tu
              audiencia.
            </p>
          </div>
        </div>

        <div className="text-center mt-5">
          <h2 className="h4 mb-3">¿Listo para comenzar?</h2>
          <p>
            Regístrate en nuestra plataforma y anuncia tu negocio de manera
            gratuita. Juntos podemos hacer crecer la comunidad gastronómica de
            Andorra.
          </p>
          <a href="/registro" className="btn btn-primary">
            Regístrate ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
