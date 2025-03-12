import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import aboutImg1 from "../assets/photos/about-img-1.png";
import aboutImg2 from "../assets/photos/about-img-2.png";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row md:h-[80vh] py-2 px-[10%] mt-4 justify-between items-center gap-6"
    >
      {/* =============
        left Section
      ================= */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-full md:w-[50%] text-center md:text-left mb-[100px]"
      >
        <span className="block mb-2 text-xl font-bold text-yellow-500">
          ABOUT US
        </span>
        <h2 className="mb-6 font-bold text-3xl lg:text-4xl text-gray-800">
          We Provide The Best <br /> Service To Build
        </h2>

        <p className="text-gray-600 font-medium">
          TechnoCrete for Restoration and Structural Strengthening TechnoCrete
          was founded in 2010 with a vision to provide the best advanced
          engineering solutions in the field of restoration and structural
          strengthening. From the beginning, the company has been committed to
          quality standards and fast execution, while offering comprehensive
          guarantees for all its work.
        </p>

        <div className="flex justify-center md:justify-start gap-9 mt-6">
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl">100+</p>
            <p className="text-sm font-medium">Projects Complete</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl">15+</p>
            <p className="text-sm font-medium">Years Of Experience</p>
          </div>
        </div>

        <button className="bg-yellow-500 text-base py-3 px-6 rounded-3xl mt-6 mx-auto md:mx-0 flex items-center gap-2 font-medium">
          Projects{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </motion.div>

      {/* =============
        Right Section
      ================= */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative flex justify-center items-center"
      >
        <img
          src={aboutImg1}
          alt="about-img-1"
          className="w-[200px] md:w-[250px] lg:w-[300px] border-4 border-white absolute -top-[5rem] left-[6rem]"
        />
        <img
          src={aboutImg2}
          alt="about-img-2"
          className="w-[230px] md:w-[250px] lg:w-[350px]  mr-10"
        />
      </motion.div>
    </section>
  );
}

export default About;
