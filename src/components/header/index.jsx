import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full p-5 bg-black md:flex md:justify-around md:items-center fixed top-0 z-10">
      <div className="flex justify-between items-center max-w-full">
        <Link to="/" onClick={scrollToTop} className="cursor-pointer">
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
        } md:flex space-y-8 md:space-y-0 md:space-x-10 md:items-center md:bg-transparent md:p-0 py-10 md:w-auto md:opacity-100 transition-all ease-in duration-500`}
      >
        <li>
          <Link
            to="inicio"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white text-md md:border-0 md:p-0 border p-2 hover:opacity-90 duration-200 whitespace-nowrap cursor-pointer"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="produtos"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white text-md border p-2 md:border-0 md:p-0 hover:opacity-90 duration-200 whitespace-nowrap cursor-pointer"
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="sobre"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white text-md border p-2 md:border-0 md:p-0 hover:opacity-90 duration-200 whitespace-nowrap cursor-pointer"
          >
            Sobre a Essenza
          </Link>
        </li>
        <li>
          <Link
            to="missao"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white text-md border p-2 md:border-0 md:p-0 hover:opacity-90 duration-200 whitespace-nowrap cursor-pointer"
          >
            Nossa missão
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
