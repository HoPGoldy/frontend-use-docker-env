import ReactDOM from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ApiPage } from "./page-api";
import { HomePage } from "./page-home";

const routeList = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/pageA/detail/1",
    element: <ApiPage />,
  },
];

const router = createBrowserRouter(routeList, { basename: HOHO_CONFIG.PATH_BASENAME });

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
