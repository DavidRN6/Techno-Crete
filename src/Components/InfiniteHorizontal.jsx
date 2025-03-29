/* ======================
  table of contents
=========================

  1. Imports
  2. Marquee Content
  3. Duration in small and large Screen
*/

/*==============
  1. Imports
===============*/
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import seha from "../assets/logos/وزارة الصحة.webp";
import dakhleya from "../assets/logos/وزارة الداخلية.webp";
import arab from "../assets/logos/المقاولون العرب.webp";
import IESC from "../assets/logos/IESC.webp";
import aiFuttaim from "../assets/logos/ai futtaim.webp";

/*====================
  2. Marquee Content
======================*/
const InfiniteHorizontalMarquee = () => {
  const marqueeContent = [seha, dakhleya, arab, IESC, aiFuttaim];

  /*========================================
    3. Duration in small and large Screen
  ==========================================*/
  // تحديد إذا كانت الشاشة صغيرة (أقل من 768px)
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  // تحديد السرعة بناءً على حجم الشاشة
  const speed = isSmallScreen ? 8 : 15;

  return (
    <div className="w-full overflow-hidden bg-white container py-11 mt-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-100%"], // التحريك من 0% إلى -100%
        }}
        transition={{
          duration: speed, // تغيير السرعة حسب حجم الشاشة
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...marqueeContent, ...marqueeContent, ...marqueeContent].map(
          (image, index) => (
            <img
              src={image}
              key={index}
              className="mx-12 sm:w-56 sm:h-40 w-36"
              alt={`Logo ${index}`}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default InfiniteHorizontalMarquee;
