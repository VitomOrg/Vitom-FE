import ErrorPage from "@/components/error_page";
import { Loading } from "@/components/loading";
// import PrivateRoute from "@/components/private-route";
import Login from "@/views/authpage/login/login";
import Register from "@/views/authpage/register/register";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

/*eslint-disable*/
const MainLayout = lazy(() => import("@/components/layout/main_layout"));
const DashboardLayout = lazy(
  () => import("@/components/layout/dashboard_layout")
);

// main-layout
const HomePage = lazy(() => import("@/views/main-layout/home-page/home_page"));
const AboutPage = lazy(
  () => import("@/views/main-layout/about-page/about_page")
);
const ContactPage = lazy(
  () => import("@/views/main-layout/contact-page/contact_page")
);
const ProductsPage = lazy(
  () => import("@/views/main-layout/product-page/product-page/product_page")
);
const ShoppingPage = lazy(
  () => import("@/views/main-layout/shopping-page/shopping_page")
);

const ProductDetailPage = lazy(
  () =>
    import(
      "@/views/main-layout/product-page/product-detail/product_detail_page"
    )
);

const BlogPage = lazy(() => import("@/views/main-layout/blog-page/blog-page"));
const BlogDetailPage = lazy(
  () => import("@/views/main-layout/blog-page/blog-detail-page")
);
const HistoryPage = lazy(
  () => import("@/views/main-layout/history-order-page/history-page")
);

// dashboard-layout
const DashboardPage = lazy(
  () => import("@/views/dashboard-layout/dashboard-page/dashboard_page")
);
const ProductEdit = lazy(
  () => import("@/views/dashboard-layout/product-page/product-edit")
);

const ProductDetailManage = lazy(
  () => import("@/views/dashboard-layout/product-page/product-detail")
);
const ProductManagePage = lazy(
  () => import("@/views/dashboard-layout/product-page/product-manage")
);

const BlogManagePage = lazy(
  () => import("@/views/dashboard-layout/post-page/post-manage")
);

const BlogDetailManage = lazy(
  () => import("@/views/dashboard-layout/post-page/post-detail")
);
const BlogEditPage = lazy(
  () => import("@/views/dashboard-layout/post-page/post-edit")
);

const SoftwarePage = lazy(
  () => import("@/views/dashboard-layout/software-page/software-page")
);
const SoftwareDetailPage = lazy(
  () => import("@/views/dashboard-layout/software-page/software-detail")
);
const SoftwareManagePage = lazy(
  () => import("@/views/dashboard-layout/software-page/software-edit")
);

const TypesPage = lazy(
  () => import("@/views/dashboard-layout/types-page/types-page")
);

const TypesDetailPage = lazy(
  () => import("@/views/dashboard-layout/types-page/types-detail")
);

const TypesManagePage = lazy(
  () => import("@/views/dashboard-layout/types-page/types-edit")
);
/*eslint-enable*/

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="grid w-screen h-screen place-content-center">
            <Loading />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: "products/:id",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: "shopping-cart",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ShoppingPage />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "blog/:id",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogDetailPage />
          </Suspense>
        ),
      },
      {
        path: "blog/:id/edit",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "blog/create",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "history",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <HistoryPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense
        fallback={
          <div className="grid w-screen h-screen place-content-center">
            <Loading />
          </div>
        }
      >
        <DashboardLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "posts",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogManagePage />
          </Suspense>
        ),
      },
      {
        path: "posts/create",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "posts/:id",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogDetailManage />
          </Suspense>
        ),
      },
      {
        path: "posts/:id/edit",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ProductManagePage />
          </Suspense>
        ),
      },
      {
        path: "products/:id",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ProductDetailManage />
          </Suspense>
        ),
      },
      {
        path: "products/create",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ProductEdit />
          </Suspense>
        ),
      },
      {
        path: "products/:id/edit",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <ProductEdit />
          </Suspense>
        ),
      },

      {
        path: "software",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <SoftwarePage />
          </Suspense>
        ),
      },
      {
        path: "software/create",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <SoftwareManagePage />
          </Suspense>
        ),
      },
      {
        path: "software/:id/edit",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <SoftwareManagePage />
          </Suspense>
        ),
      },
      {
        path: "software/:id",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <SoftwareDetailPage />
          </Suspense>
        ),
      },
      {
        path: "types",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <TypesPage />
          </Suspense>
        ),
      },
      {
        path: "types/create",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <TypesManagePage />
          </Suspense>
        ),
      },
      {
        path: "types/:id/edit",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <TypesManagePage />
          </Suspense>
        ),
      },
      {
        path: "types/:id",
        element: (
          <Suspense
            fallback={
              <div className="grid w-screen h-screen place-content-center">
                <Loading />
              </div>
            }
          >
            <TypesDetailPage />
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
