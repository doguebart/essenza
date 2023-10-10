import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full p-5 bg-black md:flex md:justify-around md:items-center fixed top-0 z-10">
      <div className="flex justify-between items-center max-w-full">
        <Link to="/">
          <img src="/ESSENZA.svg" alt="logo" />
        </Link>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          <FiMenu className="text-white" />
        </span>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex space-y-6 md:space-y-0 md:space-x-10 md:items-center md:bg-transparent md:p-0 py-4 md:w-auto md:opacity-100 transition-all ease-in duration-500`}
      >
        <li>
          <Link
            to="/"
            className="text-white text-md md:border-0 md:p-0 border p-2 hover:opacity-90 duration-200 whitespace-nowrap"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-white text-md border p-2 md:border-0 md:p-0 hover:opacity-90 duration-200 whitespace-nowrap"
          >
            Essenza for you
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-white border p-2 md:border-0 md:p-0 text-md hover:opacity-90 duration-200 whitespace-nowrap"
          >
            Essenza for all
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="text-white border p-2 md:border-0 md:p-0 text-md hover:opacity-90 duration-200 whitespace-nowrap"
          >
            Essenza for nutri
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
