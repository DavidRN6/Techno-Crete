import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import seha from "../assets/logos/وزارة الصحة.webp";
import dakhleya from "../assets/logos/وزارة الداخلية.webp";
import arab from "../assets/logos/المقاولون العرب.webp";
import IESC from "../assets/logos/IESC.webp";
import aiFuttaim from "../assets/logos/ai futtaim.webp";

const InfiniteHorizontalMarquee = () => {
  const marqueeContent = [seha, dakhleya, arab, IESC, aiFuttaim];

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

  const speed = isSmallScreen ? 20 : 45;

  return (
    <div className="w-full overflow-hidden bg-white container py-11 mt-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-300%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          display: "flex",
        }}
      >
        {/* عشان نحس بالانفينيتي محتاجين تكرار أكتر */}
        {[...marqueeContent, ...marqueeContent, ...marqueeContent, ...marqueeContent].map(
          (image, index) => (
            <img
              src={image}
              key={index}
              className="mx-10 sm:w-56 sm:h-40 w-36"
              alt={`Logo ${index}`}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default InfiniteHorizontalMarquee;
