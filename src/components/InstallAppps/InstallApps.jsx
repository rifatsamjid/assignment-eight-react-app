import React from "react";

const InstallApps = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6">
      <div>
        <h1 className="text-4xl font-bold mb-3">Your Installed Apps</h1>
        <p className="text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex items-center justify-between w-full gap-16">
        <h2 className="font-bold">1 Apps Found</h2>
        <select defaultValue="Pick a color" className="select appearance-none">
          <option>Sort By Size</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
      </div>
      <div className="flex justify-between bg-white gap-5 rounded-sm p-2 w-full items-center">
        <div className="flex gap-7">
          <img src="" alt="" />
          <div className="flex flex-col gap-4">
            <h2>Forest: Focus for Productivity</h2>
            <div className="flex gap-2">
              <p>9M</p>
              <p>5</p>
              <p>250MB</p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn bg-green-600">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default InstallApps;
