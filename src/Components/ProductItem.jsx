import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, description }) {
  return (
    <Link className="text-gray-800 border shadow-2xl border-gray-300 rounded-lg transition duration-300 cursor-pointer hover:rotate-1 hover:scale-105 " to={`/Product/${id}`}>
      <img
        src={image[0]}
        loading="lazy"
        alt="product-img"
        className="w-[300px] rounded-t-lg"
      />
      <div className="w-[300px] py-4 px-[0.4rem]">
        <h1 className="font-bold">{name}</h1>
        <p className="text-[0.8rem] mt-[0.7rem] mb-[0.8rem] font-medium">{description}</p>
        <div>
          <p to={`/Product/${id}`} className="flex items-center gap-2 text-sm font-medium text-blue-600">
            More Details
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
