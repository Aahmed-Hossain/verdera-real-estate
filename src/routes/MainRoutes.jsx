import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from './../layouts/MainLayout';
import AllProperties from "../pages/AllProperties/AllProperties";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/allProperties',
                element: <AllProperties></AllProperties>
            }

        ]
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default MainRoutes;