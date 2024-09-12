import ErrorPage from "@/components/error_page";
import { Loading } from "@/components/loading";
import Login from "@/views/authpage/login/Login";
import Register from "@/views/authpage/register/Register";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

/*eslint-disable*/
const MainLayout = lazy(() => import("@/components/layout/main_layout"));
const HomePage = lazy(() => import("@/views/homepage/home_page"));
const AboutPage = lazy(() => import("@/views/aboutpage/about_page"));
const ContactPage = lazy(() => import("@/views/contactpage/contact_page"));
const ProductsPage = lazy(() => import("@/views/productpage/product_page"));
const ShoppingPage = lazy(() => import("@/views/shoppingpage/shopping_page"));
/*eslint-enable*/

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loading />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: "shopping-cart",
        element: (
          <Suspense fallback={<Loading />}>
            <ShoppingPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);

export default routes;
