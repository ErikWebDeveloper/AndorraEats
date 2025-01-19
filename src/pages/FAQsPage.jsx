import Logo from "../components/Logo";
import Footer from "../components/Footer";

const FAQsPage = () => {
  // Variable con las preguntas y respuestas
  const faqsData = [
    {
      question: "¿Es gratis anunciar mi restaurante o negocio?",
      answer:
        "¡Sí! Andorra Eats es completamente gratuita para que puedas anunciar tu restaurante o negocio sin ningún costo. Nuestro objetivo es apoyar a los emprendedores locales y facilitar su visibilidad.",
    },
    {
      question: "¿Cómo puedo subir mi restaurante o negocio?",
      answer:
        "Subir tu restaurante o negocio es muy fácil. Simplemente regístrate en nuestra plataforma, completa la información de tu negocio (nombre, descripción, horarios, ubicación, etc.) y súbelo para que esté visible al público.",
    },
    {
      question: "¿Cuál es el propósito de Andorra Eats?",
      answer:
        "El propósito de Andorra Eats es facilitar la visibilidad de los negocios locales utilizando la tecnología disponible. Queremos ayudar a los restaurantes y negocios a llegar a más clientes.",
    },
    {
      question: "¿Qué tipo de negocios pueden registrarse?",
      answer:
        "Cualquier negocio relacionado con comida o gastronomía es bienvenido en Andorra Eats: restaurantes, cafeterías, food trucks, panaderías, entre otros.",
    },
  ];

  return (
    <section className="faqs-page">
      <div className="container py-5" style={{minHeight: "100vh"}}>
        <div className="text-center">
          <Logo emoji="🥗" />
        </div>
        <h1 className="text-center mb-4">Preguntas Frecuentes</h1>
        <p className="text-center text-muted">
          Aprende más sobre cómo funciona Andorra Eats y cómo puedes
          aprovecharlo.
        </p>
        <div className="accordion" id="faqsAccordion">
          {faqsData.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                >
                  <span className="fs-5 fw-bold">{faq.question}</span>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqsAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default FAQsPage;
