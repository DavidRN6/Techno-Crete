import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function Navbar() {
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
      className="w-full fixed flex justify-between items-center bg-white text-black
    px-4 py-3 lg:py-2 top-0 z-50"
    >
      <h1 id="logo" className="md:text-2xl text-lg font-bold">
        TechnoCrete <span className="text-yellow-500">Constructions</span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-6 hidden">
        <li className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-200">
          HOME
        </li>
        <li className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-200">
          ABOUT
        </li>
        <li className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-200">
          PROJECTS
        </li>
        <li className="font-bold cursor-pointer text-[15px] p-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-200">
          CONTACT US
        </li>
      </ul>

      {/* menu */}

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

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-white p-4 absolute
      top-[45px] md:top-[51px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col gap-2 w-full items-center justify-center">
          <li className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-black">
            HOME
          </li>
          <li className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-black">
            ABOUT
          </li>
          <li className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-black">
            PROJECTS
          </li>
          <li className="w-full text-center text-yellow-500 font-semibold cursor-pointer p-2 rounded-lg hover:bg-yellow-500 hover:text-black">
            CONTACT US
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
