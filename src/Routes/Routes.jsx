import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ErrorApps from "../pages/ErrorPage/ErrorApps";

const Home = lazy(() => import("../pages/Home/Home"));
const Apps = lazy(() => import("../components/Apps/Apps"));
const InstallApps = lazy(() => import("../components/InstallApps/InstallApps"));
const AppsDetails = lazy(() => import("../components/Apps/AppsDetails"));

const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      // {
      //   path: "apps",
      //   element: (
      //     <Suspense fallback={<Spinner />}>
      //       <Apps />
      //     </Suspense>
      //   ),
      //   errorElement: <ErrorApps />,
      //   children: [
      //     {
      //       path: ":id",
      //       loader: () => fetch(`/Apps.json`),
      //       element: (
      //         <Suspense fallback={<Spinner />}>
      //           <AppsDetails />
      //         </Suspense>
      //       ),
      //     },
      //     {
      //       path: "*",
      //       element: <ErrorApps />,
      //     },
      //   ],
      // },
      {
        path: "apps",
        element: (
          <Suspense fallback={<Spinner />}>
            <Apps />
          </Suspense>
        ),
        errorElement: <ErrorApps></ErrorApps>,
      },
      {
        path: "install",
        loader: () => fetch(`/Apps.json`),
        element: (
          <Suspense fallback={<Spinner />}>
            <InstallApps />
          </Suspense>
        ),
      },
      {
        path: "apps/:id",
        loader: () => fetch(`/Apps.json`),
        element: (
          <Suspense fallback={<Spinner />}>
            <AppsDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
