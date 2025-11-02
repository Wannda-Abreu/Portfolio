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
        <Outlet />
      </main>
      {!isMacramePage && <Footer />}
    </>
  );
}

export default Root;

