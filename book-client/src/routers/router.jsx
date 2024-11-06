import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";
import SignleBook from "../shop/SignleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import Upload from "../dashboard/Upload";
import ManageBooks from "../dashboard/ManageBooks";
import Edit from "../dashboard/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SignleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params?.id}`),
      },
    ],
  },
  // admin routes
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <Upload />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params?.id}`),
      },
    ],
  },
]);

export default router;
