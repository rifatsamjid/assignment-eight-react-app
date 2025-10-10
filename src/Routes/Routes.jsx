import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../components/Apps/Apps";
import AppsDetails from "../components/Apps/AppsDetails";
import ErrorApps from "../pages/ErrorPage/ErrorApps";
import InstallApps from "../components/InstallApps/InstallApps";

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
      // {
      //   path: "install",
      //   loader: () => fetch(`/Apps.json`),
      //   // Component: InstallApps,
      //   Component: InstallApps,
      // },
      {
        path: "install",
        loader: () => fetch(`/Apps.json`),
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
