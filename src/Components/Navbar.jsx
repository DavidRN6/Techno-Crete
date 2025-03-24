import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  /*==================
  1. Menu Function
====================*/

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="navbar"
      className="w-full fixed flex justify-between items-center bg-white text-gray-800
    px-4 py-3 lg:py-2 top-0 z-50 shadow-lg"
    >
      <Link
        to="/"
        onClick={() => scrollToSection("home")}
        id="logo"
        className="sm:text-2xl text-lg font-bold drop-shadow-[0_0_15px_rgba(234,179,8)]"
      >
        TechnoCrete <span className="text-yellow-500">Constructions</span>
      </Link>

      <ul className="lg:flex justify-center items-center gap-6 hidden">
        <Link
          to="/"
          onClick={() => scrollToSection("home")}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          HOME
        </Link>
        <Link
          to="/"
          onClick={() => scrollToSection("about")}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          onClick={() => setIsMenuOpen(false)}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          PROJECTS
        </Link>
        <Link
          to="/"
          onClick={() => scrollToSection("contact")}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          CONTACT US
        </Link>
      </ul>

      {/* ===========
        Mobile Menu
      ===============*/}

      <div className="flex items-center justify-center p-[5px] lg:hidden">
        {/* Burger Icon */}
        <button
          className="relative w-7 h-5 focus:outline-none"
          onClick={toggleMenu}
        >
          <span
            className={`block absolute left-0 w-full h-[3px] bg-yellow-500 transition-all duration-500 rounded-sm ${
              isMenuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
            }`}
          ></span>
          <span
            className={`block absolute left-0 w-full h-[3px] bg-yellow-500 transition-all duration-500 rounded-sm ${
              isMenuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
            }`}
          ></span>
          <span
            className={`block absolute left-0 w-full h-[3px] bg-yellow-500 transition-all duration-500 rounded-sm ${
              isMenuOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
            }`}
          ></span>
        </button>

        {/* Menu Items */}
        {isMenuOpen && (
                <div
                className={`w-full bg-white p-4 absolute top-[45px] md:top-[55px] left-0 shadow-md  transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <ul className="flex flex-col gap-2 w-full items-center justify-center">
                  <Link
                    to="/"
                    onClick={() => scrollToSection("home")}
                    className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/"
                    onClick={() => scrollToSection("about")}
                    className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="/projects"
                    className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                  >
                    PROJECTS
                  </Link>
                  <Link
                    to="/"
                    onClick={() => scrollToSection("contact")}
                    className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                  >
                    CONTACT US
                  </Link>
                </ul>
              </div>
        )}
  
      </div>
    </nav>
  );
}

export default Navbar;