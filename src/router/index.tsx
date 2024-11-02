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
        path: "products/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetailPage />
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
      {
        path: "blog",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "blog/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogDetailPage />
          </Suspense>
        ),
      },
      {
        path: "blog/:id/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "blog/create",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "history",
        element: (
          <Suspense fallback={<Loading />}>
            <HistoryPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loading />}>
        <DashboardLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "posts",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogManagePage />
          </Suspense>
        ),
      },
      {
        path: "posts/create",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "posts/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogDetailManage />
          </Suspense>
        ),
      },
      {
        path: "posts/:id/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <BlogEditPage />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductManagePage />
          </Suspense>
        ),
      },
      {
        path: "products/create",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductEdit />
          </Suspense>
        ),
      },
      {
        path: "products/:id/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductEdit />
          </Suspense>
        ),
      },

      {
        path: "software",
        element: (
          <Suspense fallback={<Loading />}>
            <SoftwarePage />
          </Suspense>
        ),
      },
      {
        path: "software/create",
        element: (
          <Suspense fallback={<Loading />}>
            <SoftwareManagePage />
          </Suspense>
        ),
      },
      {
        path: "software/:id/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <SoftwareManagePage />
          </Suspense>
        ),
      },
      {
        path: "software/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <SoftwareDetailPage />
          </Suspense>
        ),
      },
      {
        path: "types",
        element: (
          <Suspense fallback={<Loading />}>
            <TypesPage />
          </Suspense>
        ),
      },
      {
        path: "types/create",
        element: (
          <Suspense fallback={<Loading />}>
            <TypesManagePage />
          </Suspense>
        ),
      },
      {
        path: "types/:id/edit",
        element: (
          <Suspense fallback={<Loading />}>
            <TypesManagePage />
          </Suspense>
        ),
      },
      {
        path: "types/:id",
        element: (
          <Suspense fallback={<Loading />}>
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
