import { useEffect } from "react";
import { useLocation } from "react-router";

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper"); // Selecciona el contenedor con scroll
    if (wrapper) {
      wrapper.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza hacia arriba
    }
  }, [location.pathname]); // Se ejecuta al cambiar de ruta
};

export default useScrollToTop;
