import Slider from "react-slick";
import cairo from "../assets/logos/cairo university.webp";
import ainShams from "../assets/logos/AinShams university.webp";
import helwan from "../assets/logos/Helwan university.webp";
import azhar from "../assets/logos/Al-Azhar university.webp";
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";

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
    image: ainShams,
    title: "أستاذ دكتور",
    name: "نصر العيد",
  },
  {
    id: 5,
    image: ainShams,
    title: "أستاذ دكتور",
    name: "حسن علام",
  },
  {
    id: 6,
    image: ainShams,
    title: "أستاذ دكتور",
    name: "خالد عباس",
  },
  {
    id: 7,
    image: helwan,
    title: "أستاذ دكتور",
    name: "هشام حجاج",
  },
  {
    id: 7,
    image: helwan,
    title: "أستاذ دكتور",
    name: "ابراهيم محفوظ",
  },
  {
    id: 8,
    image: azhar,
    title: "أستاذ دكتور",
    name: "مصطفى قطب",
  },
  {
    id: 9,
    image: azhar,
    title: "أستاذ دكتور",
    name: "هشام حلمى",
  },
];

function Testimonials() {
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

        {/* Testimonials cards */}
        <div className="py-10 mt-12">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col justify-center items-center bg-[#fea928]/10 gap-5 px-4 mx-4 shadow-xl rounded-xl relative py-8">
                  <img src={data.image} alt="logo" className="w-24" />
                  <p className="text-gray-800 font-semibold text-lg">
                    {data.title}
                  </p>
                  <h1 className="text-gray-800 font-bold text-xl">
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

{
  /* <div
className="flex flex-col gap-4 shadow-lg py-8 
px-6 mx-4 rounded-xl bg-primary/10 dark:bg-gray-800 relative"
>
<div className="mb-4">
  <img
    src={data.image}
    alt="Slide-1"
    className="rounded-full w-20 h-20"
  />
</div>
<div className="flex flex-col items-center gap-4">
  <div className="space-y-3">
    <p className="text-xs text-gray-500">{data.text}</p>
    <h1 className="text-xl font-bold text-black dark:text-white">
      {data.name}
    </h1>
  </div>
</div>
<p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
  ,,
</p>
</div> */
}
