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
import Login from "../pages/Login";
import UpdateClass from "../pages/UpdateClass";
import Payment from "../pages/Payment";
import PrivateRouter from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFoundPage />,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "manageclasses",
        element: (
          <PrivateRouter>
            <ManageClasses />
          </PrivateRouter>
        ),
      },
      {
        path: "manageusers",
        element: (
          <PrivateRouter>
            <ManageUsers />
          </PrivateRouter>
        ),
      },
      {
        path: "addclass",
        element: (
          <PrivateRouter>
            <AddClass />
          </PrivateRouter>
        ),
      },
      {
        path: "myclasses",
        element: (
          <PrivateRouter>
            <MyClasses />
          </PrivateRouter>
        ),
      },
      {
        path: "selectdclasses",
        element: (
          <PrivateRouter>
            <SelectedClasses />
          </PrivateRouter>
        ),
      },
      {
        path: "enrollclasses",
        element: (
          <PrivateRouter>
            <EnrollClasses />
          </PrivateRouter>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <PrivateRouter>
            <PaymentHistory />
          </PrivateRouter>
        ),
      },
      {
        path: "myclasses/update/:id",
        element: (
          <PrivateRouter>
            <UpdateClass />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/class/${params.id}`),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRouter>
            <Payment />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/selectClass/${params.id}`),
      },
    ],
  },
]);
