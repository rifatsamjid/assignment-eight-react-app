import React, { use } from "react";
import AppsCard from "./AppsCard";
import { useNavigate } from "react-router";

const HomeApps = ({ homeAppsPromise }) => {
  const apps = use(homeAppsPromise);
  const navigate = useNavigate();

  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="mt-2.5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-4">
        {apps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
      <div className=" text-white font-bold flex justify-center items-center  ">
        <button
          onClick={() => navigate("/apps")}
          className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-1.5 rounded-sm w-28"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default HomeApps;
