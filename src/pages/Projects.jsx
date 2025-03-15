import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import ProductItem from "../Components/ProductItem";

function Projects() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProjects, setFilterProjects] = useState([]);
  const [category, setCategory] = useState([]);


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
      projectsCopy = projectsCopy.filter(item => category.includes(item.category))
    }
    setFilterProjects(projectsCopy)
  }

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
      className=" flex flex-col lg:flex-row gap-1 lg:gap-10 pt-10 mt-2 mb-[2%] mx-[1%] "
    >
      {/*===============
        Filter Options
      ==================*/}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="mt-6 text-xl flex items-center font-medium cursor-pointer gap-2 p-5 pb-0"
        >
          FILTERS
          <FaFilter className="text-base lg:hidden" />
        </p>

        {/*==================
            Category Filter
        =====================*/}
        <div
          className={`border border-gray-300 pl-8 py-3 my-4 ${
            showFilter ? "" : "hidden lg:block"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-6 text-sm text-gray-800">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"HTML"} onChange={toggleCategory} /> HTML
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"CSS"} onChange={toggleCategory} /> CSS
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"JavaScript"} onChange={toggleCategory} />
              JavaScript
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"React"} onChange={toggleCategory} /> React
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Tailwind"} onChange={toggleCategory} />{" "}
              Tailwind
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bootstrap"} onChange={toggleCategory} />{" "}
              Bootstrap
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Node"} onChange={toggleCategory} /> Node
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Mongo"} onChange={toggleCategory} /> Mongo
            </p>
          </div>
        </div>
      </div>

      {/*===========
        Right Side
      =============*/}
      <div className="flex-1">
        {/*=========
          Title
        ============*/}

        <div className="flex justify-between text-base px-4 sm:text-2xl mb-2 mt-0 md:mt-3 lg:mt-8">
          <div className="inline-flex gap-2 items-center font-bold py-3">
            <p className="text-gray-800">
              ALL <span className="text-yellow-500">PROJECTS</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
          </div>
        </div>

        {/*=============
          Map Projects
        ================*/}
        <div className="flex justify-center flex-wrap gap-6 mt-[1%]">
          {filterProjects.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              owner={item.owner}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
