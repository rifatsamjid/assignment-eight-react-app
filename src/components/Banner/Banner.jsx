import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import hero from "../../hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          We Build <br />
          <span className="text-purple-400">Productive</span> Apps
        </h1>
        <p>
          <small>
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </small>
        </p>
        <div className="mt-5 flex gap-3 justify-center">
          <Link
            to="https://play.google.com/store/apps"
            target="_blank"
            className="font-bold btn"
          >
            <FaGooglePlay className="text-2xl" />
            Google Play
          </Link>
          <Link
            to="https://apps.apple.com/"
            target="_blank"
            className="font-bold btn"
          >
            <FaAppStoreIos className="text-blue-700 text-2xl" />
            App Store
          </Link>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-center items-center">
        <div>
          <img className="w-2xl" src={hero} alt="" />
        </div>
        <div className=" w-full  text-center text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
          <h1 className="text-2xl mt-4">Trusted by Millions, Built for You</h1>
          <div className="grid grid-cols-1 gap-9 md:grid-cols-3 justify-around mt-5 mb-8">
            <div className="font-bold">
              <p>Total Downloads</p>
              <h2 className="text-2xl">29.6M</h2>
              <p>21% More Than Last Month</p>
            </div>
            <div className="font-bold">
              <p>Total Downloads</p>
              <h2 className="text-2xl">29.6M</h2>
              <p>21% More Than Last Month</p>
            </div>
            <div className="font-bold">
              <p>Total Downloads</p>
              <h2 className="text-2xl">29.6M</h2>
              <p>21% More Than Last Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
