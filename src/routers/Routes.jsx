import { createBrowserRouter } from "react-router-dom";

import Instructors from "../pages/Instructors";
import Main from "../pages/Main";
import MainLayout from "../layouts/MainLayout";
import Classes from "../pages/Classes";
// import Home from "../pages/Home/Home";
// import Login from "../pages/Login/Login";
// import SignUp from "../pages/SignUp/SignUp";
// import RoomDetails from "../pages/RoomDetails/RoomDetails";
// import PrivateRoute from "./PrivateRoute";
// import DashboardLayout from "../layouts/DashboardLayout";
// import AddRoom from "../pages/Dashboard/AddRoom";
// import { getRoom } from "../api/rooms";
// import MyBookings from "../pages/Dashboard/MyBookings";
// import MyListings from "../pages/Dashboard/MyListings";
// import ManageBookings from "../pages/Dashboard/ManageBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <MainLayout/>,
        },
        {
            path: "/instructors",
            element: <Instructors/>
        },
        {
            path: "/classes",
            element: <Classes/>,
        }
    ]
  }
]);
