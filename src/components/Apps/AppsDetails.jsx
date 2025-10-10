import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { addToStoredDB, getStoredApps } from "../../utility/addToDB";

const AppsDetails = () => {
  const app = useLoaderData();
  const { id } = useParams();
  const appID = parseInt(id);
  const singleApp = app.find((data) => data.id === appID);
  const {
    title,
    image,
    downloads,
    companyName,
    ratingAvg,
    size,
    reviews,
    ratings,
    description,
  } = singleApp;

  const [installed, setInstall] = useState(false);

  useEffect(() => {
    const storedApps = getStoredApps();
    if (storedApps.includes(appID)) {
      setInstall(true);
    } else {
      setInstall(false);
    }
  }, [appID]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedApps = getStoredApps();
      if (!storedApps.includes(appID)) {
        setInstall(false);
      }
    };
    window.addEventListener("storageUpdate", handleStorageChange);
    return () => {
      window.removeEventListener("storageUpdate", handleStorageChange);
    };
  }, [appID]);

  const handleAddApps = (id) => {
    addToStoredDB(id);
    setInstall(true);
  };

  return (
    <div className="mt-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 border-b-1 border-gray-400 p-4 bg-white rounded-xl">
        <img className="bg-white w-44 p-2 rounded-sm" src={image} alt="" />
        <div className="flex flex-col gap-14">
          <div className="border-b-1 border-gray-400 p-2">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="mt-4">
              Developed by
              <span className="text-purple-400"> {companyName}</span>
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <FiDownload className="text-2xl text-green-600" />
              <p>Downloads</p>
              <p className="font-bold text-2xl">{downloads}</p>
            </div>
            <div>
              <FaStar className="text-2xl text-amber-600" />
              <p>Average Ratings</p>
              <p className="font-bold text-2xl">{ratingAvg}</p>
            </div>
            <div>
              <FaThumbsUp className="text-2xl text-purple-600" />
              <p>Total Reviews</p>
              <p className="font-bold text-2xl">{reviews}</p>
            </div>
          </div>
          <button
            onClick={() => handleAddApps(id)}
            className="btn w-48 bg-green-400 text-white"
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="mt-10 w-full mx-auto bg-white p-4 rounded-xl shadow">
        <h1 className="font-bold text-2xl">Rating</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={1100} height={400} data={ratings} layout="vertical">
            <XAxis />
            <YAxis reversed type="category" dataKey="name" stroke="#8884d8" />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="count" fill="#8884d8" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-10 bg-white p-4 rounded-xl shadow">
        <h1 className="font-bold text-xl">Description</h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
