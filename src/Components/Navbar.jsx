/* ======================
  table of contents
=========================

  1. Imports
  2. Scroll To Section Function
  3. Menu Function
  4. Logo
  5. Menu For Large Screen
  6. Menu For Small Screen ( Mobile Menu )
*/

/*=============
  1. Imports
===============*/
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  /*================================
    2. Scroll To Section Function
  ==================================*/
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle click: scroll if same page, else just close menu and allow navigation
  const handleClick = (path, sectionId) => {
    if (location.pathname === path) {
      // نفس الصفحة نعمل scroll
      scrollToSection(sectionId);
    } else {
      // صفحة مختلفة: بس نقفل المينيو، والانتقال يتم عبر <Link> تلقائياً
      setIsMenuOpen(false);
    }
  };

  /*==================
    3. Menu Function
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
      {/*=========
        4. Logo
      ============*/}
      <Link
        to="/"
        onClick={() => handleClick("/", "home")}
        id="logo"
        className="sm:text-2xl text-lg font-bold drop-shadow-[0_0_15px_rgba(234,179,8)]"
      >
        TechnoCrete <span className="text-yellow-500">Constructions</span>
      </Link>

      {/*=========================
        5. Menu For Large Screen
      ============================*/}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        <Link
          to="/"
          onClick={() => handleClick("/", "home")}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          HOME
        </Link>
        <Link
          to="/"
          onClick={() => handleClick("/", "about")}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          ABOUT
        </Link>
        <Link
          to="/projects"
          onClick={() => handleClick("/projects")}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          PROJECTS
        </Link>
        <Link
          to="/"
          onClick={() => handleClick("/", "contact")}
          className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
        >
          CONTACT US
        </Link>
      </ul>

      {/* =========================================
        6. Menu For Small Screen ( Mobile Menu )
      =============================================*/}
      <div className="flex items-center justify-center p-[5px] lg:hidden">
        {/*==============
          Burger Icon
        ================*/}
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

        {/*============
          Menu Items
        ===============*/}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-white p-4 absolute top-[50px] md:top-[55px] left-0 shadow-md"
            >
              <ul className="flex flex-col gap-2 w-full items-center justify-center">
                <Link
                  to="/"
                  onClick={() => handleClick("/", "home")}
                  className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                >
                  HOME
                </Link>
                <Link
                  to="/"
                  onClick={() => handleClick("/", "about")}
                  className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                >
                  ABOUT
                </Link>
                <Link
                  to="/projects"
                  onClick={() => handleClick("/projects")}
                  className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                >
                  PROJECTS
                </Link>
                <Link
                  to="/"
                  onClick={() => handleClick("/", "contact")}
                  className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
                >
                  CONTACT US
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
