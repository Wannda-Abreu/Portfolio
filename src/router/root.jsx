import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Root() {
  const location = useLocation();

  // Condicionar el renderizado del Header y Footer
  const isMacramePage = location.pathname === "/macrame";

  return (
    <>
      {!isMacramePage && <Header />}
      <div>
        <Outlet />
      </div>
      {!isMacramePage && <Footer />}
    </>
  );
}

export default Root;

