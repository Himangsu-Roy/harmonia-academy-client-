import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
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
  }
]);
