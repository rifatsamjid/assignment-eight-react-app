import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../components/Apps/Apps";
import InstallApps from "../components/InstallAppps/InstallApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "install",
        Component: InstallApps,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Root,
//     children: [
//       { index: true, Component: Home },
//       { path: "mobiles", Component: Mobiles },
//       { path: "laptops", Component: Laptops },
//       {
//         path: "users",
//         loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
//         Component: Users,
//       },
