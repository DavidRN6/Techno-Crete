import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

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
      <Link to="/" onClick={() => scrollToSection("home")} id="logo" className="md:text-2xl text-lg font-bold drop-shadow-[0_0_15px_rgba(234,179,8)]">
        TechnoCrete <span className="text-yellow-500">Constructions</span>
      </Link>

      <ul className="lg:flex justify-center items-center gap-6 hidden">
        <Link to="/" onClick={() => scrollToSection("home")} className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200">
          HOME
        </Link>
        <Link to="/" onClick={() => scrollToSection("about")} className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200">
          ABOUT
        </Link>
        <Link to="/projects" className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200">
          PROJECTS
        </Link>
        <Link to="/" onClick={() => scrollToSection("contact")} className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200">
          CONTACT US
        </Link>
      </ul>

      {/* ===========
        Monile Menu
      ===============*/}

      <div
        className="flex justify-between items-center lg:hidden"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <IoClose className="text-yellow-500 text-3xl md:text-4xl cursor-pointer" />
          ) : (
            <BiMenuAltRight className="text-yellow-500 text-3xl md:text-4xl  cursor-pointer" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full bg-white p-4 absolute top-[45px] md:top-[51px] left-0 shadow-md"
          >
            <ul className="flex flex-col gap-2 w-full items-center justify-center">
              <Link to="/" onClick={() => scrollToSection("home")} className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
                HOME
              </Link>
              <Link to="/" onClick={() => scrollToSection("about")} className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
                ABOUT
              </Link>
              <Link to="/projects" className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
                PROJECTS
              </Link>
              <Link to="/" onClick={() => scrollToSection("contact")} className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
                CONTACT US
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-white p-4 absolute
      top-[45px] md:top-[51px] left-0 transition-all duration-300`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col gap-2 w-full items-center justify-center">
          <Link to="/" onClick={() => scrollToSection("home")} className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
            HOME
          </Link>
          <Link to="/" onClick={() => scrollToSection("about")} className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
            ABOUT
          </Link>
          <Link to="/projects" className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
            PROJECTS
          </Link>
          <Link to="/" onClick={() => scrollToSection("contact")} className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800">
            CONTACT US
          </Link>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar;