import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Root() {
  const location = useLocation();
  const isMacramePage = location.pathname === "/macrame";

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      {!isMacramePage && <Header />}
      <main id="main-content" role="main" className="app-main">
        <Suspense fallback={<div className="loading-fallback">Cargando...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {!isMacramePage && <Footer />}
    </div>
  );
}

export default Root;
