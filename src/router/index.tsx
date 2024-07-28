import ErrorPage from "@/components/error_page";
import MainLayout from "@/components/layout/main_layout";
import { Loading } from "@/components/loading";
import Login from "@/views/authpage/login/Login";
import Register from "@/views/authpage/register/Register";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

/*eslint-disable*/
const HomePage = lazy(() => import("@/views/homepage/home_page"));
const AboutPage = lazy(() => import("@/views/aboutpage/about_page"));
const ContactPage = lazy(() => import("@/views/contactpage/contact_page"));
/*eslint-enable*/

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
