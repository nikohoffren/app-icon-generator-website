import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
    <nav className="bg-gradient py-4">
        <ul className="flex justify-center text-lg">
            <li className="mr-6">
                <img
                    src="icon_512x512.png"
                    alt="App Icon Generator logo"
                    className="mx-auto h-8 w-8 rounded-full mx-6"
                />
            </li>
            <li className="mr-6">
                <NavLink
                    end
                    to="/"
                    className="text-white hover:text-gray-300 btn-bg-gradient py-2 px-4 transition duration-300"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className="text-white hover:text-gray-300 btn-bg-gradient py-2 px-4 transition duration-300"
                >
                    About
                </NavLink>
            </li>
            <li className="ml-auto">
                <NavLink
                    to="https://github.com/nikohoffren/app-icon-generator-website"
                    className="text-sm text-white hover:text-gray-300 btn-bg-gradient py-2 px-4 transition duration-300 mr-4"
                    target="blank"
                >
                    Contribute in Github!
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavBar;
