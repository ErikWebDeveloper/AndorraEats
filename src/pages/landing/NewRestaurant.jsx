import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

const NewRestaurantPage = () => {
  return (
    <section className="bg-primary-custom">
      <div className="container py-5">
        <div className="container">
          {/* Instrucciones */}
          <div className="text-center my-5">
            <h2 className="lead ">🍽️ ¡Añade tu restaurante a Andorra Eats!</h2>
            <p>
              ¿Quieres que más personas descubran tu restaurante? 🏔️🍷 Sigue
              estos pasos para aparecer en nuestra app:
            </p>
            <ul>
              <li>
                🔍 <strong>Verifica:</strong> Antes de empezar, revisa si tu
                restaurante ya está en Andorra Eats.
              </li>
              <li>
                📝 <strong>Completa el formulario:</strong> Si no lo encuentras,
                rellena el formulario con la información necesaria.
              </li>
              <li>
                📌 <strong>Datos requeridos:</strong> Te pediremos el nombre del
                restaurante, ubicación, categoría, una imagen y más.
              </li>
              <li>
                🚀 <strong>Publicación:</strong> Una vez enviado, revisaremos tu
                solicitud y añadiremos tu restaurante lo antes posible.
              </li>
            </ul>
            <p>
              🎯 ¡Es totalmente <strong>gratis</strong> y fácil! Haz clic en el
              botón para comenzar:
            </p>
            <button className="btn btn-primary">
              📋 Acceder al Formulario
            </button>
          </div>

          {/* Agradecimiento */}
          <div className="text-center my-5">
            <h3>{"¡Gracias por querer formar parte de nuestra app!"}</h3>
            <p>
              {
                "Tu participación es muy importante para nosotros. Al completar el formulario, nuestro equipo revisará tu solicitud y te contactaremos pronto."
              }
            </p>
            <p>{"¡Esperamos verte pronto en nuestra app!"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRestaurantPage;
