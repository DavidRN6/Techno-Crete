/* ======================
  table of contents
=========================

  1. Imports
  2. Filter States
  3. Filter Function
  4. Filter Title
  5. Category Filter
  6. Right Side
  7. Title Section
  8. Map Projects
*/

/*==============
  1. Imports
===============*/
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaFilter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import ProductItem from "../Components/ProductItem";

function Projects() {
  const { products } = useContext(ShopContext);

  /*==================
    2. Filter States
  ====================*/
  const [showFilter, setShowFilter] = useState(false);
  const [filterProjects, setFilterProjects] = useState([]);
  const [category, setCategory] = useState([]);

  /*=====================
    3. Filter Function
  =======================*/
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let projectsCopy = products.slice();

    if (category.length > 0) {
      projectsCopy = projectsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProjects(projectsCopy);
  };

  useEffect(() => {
    setFilterProjects(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className="flex flex-col lg:flex-row gap-1 lg:gap-10 pt-10 mt-2 mb-[2%] mx-[1%]"
    >
      {/*=================
        4. Filter Title
      ====================*/}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="mt-6 text-xl flex items-center font-medium cursor-pointer gap-2 p-5 pb-0"
        >
          FILTERS
          <FaFilter className="text-base lg:hidden" />
        </p>

        {/*====================
          5. Category Filter
        =======================*/}
        <div
          className={`border border-gray-300 pl-8 py-3 my-4 ${
            showFilter ? "" : "hidden lg:block"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-6 text-sm text-gray-800">
            {["دهانات-ايبوكسية", "تدعيم", "صب", "معالجة", "ترميم"].map(
              (cat) => (
                <p key={cat} className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={cat}
                    onChange={toggleCategory}
                  />{" "}
                  {cat}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      {/*==============
        6. Right Side
      =================*/}
      <div className="flex-1">
        {/*==================
          7. Title Section
        =====================*/}
        <div className="flex justify-between text-base px-4 sm:text-2xl mb-2 mt-0 md:mt-3 lg:mt-8">
          <div className="inline-flex gap-2 items-center font-bold py-3">
            <p className="text-gray-800">
              ALL <span className="text-yellow-500">PROJECTS</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
          </div>
        </div>

        {/*=================
          8. Map Projects
        ====================*/}
        <div className="flex justify-center flex-wrap gap-6 mt-[1%]">
          <AnimatePresence mode="wait">
            {filterProjects.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductItem
                  id={item.id}
                  image={item.home}
                  name={item.name}
                  description={item.miniDesc}
                  owner={item.owner}
                  time={item.time}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
