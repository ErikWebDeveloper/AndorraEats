import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      className="text-light pt-4 bg-dark"
      
    >
      <div className="container">
        <div className="row">
          {/* Sección de enlaces */}
          <div className="col-md-4 mb-3">
            <h5>🔗 {t("components.footer.links")}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/faqs" className="link text-decoration-none">
                  {t("components.footer.faqs")}
                </a>
              </li>
              <li>
                <a href="/about" className="link text-decoration-none">
                  {t("components.footer.about")}
                </a>
              </li>
              <li>
                <a href="/terms" className="link text-decoration-none">
                  {t("components.footer.about")}
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/xqEvBxPnVzc81q2F6"
                  target="_blank"
                  className="link text-decoration-none"
                >
                  {t("components.footer.form")}
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de contacto */}
          <div className="col-md-4 mb-3">
            <h5>👋 {t("components.footer.contact")}</h5>
            <p className="m-0">
              <small>{t("components.footer.email")}:</small>
            </p>
            <a
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
              className="text-warning text-decoration-none"
            >
              {import.meta.env.VITE_CONTACT_EMAIL}
            </a>
            <p className="mt-2 mb-0">
              <small>Instagram:</small>
            </p>
            <a
              href="https://www.instagram.com/andorra.eats.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning text-decoration-none"
            >
              @andorra.eats.app
            </a>
          </div>

          {/* Sección de derechos reservados */}
          <div className="col-md-4 mb-3">
            <Link
              className="text-decoration-none fs-5"
              style={{ fontFamily: "gagalin-regular", lineHeight: "1" }}
            >
              <span className="text-warning">Andorra</span>{" "}
              <span style={{ color: "#ff3131" }}>Eats</span>
            </Link>
            <p className="small">
              &copy; {new Date().getFullYear()} Andorra Eats.
            </p>
            <p className="small">{t("components.footer.slogan")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
