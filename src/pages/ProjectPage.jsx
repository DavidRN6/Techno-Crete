import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectPage() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
    }
  }, [productId, products]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return productData ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className="pt-10 my-10 transition-opacity ease-in duration-500 opacity-100 flex flex-col gap-10 bg-gray-900 text-white"
    >
      {/*==============================
          Main Content (Images + Info)
        ==============================*/}
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10">
        {/*============== Project Image (Left - Slider) ================*/}
        <div className="w-full xl:w-1/2 flex justify-center">
          <div className="w-[95%] shadow-lg rounded-lg overflow-hidden">
            {productData.image?.length > 0 ? (
              <Slider {...settings}>
                {productData.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`product-img-${index}`}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                  />
                ))}
              </Slider>
            ) : (
              <p className="text-center text-gray-500">لا توجد صور متاحة</p>
            )}
          </div>
        </div>

        {/*============= Project Info (Right) =============*/}
        <div className="w-full xl:w-1/2 text-end px-4 lg:px-7 lg:mt-3">
          <h1 className="font-bold text-3xl ">
            {productData.name}
          </h1>
          <h3 className="mt-5 text-xl ">{productData.owner}</h3>
          <p className="text-lg mt-5 ">
            {productData.description}
          </p>
          <h3 className="mt-5 text-lg ">{productData.time}</h3>
          <h3 className="mt-3 text-lg ">{productData.info1}</h3>
          <h3 className="mt-3 text-lg ">{productData.info2}</h3>
        </div>
      </div>
      {productData.image2 && productData.name2 && (
        <>
          <hr />
          <hr />

          {/*==========================  
        Additional Content (Below)  
      ============================*/}
          <div className="w-full text-center px-5 lg:px-20">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10">
              {/*============== Project Image (Left - Slider) ================*/}
              <div className="w-full xl:w-1/2 flex justify-center">
                <div className="w-[95%] shadow-lg rounded-lg overflow-hidden">
                  {productData.image2.length > 0 ? (
                    <Slider {...settings}>
                      {productData.image2.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`product-img-${index}`}
                          className="w-full h-auto object-cover rounded-lg"
                          loading="lazy"
                        />
                      ))}
                    </Slider>
                  ) : (
                    <p className="text-center text-gray-500">
                      لا توجد صور متاحة
                    </p>
                  )}
                </div>
              </div>

              {/*============= Project Info (Right) =============*/}
              <div className="w-full xl:w-1/2 text-end px-4 lg:px-7 lg:mt-3">
                <h1 className="font-bold text-3xl ">
                  {productData.name2}
                </h1>
                <h3 className="mt-5 text-xl ">
                  {productData.owner2}
                </h3>
                <p className="text-lg mt-5 ">
                  {productData.description2}
                </p>
                <h3 className="mt-5 text-lg ">
                  {productData.time2}
                </h3>
                <h3 className="mt-3 text-lg ">
                  {productData.info12}
                </h3>
                <h3 className="mt-3 text-lg ">
                  {productData.info22}
                </h3>
              </div>
            </div>
          </div>

          <hr />
          <hr />
        </>
      )}
    </motion.div>
  ) : (
    <div className="text-center text-gray-500 mt-10">
      جارٍ تحميل البيانات...
    </div>
  );
}

export default ProjectPage;
