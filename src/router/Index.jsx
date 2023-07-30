import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart";
import Products from "./Products";
export default function Index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
      children: [
        { index: true, element: <Cart /> },
        { path: "/shop/", element: <Products /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Cart></Cart>
      </RouterProvider>
    </>
  );
}
