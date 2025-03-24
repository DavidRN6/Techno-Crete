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
      className="pt-10 my-14 transition-opacity ease-in duration-500 opacity-100 flex flex-col gap-10"
    >
      {/*==============================
          Main Content (Images + Info)
        ==============================*/}
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 w-full text-center px-5 lg:px-20">
        {/*============== Project Image (Left - Slider) ================*/}
        <div className="w-full xl:w-1/2 flex justify-center">
          <div className="w-[95%] shadow-lg rounded-lg overflow-hidden">
            {productData.image?.length > 0 ? (
              <Slider
                className="border-2 border-yellow-500 rounded-lg shadow-yellow-500"
                {...settings}
              >
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
          <h1 className="font-bold text-3xl text-gray-900">
            {productData.name}
          </h1>
          <h3 className="mt-5 text-xl text-gray-700">{productData.owner}</h3>
          <p className="text-lg mt-5 text-gray-600">
            {productData.description}
          </p>
          <h3 className="mt-5 text-lg text-gray-800">{productData.time}</h3>
          <h3 className="mt-3 text-lg text-gray-800">{productData.info1}</h3>
          <h3 className="mt-3 text-lg text-gray-800">{productData.info2}</h3>
        </div>
      </div>

      {/*=================================================================
        ===============================================================
      ====================================================================*/}

      {productData.image2 && productData.name2 && (
        <>
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />

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
                <h1 className="font-bold text-3xl text-gray-900">
                  {productData.name2}
                </h1>
                <h3 className="mt-5 text-xl text-gray-700">
                  {productData.owner2}
                </h3>
                <p className="text-lg mt-5 text-gray-600">
                  {productData.description2}
                </p>
                <h3 className="mt-5 text-lg text-gray-800">
                  {productData.time2}
                </h3>
                <h3 className="mt-3 text-lg text-gray-800">
                  {productData.info12}
                </h3>
                <h3 className="mt-3 text-lg text-gray-800">
                  {productData.info22}
                </h3>
              </div>
            </div>
          </div>
        </>
      )}

      {/*=================================================================
        ===============================================================
      ====================================================================*/}

      {productData.image3 && productData.name3 && (
        <>
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />

          {/*==========================  
            Additional Content (Below)  
          ============================*/}
          <div className="w-full text-center px-5 lg:px-20">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10">
              {/*============== Project Image (Left - Slider) ================*/}
              <div className="w-full xl:w-1/2 flex justify-center">
                <div className="w-[95%] shadow-lg rounded-lg overflow-hidden">
                  {productData.image3.length > 0 ? (
                    <Slider {...settings}>
                      {productData.image3.map((img, index) => (
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
                <h1 className="font-bold text-3xl text-gray-900">
                  {productData.name3}
                </h1>
                <h3 className="mt-5 text-xl text-gray-700">
                  {productData.owner3}
                </h3>
                <p className="text-lg mt-5 text-gray-600">
                  {productData.description3}
                </p>
                <h3 className="mt-5 text-lg text-gray-800">
                  {productData.time3}
                </h3>
                <h3 className="mt-3 text-lg text-gray-800">
                  {productData.info13}
                </h3>
                <h3 className="mt-3 text-lg text-gray-800">
                  {productData.info23}
                </h3>
              </div>
            </div>
          </div>
        </>
      )}

      {/*=================================================================
        ===============================================================
      ====================================================================*/}

      {productData.image4 && productData.name4 && (
        <div className="flex flex-col justify-center items-center mt-10 px-4">
          <h1 className="font-bold text-3xl text-gray-900 text-center">
            {productData.name4}
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-5 mt-10 md:px-5 border">
            {productData.image4.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="product-image"
                className="w-full sm:w-1/2 lg:w-[40%] xl:w-[35%] rounded-lg shadow-md border-2 border-yellow-500"
              />
            ))}
          </div>
        </div>
      )}

      {/*=================================================================
        ===============================================================
      ====================================================================*/}

      {productData.image5 && productData.name5 && (
        <div className="flex flex-col justify-center items-center mt-10 px-4">
          <h1 className="font-bold text-3xl text-gray-900 text-center">
            {productData.name5}
          </h1>
          <div className="flex justify-center flex-wrap gap-5 sm:gap-3 mt-9">
            {productData.image5.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="product-image"
                className="w-[40%] sm:w-[30%] md:w-[40%] lg:w-[14%] rounded-lg shadow-md border-2 border-yellow-500"
              />
            ))}
          </div>
        </div>
      )}

      {/*=================================================================
        ===============================================================
      ====================================================================*/}

      {productData.image6 && productData.name6 && productData.image62 && (
        <div className="flex flex-col justify-center items-center mt-10 px-4">
          <h1 className="font-bold text-3xl text-gray-900 text-center">
            {productData.name5}
          </h1>
          <div className="flex justify-center flex-wrap gap-5 sm:gap-3 mt-9">
            {productData.image6.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="product-image"
                className="w-[40%] sm:w-[30%] md:w-[40%] lg:w-[14%] rounded-lg shadow-md border-2 border-yellow-500"
              />
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-5 sm:gap-3 mt-4">
            {productData.image62.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="product-image"
                className="w-[80%] sm:w-[30%] md:w-[40%] lg:w-[14%] rounded-lg shadow-md border-2 border-yellow-500"
              />
            ))}
          </div>
        </div>
      )}

      {/*=================================================================
        ===============================================================
      ====================================================================*/}

      {productData.image7 && productData.name7 && (
        <div className="flex flex-col justify-center items-center mt-10 px-4">
          <h1 className="font-bold text-3xl text-gray-900 text-center">
            {productData.name7}
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-5 mt-10 md:px-5 border">
            {productData.image7.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="product-image"
                className="w-full sm:w-1/2 lg:w-[40%] xl:w-[35%] rounded-lg shadow-md border-2 border-yellow-500"
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  ) : (
    <div className="text-center text-gray-500 mt-10">
      جارٍ تحميل البيانات...
    </div>
  );
}

export default ProjectPage;
