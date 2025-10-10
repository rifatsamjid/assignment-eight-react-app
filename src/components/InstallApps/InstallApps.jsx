import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps, removeApps } from "../../utility/addToDB";
import AppsCard from "./AppsCard";

const InstallApps = () => {
  const [appList, setAppList] = useState([]);

  const [sortOrder, setSortOrder] = useState("none");

  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApps();
    const convertAppStored = storedAppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) => convertAppStored.includes(app.id));
    setAppList(myAppList);
  }, [data]);

  const handleUninstall = (id) => {
    removeApps(id);
    setAppList((prev) => prev.filter((app) => app.id !== id));
    setSortOrder((prev) => prev);
  };

  const sortedApps = [...appList].sort((a, b) => {
    const parseDownloads = (value) => {
      if (typeof value === "string") {
        if (value.toLowerCase().includes("m")) {
          return parseFloat(value) * 1_000_000;
        } else if (value.toLowerCase().includes("k")) {
          return parseFloat(value) * 1_000;
        }
        return parseFloat(value);
      }
      return value;
    };

    const aDownloads = parseDownloads(a.downloads);
    const bDownloads = parseDownloads(b.downloads);

    if (sortOrder === "low-high") {
      return aDownloads - bDownloads;
    } else if (sortOrder === "high-low") {
      return bDownloads - aDownloads;
    }
    return 0;
  });

  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 mt-10">
      <div>
        <h1 className="text-4xl font-bold mb-3">Your Installed Apps</h1>
        <p className="text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16">
        <h2 className="font-bold">{appList.length} Apps Found</h2>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="select appearance-none border border-gray-300 rounded-md px-2 py-1"
        >
          <option value="none">Sort By Downloads</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-Low</option>
        </select>
      </div>
      {sortedApps.length > 0 ? (
        sortedApps.map((apps) => (
          <AppsCard
            key={apps.id}
            apps={apps}
            handleUninstall={handleUninstall}
          />
        ))
      ) : (
        <p className="text-gray-500 mt-6">No apps found.</p>
      )}
    </div>
  );
};

export default InstallApps;
