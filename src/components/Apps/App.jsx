import React, { use, useEffect, useState } from "react";
import MainAppsCard from "./MainAppsCard";
import { CiSearch } from "react-icons/ci";
import ErrorApps from "../../App-Error.png";
import { useNavigate } from "react-router";

const App = ({ appsPromise }) => {
  const users = use(appsPromise);

  const [search, setSearch] = useState("");
  const [filterApps, setFilterApps] = useState(users);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = users.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterApps(filtered);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [search, users]);

  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <div className="flex flex-col lg:flex-row items-center gap-3 justify-between">
        <h1 className="text-xl font-bold">({users.length}) Apps Found</h1>
        <div className="flex items-center relative">
          <CiSearch className="m-2 absolute text-black" />
          <input
            className="border-1 border-gray-200 py-1.5 px-7 text-black bg-white rounded-xs"
            type="text"
            name=""
            placeholder="search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id=""
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      ) : filterApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filterApps.map((apps) => (
            <MainAppsCard key={apps.id} apps={apps}></MainAppsCard>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-12 text-lg font-medium flex flex-col justify-center gap-3">
          <figure className="flex justify-center">
            <img src={ErrorApps} alt="" />
          </figure>
          <h1 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h1>
          <p>
            The App you are requesting is not found on our system. please try
            another apps
          </p>

          <div onClick={() => navigate("/")} className="flex justify-center ">
            <button className="btn w-28 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white">
              Go Back!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
