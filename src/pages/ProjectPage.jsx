/* ======================
  table of contents
=========================

  1. Imports
  2. Popup Animation
  3. arrows to scroll
  4. Popup UseStates
  5. Render Project Page
  6. Popup Image Function
  7. Slider Settings
  8. Back Button
  9. Project Image Gallery
  10. Project Info
  11. Project Image2 Gallery
  12. Project Image3 Gallery
  13. Project Image4 Gallery
  14. Project Image5 Gallery
  15. Project Image6 Gallery
  16. Project Image7 Gallery
  17. Render Popup Image Function
*/

/*==============
  1. Imports
===============*/
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";
import { slideUpVariants } from "../animation/animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";

/*====================
  2. Popup Animation
======================*/
const popupVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

/*=====================
  3. arrows to scroll
=======================*/
const CustomArrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 rounded-full shadow-lg text-yellow-500
      ${direction === "prev" ? "left-4" : "right-4"}`}
  >
    {direction === "prev" ? (
      <FaArrowLeft className="text-2xl" />
    ) : (
      <FaArrowRight className="text-2xl" />
    )}
  </button>
);

function ProjectPage() {
  const { productId } = useParams();

  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);

  /*=====================
    4. Popup UseStates
  =======================*/
  const [popupImage, setPopupImage] = useState(null);
  const [popupIndex, setPopupIndex] = useState(0);
  const [popupImages, setPopupImages] = useState([]); // الصور الخاصة بالـ popup

  /*========================
    5. Render Project Page
  ==========================*/
  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
    }
  }, [productId, products]);

  /*=========================
    6. Popup Image Function
  ===========================*/
  const openPopup = (images, index) => {
    setPopupImages(images); // تعيين مجموعة الصور الخاصة بالـ popup
    setPopupIndex(index);
    setPopupImage(images[index]);
  };

  const closePopup = () => setPopupImage(null);

  const nextImage = () => {
    if (popupImages.length) {
      setPopupIndex((prev) => (prev + 1) % popupImages.length);
      setPopupImage(popupImages[(popupIndex + 1) % popupImages.length]);
    }
  };

  const prevImage = () => {
    if (popupImages.length) {
      setPopupIndex(
        (prev) => (prev - 1 + popupImages.length) % popupImages.length
      );
      setPopupImage(
        popupImages[(popupIndex - 1 + popupImages.length) % popupImages.length]
      );
    }
  };

  /*====================
    7. Slider Settings
  ======================*/
  const settings = {
    dots: true,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,

    appendDots: (dots) => (
      <div style={{ bottom: "10px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return productData ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className="pt-10 my-14 transition-opacity ease-in duration-500 opacity-100 flex flex-col gap-10"
    >
      {/*===============
        8. Back Button
      ==================*/}
      <Link
        to="/projects"
        className="px-[5%]  font-semibold text-lg flex items-center gap-3"
      >
        <IoMdArrowRoundBack />
        Back
      </Link>
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 w-full text-center px-5 lg:px-20">
        {/*==========================
          9. Project Image Gallery
        =============================*/}
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
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                    loading="lazy"
                    onClick={() => openPopup(productData.image, index)}
                  />
                ))}
              </Slider>
            ) : (
              <p className="text-center text-gray-500">لا توجد صور متاحة</p>
            )}
          </div>
        </div>

        {/*==================
          10. Project Info
        =====================*/}
        <div className="w-full xl:w-1/2 text-end px-4 lg:px-7 lg:mt-3">
          <h1 className="font-bold text-3xl text-gray-900">
            {productData.name}
          </h1>
          <h3 className="mt-5 text-2xl text-gray-700">{productData.owner}</h3>
          <p className="text-xl mt-5 text-gray-600">
            {productData.description}
          </p>
          <h3 className="mt-6 text-xl py-1 text-gray-800">
            {productData.time}
          </h3>
          <h3 className="mt-3 text-xl py-1 text-gray-800">
            {productData.info1}
          </h3>
          <h3 className="mt-3 text-xl text-gray-800">{productData.info2}</h3>
        </div>
      </div>

      {/*======================================================================================================
  ===================================================================================================
=========================================================================================================*/}

      {/*============================
        11. Project Image2 Gallery
      ===============================*/}
      {productData.image2 && productData.name2 && (
        <>
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />

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
                          className="w-full h-auto object-cover rounded-lg cursor-pointer"
                          loading="lazy"
                          onClick={() => openPopup(productData.image2, index)}
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

      {/*======================================================================================================
  ===================================================================================================
=========================================================================================================*/}

      {/*============================
        12. Project Image3 Gallery
      ===============================*/}
      {productData.image3 && productData.name3 && (
        <>
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />
          <hr className="border-t-4 border-yellow-500 my-5 w-[90%] mx-auto" />

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
                          className="w-full h-auto object-cover rounded-lg cursor-pointer"
                          loading="lazy"
                          onClick={() => openPopup(productData.image3, index)}
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

      {/*======================================================================================================
  ===================================================================================================
=========================================================================================================*/}

      {/*============================
        13. Project Image4 Gallery
      ===============================*/}
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
                className="w-full sm:w-1/2 lg:w-[40%] xl:w-[35%] rounded-lg shadow-md border-2 border-yellow-500 cursor-pointer"
                onClick={() => openPopup(productData.image4, index)}
              />
            ))}
          </div>
        </div>
      )}

      {/*======================================================================================================
  ===================================================================================================
=========================================================================================================*/}

      {/*============================
        14. Project Image5 Gallery
      ===============================*/}
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
                className="w-[40%] sm:w-[30%] md:w-[40%] lg:w-[14%] rounded-lg shadow-md border-2 border-yellow-500 cursor-pointer"
                onClick={() => openPopup(productData.image5, index)}
              />
            ))}
          </div>
        </div>
      )}

      {/*======================================================================================================
  ===================================================================================================
=========================================================================================================*/}

      {/*============================
        15. Project Image6 Gallery
      ===============================*/}
      {productData.image6 && productData.name6 && productData.image62 && (
        <div className="flex flex-col justify-center items-center mt-10 px-4">
          <h1 className="font-bold text-3xl text-gray-900 text-center">
            {productData.name6}
          </h1>
          <div className="flex justify-center flex-wrap gap-5 sm:gap-3 mt-9">
            {productData.image6.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="product-image"
                className="w-[40%] sm:w-[30%] md:w-[40%] lg:w-[14%] rounded-lg shadow-md border-2 border-yellow-500 cursor-pointer"
                onClick={() => openPopup(productData.image6, index)}
              />
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-5 sm:gap-3 mt-4">
            {productData.image62.map((img, index) => (
              <img
                src={img}
                key={index}
                alt="product-image"
                className="w-[80%] sm:w-[30%] md:w-[40%] lg:w-[14%] rounded-lg shadow-md border-2 border-yellow-500 cursor-pointer"
                onClick={() => openPopup(productData.image62, index)}
              />
            ))}
          </div>
        </div>
      )}

      {/*======================================================================================================
  ===================================================================================================
=========================================================================================================*/}

      {/*============================
        16. Project Image7 Gallery
      ===============================*/}
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
                className="w-[90%] sm:w-[30%] xl:w-[27%] rounded-lg shadow-md border-2 border-yellow-500 cursor-pointer"
                onClick={() => openPopup(productData.image7, index)}
              />
            ))}
          </div>
        </div>
      )}

      {/*=================================
        17. Render Popup Image Function
      ====================================*/}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 transition-all duration-300"
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={closePopup}
            >
              <FaTimes />
            </button>
            <button
              className="absolute left-5 text-white text-3xl"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </button>
            <img
              src={popupImage}
              alt="popup"
              className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
            />
            <button
              className="absolute right-5 text-white text-3xl"
              onClick={nextImage}
            >
              <FaArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ) : (
    <div className="text-center text-gray-500 mt-10">
      جارٍ تحميل البيانات...
    </div>
  );
}

export default ProjectPage;
