import { Outlet } from "react-router";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />

      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper" style={{ height: "100%", overflow: "scroll" }}>
      <main style={{ minHeight: "90vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
