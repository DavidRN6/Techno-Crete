/* ======================
  table of contents
=========================

  1. Imports
  2. Scrollbar
  3. Animation Settings
  4. Scroll Indicator
  5. Scroll Button
*/

/*==============
  1. Imports
===============*/
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa6";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

/*==============
  2. Scrollbar
===============*/
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/*==================================================
  3. Animation Settings  ==> للتنقل بين الصفحات
==================================================*/
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

function App() {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  /*======================
    4. Scroll Indicator 
  =======================*/
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="up">
        <Navbar />
        <ScrollToTop />

        {/* AnimatePresence يضمن إن الأنيمشن يشتغل عند تغيير الصفحة */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:productId" element={<ProjectPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <Footer />

        {/*==================
          5. Scroll Button
        ====================*/}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ opacity: scroll ? 1 : 0, transition: "1s" }}
          className="w-9 h-9 bg-yellow-500 text-white fixed bottom-8 right-[3%] 
                      border border-white/20 rounded-full p-3 transition-all duration-300"
        >
          <FaArrowUp className="w-full h-full" />
        </button>
      </div>
    </>
  );
}

export default App;
