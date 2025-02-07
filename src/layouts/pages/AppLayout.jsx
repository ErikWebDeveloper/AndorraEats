import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

// Componentes
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />

      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Asegúrate de que el scroll se aplique al contenedor correcto
    const wrapper = document.querySelector(".wrapper") || window; // Si no hay wrapper, usa el `window`
    if (wrapper === window) {
      window.scrollTo(0, 0); // Scroll global (en caso de fallback)
    } else {
      wrapper.scrollTo({ top: 0, behavior: "auto" }); // Scroll interno en el contenedor
    }
  }, [location.pathname]); // Se ejecuta al cambiar de ruta

  return (
    <div className="wrapper" style={{ height: "90vh", overflow: "scroll" }}>
      <div style={{ minHeight: "100%" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
