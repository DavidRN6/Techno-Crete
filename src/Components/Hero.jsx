/* ======================
  table of contents
=========================

  1. Imports
  2. Scroll To Section Function
  3. Background Image
  4. Shadow For Background
  5. Hero Content
*/

/*==============
  1. Imports
===============*/
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import { FaArrowRight } from "react-icons/fa6";
import Image2 from "../assets/photos/home1.webp";

/*================================
  2. Scroll To Section Function
==================================*/
function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="bg-gray-800 relative w-full lg:h-screen sm:h-[750px] h-[650px] m-auto lg:pt-[0px] px-[20px] lg:px-[150px] flex
      justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
    >
      {/*=====================
        3. Background Image
      ========================*/}
      <img
        src={Image2}
        alt="Hero Background"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover -z-11"
      />
      {/*==========================
        4. Shadow For Background
      =============================*/}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      {/*=================
        5. Hero Content
      ====================*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="z-10 text-center w-full m-auto"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          Large Constructions with our heavy equipment
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-[50px] font-bold"
        >
          We will build your dream
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500 mx-auto mt-2"></div>
        <p className="text-white text-[18px] w-[100%] md:w-[75%] lg:w-[65%] mx-auto mt-4">
          We Strive to provide the best professional to make your projects a
          construction masterpiece, something unique and unmatched.
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-yellow-500 text-base py-3 px-6 rounded-3xl mt-2 flex m-auto justify-center items-center gap-2 font-medium transition duration-300 hover:scale-105"
        >
          Projects{" "}
          <span>
            <FaArrowRight />
          </span>{" "}
        </button>
      </motion.div>
    </div>
  );
}

export default Hero;
