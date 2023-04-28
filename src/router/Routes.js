import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Category from "../pages/category/Category";
import SubCategory from "../pages/category/sub-category/SubCategory";
import Product from "../pages/product/Product";
import Wallet from "../pages/wallet/Wallet";
import Order from "../pages/order/Order";
import Settings from "../pages/settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/sub-category",
        element: <SubCategory />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
