import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
const TermsAndPolicyPage = () => {
  return (
    <section className="bg-primary-custom">
      <div className="container py-5">
        <div className="text-center">
          <Logo emoji="🥗" />
        </div>
        <h1 className="text-center mb-4">
          Política de Privacidad y Condiciones de Uso
        </h1>
        <p className="text-center text-muted mb-5">
          Por favor, lee atentamente nuestras políticas y condiciones antes de
          utilizar nuestra plataforma.
        </p>

        <div className="accordion" id="termsAccordion">
          {/* Sección: Introducción */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingIntro">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseIntro"
                aria-expanded="true"
                aria-controls="collapseIntro"
              >
                Introducción
              </button>
            </h2>
            <div
              id="collapseIntro"
              className="accordion-collapse collapse show"
              aria-labelledby="headingIntro"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                Bienvenido a <strong>Andorra Eats</strong>. Al utilizar nuestra
                plataforma, aceptas los términos y condiciones aquí
                establecidos. Si no estás de acuerdo con alguna parte de estos
                términos, te recomendamos no utilizar nuestros servicios.
              </div>
            </div>
          </div>

          {/* Sección: Uso de la Plataforma */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingUsage">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseUsage"
                aria-expanded="false"
                aria-controls="collapseUsage"
              >
                Uso de la Plataforma
              </button>
            </h2>
            <div
              id="collapseUsage"
              className="accordion-collapse collapse"
              aria-labelledby="headingUsage"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    El uso de Andorra Eats es gratuito para todos los usuarios.
                  </li>
                  <li>
                    Los usuarios son responsables de la veracidad y exactitud de
                    la información que suben a la plataforma.
                  </li>
                  <li>
                    Está prohibido el uso de la plataforma para actividades
                    ilegales o fraudulentas.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección: Política de Privacidad */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingPrivacy">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePrivacy"
                aria-expanded="false"
                aria-controls="collapsePrivacy"
              >
                Política de Privacidad
              </button>
            </h2>
            <div
              id="collapsePrivacy"
              className="accordion-collapse collapse"
              aria-labelledby="headingPrivacy"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                <p>
                  En <strong>Andorra Eats</strong>, valoramos tu privacidad y
                  nos comprometemos a proteger tus datos personales. No
                  compartiremos tu información con terceros sin tu
                  consentimiento explícito, excepto cuando sea necesario para el
                  funcionamiento de la plataforma o requerido por la ley.
                </p>
                <p>Los datos recopilados pueden incluir:</p>
                <ul>
                  <li>
                    Información de contacto (nombre, correo electrónico, etc.).
                  </li>
                  <li>Detalles de tu negocio, como nombre y ubicación.</li>
                  <li>Datos de navegación en la plataforma.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección: Modificaciones */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingChanges">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseChanges"
                aria-expanded="false"
                aria-controls="collapseChanges"
              >
                Modificaciones de los Términos y Políticas
              </button>
            </h2>
            <div
              id="collapseChanges"
              className="accordion-collapse collapse"
              aria-labelledby="headingChanges"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                Nos reservamos el derecho de modificar estos términos y
                políticas en cualquier momento. Cualquier cambio será notificado
                en nuestra plataforma, y el uso continuo del servicio implica tu
                aceptación de los nuevos términos.
              </div>
            </div>
          </div>

          {/* Sección: Contacto */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingContact">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseContact"
                aria-expanded="false"
                aria-controls="collapseContact"
              >
                Contacto
              </button>
            </h2>
            <div
              id="collapseContact"
              className="accordion-collapse collapse"
              aria-labelledby="headingContact"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">
                Si tienes alguna duda sobre estos términos y condiciones, no
                dudes en contactarnos a través de nuestro correo electrónico:{" "}
                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TermsAndPolicyPage;
