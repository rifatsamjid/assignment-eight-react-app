import React from "react";
import { FiDownload } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

const MainAppsCard = ({ apps }) => {
  console.log(apps);
  return (
    <div className="border bg-white p-4 m-4 rounded-xl shadow-sm flex flex-col justify-center">
      <div className="flex justify-center">
        <img className="w-48" src={apps.image} alt="" />
      </div>
      <div className="mt-2">
        <h1 className="font-bold">{apps.title}</h1>
        <div className="flex justify-between items-center mt-3">
          <p className="flex gap-0.5 items-center font-bold rounded-sm text-green-400 bg-green-50 p-1.5">
            <FiDownload /> {apps.downloads}
          </p>
          <p className="flex gap-0.5 items-center bg-amber-50 text-amber-400 p-1.5 rounded-sm">
            <IoStar />
            {apps.ratingAvg}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainAppsCard;
