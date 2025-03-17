import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function ProjectPage() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProjectData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProjectData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-10 my-10 transition-opacity ease-in duration-500 opacity-100">
      {/*=============
        Project Data
      ===============*/}

      <div className="flex gap-18 sm:gap-12 flex-col xl:flex-row">
        {/*==============
          Project Image
        ================*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row p-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.slice(0, 5).map((item, index) => (
              //==============
              // Small Image
              //==============
              <img
                onClick={() => setImage(item)}
                src={item}
                alt="product-img"
                loading="lazy"
                key={index}
                className="w-[18%] sm:w-[70%] md:w-[76%] lg:w-[600px] sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          {/*===========
            big image
          ==============*/}
          <div className="w-full sm:w-[76%] lg:w-full xl:w-[900px] relative">
            <img src={image} alt="product-img" className="w-full h-auto" />
          </div>
        </div>

        {/*============= 
            Project Info
          ================*/}
        <div className="flex-1 text-end xl:my-2 mx-9">
          <h1 className="font-semibold text-2xl xl:mt-2">{productData.name}</h1>
          <h3 className="mt-5 text-lg">{productData.owner}</h3>
          <p className="text-[17px] mt-7">{productData.description}</p>
          <h3 className="mt-7 text-lg">{productData.time}</h3>
          <h3 className="mt-5 text-lg">{productData.info1}</h3>
          <h3 className="mt-5 text-lg">{productData.info2}</h3>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default ProjectPage;
