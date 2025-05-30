/* ======================
  table of contents
=========================

  1. Imports
  2. Title Section
  3. Form
  4. Full Name Input
  5. Email Input
  6. Phone Number Input
  7. Message Input
  8. Submit Button
  9. Animation of successful sending of the message
*/

/*==============
  1. Imports
===============*/
import Lottie from "lottie-react";
import contactUs from "../animation/contact us.json";
import { motion } from "framer-motion";
import { slideUpVariants } from "../animation/animation";

function Contact() {
  return (
    <section id="contact" className="pt-14">
      {/*=================
        2. Title Section
      ====================*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-center"
      >
        <div className="inline-flex gap-2 items-center font-bold text-3xl lg:text-4xl py-3">
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
          <p className="text-gray-800">
            CONTACT <span className="text-yellow-500">US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800"></p>
        </div>
        <p className="text-gray-600 font-medium">
          Contact us for more information and get notified when I pushlish
          something new.
        </p>
      </motion.div>

      {/*==========
        3. Form
      =============*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        id="form"
        className="flex justify-around mt-[4%] mb-[6%]"
      >
        <form action="">
          {/*==================
            4. Full Name Input
          =====================*/}
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

          {/*===============
            5. Email Input
          ==================*/}
          <div className="gap-2 flex items-center mt-4">
            <input
              required
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 h-9"
            />
          </div>

          {/*======================
            6. Phone Number Input
          =========================*/}
          <div className="gap-3 flex items-center mt-4">
            <input
              required
              placeholder="Phone Number"
              type="number"
              name="number"
              id="number"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 h-9"
            />
          </div>

          {/*=================
            7. Message Input
          ====================*/}
          <div className="mt-5 flex gap-2 items-center">
            <textarea
              placeholder="Message"
              autoComplete="off"
              className="border-gray-400 hover:border-gray-700 transition duration-300 border rounded-[4px] w-96 h-40"
              name="message"
              id="message"
            ></textarea>
          </div>

          {/*==================
            8. Submit Button
          =====================*/}
          <button className="bg-yellow-500 text-base py-3 px-6 rounded-3xl mt-5 font-medium md:hover:scale-105 transition-all duration-300">
            Sent
          </button>
        </form>

        {/*==================================================
          9. Animation of successful sending of the message
        =====================================================*/}
        <div id="animation">
          <Lottie
            className="lg:h-[350px] md:h-[300px]"
            animationData={contactUs}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
