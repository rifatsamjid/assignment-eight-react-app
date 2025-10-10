import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const AppsCard = ({ apps }) => {
  console.log(apps.title);
  return (
    <div className="flex justify-between bg-white gap-5 rounded-sm p-2 w-full items-center">
      <div className="flex items-center gap-7">
        <img className="w-28" src={apps.image} alt="" />
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl">{apps.title}</h2>
          <div className="flex gap-2">
            <p className="flex items-center font-bold text-green-500">
              <MdOutlineFileDownload />
              {apps.downloads}
            </p>
            <p className="flex items-center ml-4 mr-4 font-bold text-amber-500">
              <FaStar />
              {apps.ratingAvg}
            </p>
            <p>{apps.size}MB</p>
          </div>
        </div>
      </div>
      <div>
        <button className="btn bg-green-600">Uninstall</button>
      </div>
    </div>
  );
};

export default AppsCard;
