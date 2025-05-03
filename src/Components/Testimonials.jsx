/* ======================
  table of contents
=========================

  1. Imports
  2. Testimonial Data
  3. Slider Testimonial Setting
  4. Title Section
  5. Testimonials cards
*/

/*==============
  1. Imports
===============*/
import Slider from "react-slick";
import cairo from "../assets/logos/cairo university.webp";
import ainShams from "../assets/logos/AinShams university.webp";
import helwan from "../assets/logos/Helwan university.webp";
import azhar from "../assets/logos/Al-Azhar university.webp";
import mansoura from "../assets/logos/Mansoura University.webp"
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";

/*======================
  2. Testimonial Data
========================*/
const testimonialData = [
  {
    id: 1,
    image: cairo,
    title: "(محافظ الجيزة سابقا) أستاذ دكتور",
    name: "على عبد الرحمن",
  },
  {
    id: 2,
    image: ainShams,
    title: "أستاذ دكتور",
    name: "احمد فتحى",
  },
  {
    id: 3,
    image: ainShams,
    title: "أستاذ دكتور",
    name: "جمال حسين",
  },
  {
    id: 4,
    image: mansoura,
    title: "أستاذ دكتور",
    name: "محمد نجيب",
  },
  {
    id: 5,
    image: ainShams,
    title: "أستاذ دكتور",
    name: "نصر العيد",
  },
  {
    id: 6,
    image: ainShams,
    title: "أستاذ دكتور",
    name: "حسن علام",
  },
  {
    id: 7,
    image: ainShams,
    title: "أستاذ دكتور",
    name: "خالد عباس",
  },
  {
    id: 8,
    image: helwan,
    title: "أستاذ دكتور",
    name: "هشام حجاج",
  },
  {
    id: 9,
    image: helwan,
    title: "أستاذ دكتور",
    name: "ابراهيم محفوظ",
  },
  {
    id: 10,
    image: azhar,
    title: "أستاذ دكتور",
    name: "مصطفى قطب",
  },
  {
    id: 11,
    image: azhar,
    title: "أستاذ دكتور",
    name: "هشام حلمى",
  },
];

function Testimonials() {
  /*================================
    3. Slider Testimonial Setting
  ==================================*/
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className="py-10"
    >
      {/*==================
        4. Title Section
      =====================*/}
      <div className="container">
        <div className="text-center">
          <div className="inline-flex gap-2 items-center font-bold text-3xl lg:text-4xl py-3">
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
            <p className="text-gray-800">Testimonials</p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
          </div>
          <p className="text-gray-600 font-medium">
            The consultants we have worked with before
          </p>
        </div>

        {/*======================
          5. Testimonials cards
        =========================*/}
        <div className="py-10 mt-12">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col justify-center items-center bg-[#fea928]/10 gap-5 px-4 mx-4 shadow-xl rounded-xl relative py-8 min-h-[250px] h-full">
                  <img src={data.image} alt="logo" className="w-24 h-24 object-contain" />
                  <p className="text-gray-800 font-semibold text-lg text-center">
                    {data.title}
                  </p>
                  <h1 className="text-gray-800 font-bold text-xl text-center">
                    {data.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
