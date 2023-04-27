import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Category from "../pages/category/Category";
import SubCategory from "../pages/category/sub-category/SubCategory";
import Product from "../pages/product/Product";
import OrderPage from "../pages/order/OrderPage";

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
        element: <OrderPage />,
      },
    ],
  },
]);

export default router;
