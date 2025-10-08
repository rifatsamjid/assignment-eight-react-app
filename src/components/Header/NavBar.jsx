import React from "react";
import { NavLink } from "react-router";
import logo from "../../logo.png";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-base-100 shadow-sm p-2">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-red-400 font-bold"
                    : "text-green-400 hover:text-amber-500"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-red-400 font-bold"
                    : "text-green-400 hover:text-amber-500"
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-red-400 font-bold"
                    : "text-green-400 hover:text-amber-500"
                }
                to="/install"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-7 h-7" src={logo} alt="" />
          HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-7  items-center  px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline text-red-400 font-bold"
                  : "text-green-400 hover:text-amber-500"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-red-400 font-bold"
                    : "text-green-400 hover:text-amber-500"
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline text-red-400 font-bold"
                  : "text-green-400 hover:text-amber-500"
              }
              to="/install"
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="flex p-2 rounded-sm items-center gap-1.5 text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
          <FaGithub className="text-white" />
          Contribute
        </h3>
      </div>
    </div>
  );
};

export default NavBar;
