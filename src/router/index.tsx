import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/main_layout";
import ErrorPage from "../components/error_page";
import { lazy, Suspense } from "react";
import { Loading } from "../components/loading";

// eslint-disable-next-line
const HomePage = lazy(() => import("../views/homepage/home_page"));

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
    ],
  },
]);

export default routes;
