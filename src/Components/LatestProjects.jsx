/* ======================
  table of contents
=========================

  1. Imports
  2. Number of projects shown
  3. Title Section
  4. Rendering Products
  5. View All Projects Button
*/

/*==============
  1. Imports
===============*/
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import ProductItem from "./ProductItem";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LatestProjects() {
  const { products } = useContext(ShopContext);
  const [latestProjects, setLatestProjects] = useState([]);

  /*==============================
    2. Number of projects shown
  ================================*/
  useEffect(() => {
    setLatestProjects(products.slice(0, 8));
  }, []);

  return (
    <section id="projects">
      {/*==================
        3. Title Section
      =====================*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-center mb-5 mt-9 lg:mt-0"
      >
        <div className="inline-flex mb-5 gap-2 items-center font-bold text-3xl lg:text-4xl py-3">
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
          <p className="text-gray-800">
            Latest <span className="text-yellow-500">Projects</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
        </div>
      </motion.div>

      {/*======================
        4. Rendering Products
      =========================*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="flex justify-center flex-wrap gap-9 md:mx-[1%] lg:mx-[4%]"
      >
        {latestProjects.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.home}
            name={item.name}
            description={item.miniDesc}
            owner={item.owner}
          />
        ))}
      </motion.div>

      {/*==============================
          5. View All Projects Button
        ===============================*/}
      <Link to="/projects">
        <button className="bg-yellow-500 text-base py-3 px-6 rounded-xl mt-14 flex m-auto justify-center items-center gap-2 font-medium transition duration-300 hover:scale-105">
          View All Projects{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </Link>
    </section>
  );
}

export default LatestProjects;
