import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "./../layouts/MainLayout";
import AllProperties from "../pages/AllProperties/AllProperties";
import PropertiesDetails from "../pages/AllProperties/PropertiesDetails";
import OfferNow from "./../components/OfferNow/OfferNow";
import BoughtProperties from "../components/BoughtProperties/BoughtProperties";
import AllUsers from "../components/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProperty from "../pages/DashBoard/Agent/AddProperty";
import MyListings from "../pages/DashBoard/Agent/MyListings";
import AgentRoute from "./AgentRoute";
import ManageProperty from "../pages/DashBoard/Admin/ManageProperty/ManageProperty";
import AdminRoute from './AdminRoute';
import ManageUser from "../pages/DashBoard/Admin/ManageUser/ManageUser";
const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProperties",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "allProperties/propertiesDetails/:id",
        element: (
          <PrivateRoute>
            <PropertiesDetails></PropertiesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/properties/${params.id}`),
      },
      {
        path: "offerNow/:id",
        element: <OfferNow></OfferNow>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/properties/${params.id}`),
      },
      {
        path: "/offers",
        element: <BoughtProperties></BoughtProperties>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path:'addProperty',
        element: <PrivateRoute><AgentRoute><AddProperty></AddProperty></AgentRoute></PrivateRoute>
      },
      {
        path: 'myListings',
        element: <PrivateRoute><AgentRoute><MyListings></MyListings></AgentRoute></PrivateRoute>
      },
      {
        path: 'manageUsers',
        element: <PrivateRoute><AdminRoute><ManageUser></ManageUser></AdminRoute></PrivateRoute>
      },
      {
        path: 'manageProperties',
        element: <PrivateRoute><AdminRoute><ManageProperty></ManageProperty></AdminRoute></PrivateRoute>
      }
    ],
  },
]);

export default MainRoutes;
