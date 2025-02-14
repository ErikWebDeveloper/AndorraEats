import { Outlet } from "react-router";

import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
const LandingLayout = () => {
  return (
    <main className="landing-page">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

const Navbar = () => {
  return (
    <header className="py-5 text-center">
      <Logo emoji="🥗" />
      <p className="lead fw-bold">
        Nuestra plataforma ofrece una forma rápida y fácil de encontrar
        restaurantes en Andorra.
      </p>
    </header>
  );
};

export default LandingLayout;
