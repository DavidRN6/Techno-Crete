import footerPattern from "../assets/photos/footer-pattern.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaLocationArrow } from "react-icons/fa6";

const footerImg = {
  backgroundImage: `url(${footerPattern})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function Footer() {
  return (
    <section id="footer" style={footerImg} className="text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 id="logo" className="md:text-2xl text-lg font-bold">
              TechnoCrete <span className="text-yellow-500">Constructions</span>
            </h1>
            <h2 className="flex items-center gap-2 mb-2 mt-5">
              <MdOutlineEmail />
              yugiohgxd600@gmail.com
            </h2>
            <h4>&copy; TechnoCrete | All Rights Reserved</h4>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify mb-3">
                  COMPANY
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>PROJECTS</li>
                  <li>CONTACT</li>
                </ul>
              </div>
            </div>

            <div></div>

            {/* social links */}

            <div className="ml-4 md:ml-0">
              <div className="flex items-center gap-3 mt-6">
                <a href="">
                  <FaFacebookSquare className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl hover:-translate-y-1 hover:scale-105 duration-300" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Egypt, Cairo</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoIosCall />
                  <p>01200000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
