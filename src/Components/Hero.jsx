import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import { FaArrowRight } from "react-icons/fa6";
import Image2 from "../assets/photos/home1.jpeg";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-black relative w-full lg:h-screen sm:h-[750px] h-[650px] m-auto lg:pt-[0px] px-[20px] lg:px-[150px] flex
      justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center
      before:absolute before:inset-0 before:bg-black/30 -z-11"
      style={{ backgroundImage: `url(${Image2})` }}
    >
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
        <p className="text-white text-[18px] w-[100%] md:w-[75%] lg:w-[65%]  mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum
          doloribus recusandae pariatur vero tempora similique, ad minima eius
          quasi!
        </p>
        <button className="bg-yellow-500 text-base py-3 px-6 rounded-3xl mt-2 flex m-auto justify-center items-center gap-2">
          Contact Us{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default Hero;
