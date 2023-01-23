import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Headbar = () => {
  return (
    <>
      <div className=" sticky top-0 z-10 w-full bg-clip-padding bg-gradient-to-r from-[#737378] to-transparent shadow-lg blur-backdrop-filter h-20">
        <nav className=" text-white flex justify-between antialiased">
          <span className="text-xl font-bold flex items-center my-4">
            <img
              width="150"
              className=" top-0 -my-12 scale-50 hover:scale-90 ease-in duration-500 "
              src="https://cdn4.iconfinder.com/data/icons/one-piece-anime/48/Sed-02-512.png"
              alt=""
            />
          </span>
          <ul className="px-20 py-4 h-20 flex space-x-7 justify-end">
            <li className="cursor-pointer hover:text-slate-900 hover:bg-slate-400 px-2 py-2 rounded-full">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-slate-900 hover:bg-slate-400 py-2 rounded-full px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-slate-900 hover:bg-slate-400 py-2 rounded-full px-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cursor-pointer hover:text-slate-900 hover:bg-slate-400 py-2 rounded-full px-2">
              <Link to="/project">Projects</Link>
            </li>
            {/* <Switcher />  for dark mode*/}
          </ul>
        </nav>
      </div>
    </>
  );
};

