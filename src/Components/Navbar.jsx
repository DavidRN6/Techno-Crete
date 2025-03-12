import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Navbar() {
  /*============== 
      1. Menu Function 
  ===============*/
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className="w-full fixed flex justify-between items-center bg-white text-gray-800
    px-4 py-3 lg:py-2 top-0 z-50 shadow-lg"
    >
      <h1 id="logo" className="md:text-2xl text-lg font-bold">
        TechnoCrete <span className="text-yellow-500">Constructions</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {["HOME", "ABOUT", "PROJECTS", "CONTACT US"].map((item) => (
          <li
            key={item}
            className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-gray-800 transition-all duration-200"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* =========== Mobile Menu Button =========== */}
      <div className="flex justify-between items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoClose className="text-yellow-500 text-3xl md:text-4xl cursor-pointer" />
        ) : (
          <BiMenuAltRight className="text-yellow-500 text-3xl md:text-4xl cursor-pointer" />
        )}
      </div>

      {/* =========== Mobile Menu =========== */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full bg-white absolute top-[45px] md:top-[51px] left-0 overflow-hidden"
      >
        <ul className="flex flex-col gap-2 w-full items-center justify-center py-2">
          {["HOME", "ABOUT", "PROJECTS", "CONTACT US"].map((item) => (
            <li
              key={item}
              className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-800"
              onClick={closeMenu}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;