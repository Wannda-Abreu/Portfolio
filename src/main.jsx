import ReactDOM from "react-dom/client";
import Router from "./router/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={Router} />
  </>
);
