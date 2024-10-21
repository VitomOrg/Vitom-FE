import ErrorPage from "@/components/error_page";
import DashboardLayout from "@/components/layout/dashboard_layout";
import { Loading } from "@/components/loading";
import PrivateRoute from "@/components/private-route";
import Login from "@/views/authpage/login/login";
import Register from "@/views/authpage/register/register";
import ProductEdit from "@/views/productmanage/components/product-edit";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

/*eslint-disable*/
const MainLayout = lazy(() => import("@/components/layout/main_layout"));
const HomePage = lazy(() => import("@/views/homepage/home_page"));
const DashboardPage = lazy(
  () => import("@/views/dashboardmanage/dashboard_page")
);
const AboutPage = lazy(() => import("@/views/aboutpage/about_page"));
const ContactPage = lazy(() => import("@/views/contactpage/contact_page"));
const ProductsPage = lazy(
  () => import("@/views/productpage/product-list/product_page")
);

const ProductManagePage = lazy(
  () => import("@/views/productmanage/product-manage")
);
const ProductDetailPage = lazy(
  () => import("@/views/productpage/product-detail/product_detail_page")
);

const ShoppingPage = lazy(() => import("@/views/shoppingpage/shopping_page"));
const BlogPage = lazy(() => import("@/views/blogpage/blog-page"));
const BlogDetailPage = lazy(() => import("@/views/blogpage/blog-detail-page"));
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
        element: <ProductDetailPage />,
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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute roles={["Artist", "Admin"]}>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
        element: <ProductEdit />,
      },
      {
        path: "product/:id/edit",
        element: <ProductEdit />,
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
