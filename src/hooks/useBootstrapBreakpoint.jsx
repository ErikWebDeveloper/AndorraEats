import { useState, useEffect } from "react";

const useBootstrapBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    // Función para verificar el tamaño de la ventana y asignar el tamaño correspondiente
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setBreakpoint("xs"); // Extra small
      } else if (width >= 576 && width < 768) {
        setBreakpoint("sm"); // Small
      } else if (width >= 768 && width < 992) {
        setBreakpoint("md"); // Medium
      } else if (width >= 992 && width < 1200) {
        setBreakpoint("lg"); // Large
      } else if (width >= 1200) {
        setBreakpoint("xl"); // Extra large
      }
    };

    // Llamamos a la función para establecer el breakpoint inicial
    handleResize();

    // Agregamos el evento resize para manejar cambios de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBootstrapBreakpoint;
