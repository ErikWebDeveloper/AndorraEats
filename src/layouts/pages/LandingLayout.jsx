import { Outlet } from "react-router";

import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
const LandingLayout = () => {
  return (
    <main className="landing-page">
      <Navbar />
      <div className="wrapper" style={{minHeight: "90vh"}}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

const Navbar = () => {
  return (
    <header className="pt-5 text-center">
      <Logo emoji="🥗" />
      {/*<p className="lead fw-bold">La guía gastronómica más rápida y completa</p>*/}
    </header>
  );
};

export default LandingLayout;
