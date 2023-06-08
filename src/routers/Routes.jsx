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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "myclasses",
        element: <MyClasses/>,
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
