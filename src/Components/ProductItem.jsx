/* ======================
  table of contents
=========================

  1. Imports
  2. Card
*/

/*==============
  1. Imports
===============*/
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

/*==========
  2. Card
============*/
function ProductItem({ id, image, name, description, owner }) {
  return (
    <Link
      to={`/project/${id}`}
      className="text-gray-800 border shadow-2xl border-gray-300 rounded-lg 
      transition duration-300 cursor-pointer hover:rotate-1 hover:scale-105 flex flex-col h-[370px]"
    >
      <img
        src={image[0]}
        loading="lazy"
        alt={name}
        className="w-[280px] rounded-t-lg h-[200px] object-cover"
      />
      <div className="w-[280px] py-4 px-[0.4rem] flex flex-col justify-between flex-1">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p className="text-[0.8rem] mt-[0.7rem] mb-[0.8rem] font-medium">
            {description}
          </p>
          <p className="text-[0.8rem] mt-[0.7rem] mb-[0.8rem] font-medium">
            {owner}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-blue-600 mt-4">
          More Details <FaArrowRight />
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
