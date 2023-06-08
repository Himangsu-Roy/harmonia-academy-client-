import { createBrowserRouter } from "react-router-dom";

import Instructors from "../pages/Instructors";
import Main from "../pages/Main";
import MainLayout from "../layouts/MainLayout";
import Classes from "../pages/Classes";
import Dashboard from "../pages/Dashboard";
import SelectedClasses from "../pages/SelectedClasses";
import EnrollClasses from "../pages/EnrollClasses";
import PaymentHistory from "../pages/PaymentHistory";
import AddClass from "../pages/AddClass";
import MyClasses from "../pages/MyClasses";
import ManageClasses from "../pages/ManageClasses";
import ManageUsers from "../pages/ManageUsers";
import NotFoundPage from "../pages/NotFoundPage";
import Registration from "../pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/registration",
        element: <Registration/>,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "manageclasses",
        element: <ManageClasses />,
      },
      {
        path: "manageusers",
        element: <ManageUsers/>,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "myclasses",
        element: <MyClasses />,
      },
      {
        path: "selectdclasses",
        element: <SelectedClasses />,
      },
      {
        path: "enrollclasses",
        element: <EnrollClasses />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);
