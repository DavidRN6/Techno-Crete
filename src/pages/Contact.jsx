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
import { useForm, ValidationError } from "@formspree/react";
import successAnimation from "../animation/done.json";

function Contact() {
  const [state, handleSubmit] = useForm("mgvyelzj");

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
          <span className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800 block"></span>
          <h2 className="text-gray-800">
            CONTACT <span className="text-yellow-500">US</span>
          </h2>
          <span className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800 block"></span>
        </div>

        <div className="text-gray-600 font-medium">
          Contact us for more information and get notified when I pushlish
          something new.
        </div>
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
        <form onSubmit={handleSubmit}>
          {/*==================
            4. Full Name Input
          =====================*/}
          <div className="gap-2 flex items-center mt-8">
            <input
              required
              placeholder="Full Name"
              type="text"
              name="name"
              id="name"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 h-9"
            />
            <ValidationError
              prefix="Name"
              field="email"
              errors={state.errors}
            />
          </div>

          {/*===============
            5. Email Input
          ==================*/}
          <div className="gap-2 flex items-center mt-[10px]">
            <input
              required
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 h-9"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/*======================
            6. Phone Number Input
          =========================*/}
          <div className="gap-3 flex items-center mt-[10px]">
            <input
              required
              placeholder="Phone Number"
              type="number"
              name="number"
              id="number"
              className="border-gray-400 hover:border-gray-800 transition duration-300 border rounded-[4px] w-96 h-9"
            />
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
          </div>

          {/*=================
            7. Message Input
          ====================*/}
          <div className="mt-4 flex gap-2 items-center">
            <textarea
              placeholder="Message"
              autoComplete="off"
              className="border-gray-400 hover:border-gray-700 transition duration-300 border rounded-[4px] w-96 h-40"
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/*==================
            8. Submit Button
          =====================*/}

          <button
            className="bg-yellow-500 text-base py-3 px-6 rounded-3xl mt-5 font-medium md:hover:scale-105 transition-all duration-300"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>

          {state.succeeded && (
            <p className="flex items-center mt-4 text-base">
              <Lottie
                loop={false}
                className="h-[2.7rem]"
                animationData={successAnimation}
              />
              Your message has been sent successfully
            </p>
          )}
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
