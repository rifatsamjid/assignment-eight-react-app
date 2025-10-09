import React from "react";
import logo from "../../logo.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="border-2 border-red-600 mt-24">
      <footer className="bg-black text-white flex gap-36 justify-center p-2">
        <div className="mt-7">
          <h1 onClick={() => navigate("/")} className="flex gap-1.5 mb-3">
            <img className="w-6" src={logo} alt="" /> HERO.IO
          </h1>
          <p>
            <small>
              Discover the ultimate collection of powerful <br /> and innovative
              apps — all crafted to elevate <br /> your digital lifestyle! From
              trending social <br /> platforms to next-gen productivity tools,{" "}
              <br />
              every app is built with performance, <br /> design, and user
              satisfaction in mind. <br /> Explore now and find the app that{" "}
              <br />
              transforms the way you connect, create, and live!
            </small>
          </p>
        </div>
        <div className="flex flex-col gap-12 mt-7">
          <h1>COMPANY</h1>
          <ul className="flex flex-col items-center gap-10">
            <li>
              <a href="">About us</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>

            <li>
              <a href="">Jobs</a>
            </li>

            <li>
              <a href="">Press kit</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-12 mt-7">
          <h1>LEGAL</h1>
          <ul className="flex flex-col items-center gap-10">
            <li>
              <a href="">Terms of use</a>
            </li>

            <li>
              <a href="">Privacy policy</a>
            </li>

            <li>
              <a href="">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
