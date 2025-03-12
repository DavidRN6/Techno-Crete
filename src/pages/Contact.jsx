import Lottie from "lottie-react";
import Constructions from "../animation/Constructions.json";
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";

function Contact() {
  return (
    <section id="contact" className="mt-4">
      {/*=========
        Title
      ============*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-center"
      >
        <div className="inline-flex gap-2 items-center font-bold text-3xl lg:text-4xl py-3">
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
          <p className="text-yellow-500">
            CONTACT <span className="text-gray-800">US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
        </div>
        <p className="text-gray-600 font-medium">
          Contact us for more information and get notified when I pushlish
          something new.
        </p>
      </motion.div>

      {/*=========
        Form
      ===========*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        id="form"
        className="flex justify-around mt-[4%] mb-[6%]"
      >
        <form action="">
          <div className="gap-2 flex items-center mt-8">
            <input
              required
              placeholder="Full Name"
              type="text"
              name="email"
              id="email"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 lg:w-96 h-9"
            />
          </div>
          <div className="gap-2 flex items-center mt-8">
            <input
              required
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 h-9"
            />
          </div>
          <div className="gap-3 flex items-center mt-8">
            <input
              required
              placeholder="Phone Number"
              type="number"
              name="number"
              id="number"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 h-9"
            />
          </div>

          <div className="mt-8 flex gap-2 items-center">
            <textarea
              placeholder="Message"
              autoComplete="off"
              className="border-gray-400 hover:border-gray-700 transition duration-300 border rounded-[4px] w-96 h-40"
              name="message"
              id="message"
            ></textarea>
          </div>

          <button className="bg-yellow-500 text-base py-3 px-6 rounded-3xl mt-3 font-medium hover:scale-[1.1] transition-all duration-300">
            Sent
          </button>
        </form>

        <div id="animation">
          <Lottie
            className="lg:h-[350px] md:h-[250px]"
            animationData={Constructions}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
