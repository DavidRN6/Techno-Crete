import { motion } from "framer-motion";
import seha from "../assets/logos/وزارة الصحة.webp";
import dakhleya from "../assets/logos/وزارة الداخلية.webp";
import arab from "../assets/logos/المقاولون العرب.webp";
import IESC from "../assets/logos/IESC.webp";
import aiFuttaim from "../assets/logos/ai futtaim.webp";

const InfiniteHorizontalMarquee = () => {
  const marqueeContent = [seha, dakhleya, arab, IESC, aiFuttaim];

  return (
    <div className="w-full overflow-hidden bg-white container py-11 mt-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-100%"], // Move from 0% to -100% (left)
        }}
        transition={{
          duration: 20, // Increased duration for slower animation
          repeat: Infinity, // Infinite loop
          ease: "linear", // Smooth linear animation
        }}
      >
        {/* Render marquee content three times for seamless looping */}
        {[...marqueeContent, ...marqueeContent, ...marqueeContent].map(
          (image, index) => (
            <img
              src={image}
              key={index}
              className="mx-12 w-56 h-40" // Increased margin for more space
              alt={`Logo ${index}`} // Add alt text for accessibility
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default InfiniteHorizontalMarquee;