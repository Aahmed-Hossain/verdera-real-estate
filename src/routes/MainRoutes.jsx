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
import UserRoute from './UserRoute'
import ManageUser from "../pages/DashBoard/Admin/ManageUser/ManageUser";
import MyWishList from "../pages/DashBoard/User/MyWishList/MyWishList";
import MyReviews from "../pages/DashBoard/User/ReviewNow/MyReviews";
import ManageReviews from "../pages/DashBoard/Admin/ManageReviews/ManageReviews";
import UpdateProperties from "../pages/DashBoard/Agent/UpdateProperties";
import OfferedProperties from "../pages/DashBoard/Agent/OfferedProperties";
import MySoldProperties from "../pages/DashBoard/Agent/MySoldProperties";
import Profile from "../pages/DashBoard/Profile/Profile";
import MyBoughtProperties from "../pages/DashBoard/User/Payment/MyBoughtProperties/MyBoughtProperties";
import Statistics from "../pages/DashBoard/Agent/Statistics";


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
          
            <PropertiesDetails></PropertiesDetails>
         
        ),
        loader: ({ params }) =>
          fetch(`https://real-estate-company-server.vercel.app/properties/${params.id}`),
      },
      {
        path: "offerNow/:id",
        element:<PrivateRoute> <OfferNow></OfferNow></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://real-estate-company-server.vercel.app/properties/${params.id}`),
      },
      // {
      //   path: "offerNowFromWishList/:id",
      //   element: <OfferNowFromWishList></OfferNowFromWishList>,
      //   loader: ({ params }) =>
      //     fetch(`https://real-estate-company-server.vercel.app/allWishList/${params.id}`),
      // },
      
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
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'myWishList',
        element: <PrivateRoute><UserRoute><MyWishList></MyWishList></UserRoute></PrivateRoute>

      },
      {
        path: 'myReviews',
        element: <PrivateRoute><UserRoute><MyReviews></MyReviews></UserRoute></PrivateRoute>

      },
      {
        path: "myProperties",
        element: <PrivateRoute><UserRoute><BoughtProperties></BoughtProperties></UserRoute></PrivateRoute>,
      },
      {
        path: "myBoughtProperty",
        element: <PrivateRoute><UserRoute><MyBoughtProperties></MyBoughtProperties></UserRoute></PrivateRoute>,
      },
      {
        path: 'manageUsers',
        element: <PrivateRoute><AdminRoute><ManageUser></ManageUser></AdminRoute></PrivateRoute>
      },
      {
        path:'addProperty',
        element: <PrivateRoute><AgentRoute><AddProperty></AddProperty></AgentRoute></PrivateRoute>
      },
      {
        path: 'myListings',
        element: <PrivateRoute><AgentRoute><MyListings></MyListings></AgentRoute></PrivateRoute>
      },
      {
        path: '',
        element: <PrivateRoute><AgentRoute><Statistics></Statistics></AgentRoute></PrivateRoute>
      },
      {
        path: 'offeredProperties',
        element: <PrivateRoute><AgentRoute><OfferedProperties></OfferedProperties></AgentRoute></PrivateRoute>
      },
      {
        path: 'mySoldProperties',
        element: <PrivateRoute><AgentRoute><MySoldProperties></MySoldProperties></AgentRoute></PrivateRoute>
      },
      {
        path: "myListings/updateProperties/:id",
        element: <PrivateRoute><AgentRoute><UpdateProperties></UpdateProperties> </AgentRoute></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://real-estate-company-server.vercel.app/properties/${params.id}`)
      },
      {
        path: 'manageProperties',
        element: <PrivateRoute><AdminRoute><ManageProperty></ManageProperty></AdminRoute></PrivateRoute>
      },
      {
        path: 'manageReviews',
        element: <PrivateRoute><AdminRoute><ManageReviews></ManageReviews></AdminRoute></PrivateRoute>
      }
    ],
  },
]);

export default MainRoutes;
