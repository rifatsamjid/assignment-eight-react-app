import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../components/Apps/Apps";
import InstallApps from "../components/InstallAppps/InstallApps";
import HomeApps from "../pages/Home/HomeApps";

// const homeAppsPromise = fetch("/homeApp.json").then((rest) => rest.json());

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
      // {
      //   path: "/",
      //   element: (
      //     <Suspense fallback={<span>Loading....</span>}>
      //       <HomeApps homeAppsPromise={homeAppsPromise}></HomeApps>
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

// {
//         path: "user2",
//         element: (
//           <Suspense fallback={<span>Loading....</span>}>
//             <User2 userPromise={userPromise}></User2>
//           </Suspense>
//         ),
//       },

// const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

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
//       {
//         path: "user2",
//         element: (
//           <Suspense fallback={<span>Loading....</span>}>
//             <User2 userPromise={userPromise}></User2>
//           </Suspense>
//         ),
//       },
//       {
//         path: "users/:userID",
//         loader: ({ params }) =>
//           fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
//         Component: UserDetails,
//       },
//       {
//         path: "posts",
//         loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
//         Component: Posts,
//       },
//       {
//         path: "posts/:postID",
//         loader: ({ params }) =>
//           fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
//         Component: PostDetails,
//       },
//     ],
//   },
