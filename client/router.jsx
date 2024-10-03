import { createBrowserRouter } from "react-router-dom";
import Register from "./src/components/register";
import Login from "./src/components/login";

export const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    


    

])