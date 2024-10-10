import { createBrowserRouter } from "react-router-dom";
import Register from "./src/components/register";
import Login from "./src/components/login";
import MainPages from "./src/pages/MainPages";
import CreateInventory from "./src/components/CreateInventory";
import UpdateInventory from "./src/components/UpdateInventory";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainPages />,
  },
  {
    path: "/create",
    element: <CreateInventory />,
  },
  {
    path: "/update/:id",
    element: <UpdateInventory />,
  },
]);
