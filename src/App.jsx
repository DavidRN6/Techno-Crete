import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa6";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [scroll, setScroll] = useState(false);

  //==================
  // Scroll To Top
  //==================
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // تنظيف الحدث
  }, []);

  return (
    <>
      <div id="up">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:productId" element={<ProjectPage />} />
        </Routes>
        <Footer />

        {/*==============
            Scroll Button
          =================*/}
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
