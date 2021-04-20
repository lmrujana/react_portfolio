import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="maximum-red">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-500 text-4xl font-bold poppins tracking-widest"
          >
            Luis Rujana
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500"
            activeClassName="text-red-100 prussian-blue"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500"
            activeClassName="text-red-100 prussian-blue"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-yellow-500"
            activeClassName="text-red-100 prussian-blue"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/lmrujana"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/luis-rujana-a410a4112"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
        </div>
      </div>
    </header>
  );
}
