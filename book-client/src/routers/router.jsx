import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import SellBooks from "../pages/sell books/SellBooks";
import Blog from "../pages/blog/Blog";
import SignleBook from "../shop/SignleBook";

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
        path: "/admin/dashboard",
        element: <SellBooks />,
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
]);

export default router;
