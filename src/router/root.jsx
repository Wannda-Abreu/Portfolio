import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Root() {
  const location = useLocation();
  const isMacramePage = location.pathname === "/macrame";

  return (
    <>
      {!isMacramePage && <Header />}
      <main id="main-content" role="main" className="app-main">
        <Suspense
          fallback={
            <div
              style={{ padding: "3rem 1rem", textAlign: "center", fontWeight: 600 }}
              aria-live="polite"
            >
              Cargando…
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      {!isMacramePage && <Footer />}
    </>
  );
}

export default Root;


