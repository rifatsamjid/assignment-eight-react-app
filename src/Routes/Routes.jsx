import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../components/Apps/Apps";
import InstallApps from "../components/InstallAppps/InstallApps";
import AppsDetails from "../components/Apps/AppsDetails";
import ErrorApps from "../pages/ErrorPage/ErrorApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "apps",
        Component: Apps,
        errorElement: <ErrorApps></ErrorApps>,
      },
      {
        path: "install",
        Component: InstallApps,
      },
      {
        path: "apps/:id",
        loader: () => fetch(`/Apps.json`),
        Component: AppsDetails,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

//  {
//         path: "users/:userID",
//         loader: ({ params }) =>
//           fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
//         Component: UserDetails,
//       },
