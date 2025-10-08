import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import HomeApps from "./HomeApps";

const homeAppsPromise = fetch("/homeApp.json").then((rest) => rest.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <HomeApps homeAppsPromise={homeAppsPromise}></HomeApps>
      </Suspense>
    </div>
  );
};

export default Home;
