import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Carga los archivos de traducción (opcional)
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    fallbackLng: "es", // Idioma predeterminado
    debug: true, // Habilita logs de depuración en desarrollo
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Ruta para cargar archivos JSON de traducción
    },
  });

export default i18n;
