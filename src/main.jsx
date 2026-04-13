import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles.global.css";
import Router from "./router/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
