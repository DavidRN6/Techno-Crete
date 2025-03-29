/* ======================
  table of contents
=========================

  1. Imports
  2. Image Style
  3. Scroll To Section Function
  4. Company Details
  5. Company Links
  6. Social Links
*/

/* =============
  1. Imports
================ */
import footerPattern from "../assets/photos/footer-pattern.webp";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router";

/*================
  2. Image Style
==================*/
const footerImg = {
  backgroundImage: `url(${footerPattern})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

/*================================
  3. Scroll To Section Function
==================================*/
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

function Footer() {
  return (
    <section id="footer" style={footerImg} className="text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* ==================
            4. Company Details
          ====================== */}

          <div className="py-8 px-4 lg:px-0">
            <div className="flex items-center">
              <img src="logo.webp" alt="" className="w-16" />
              <h1 id="logo" className="md:text-2xl text-lg font-bold">
                TechnoCrete{" "}
                <span className="text-yellow-500">Constructions</span>
              </h1>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>39, El-khalifa El-Maamoun ST, Roxy, Cairo</p>
              </div>
              <a
                href="mailto:info@technocrete-constructions.com`"
                className="flex items-center gap-2 mb-2 mt-5"
              >
                <MdOutlineEmail />
                info@technocrete-constructions.com
              </a>
            </div>
          </div>

          {/*=================
            5. Company Links
          ====================*/}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify mb-3">COMPANY</h1>
                <ul className="flex flex-col gap-3">
                  <Link to="/" onClick={() => scrollToSection("home")}>
                    HOME
                  </Link>
                  <Link to="/" onClick={() => scrollToSection("about")}>
                    ABOUT
                  </Link>
                  <Link to="/products">PROJECTS</Link>
                  <Link to="/" onClick={() => scrollToSection("contact")}>
                    CONTACT
                  </Link>
                </ul>
              </div>
            </div>

            <div></div>

            {/*==============
            6. Social Links 
            =================*/}

            <div className="ml-4 md:ml-0">
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.facebook.com/TechnoCrete12?rdid=4sq1ASVnmLFtWJ7M&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DDBd6QrJJ%2F#"
                  target="_blank"
                >
                  <FaFacebookSquare className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/technocrete-construction-672093356/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mt-3">
                  <IoIosCall />
                  <p>01001600557</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoIosCall />
                  <p>01111200854</p>
                </div>
                <h4 className="mt-3">
                  &copy; TechnoCrete | All Rights Reserved
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
