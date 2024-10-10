import { createBrowserRouter } from "react-router-dom";
import Register from "./src/components/register";
import Login from "./src/components/login";
import MainPages from "./src/pages/MainPages";
import CreateInventory from "./src/components/CreateInventory";

export const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <MainPages/>
    },
    {
        path: "/create",
        element: <CreateInventory/>
    }


    

])