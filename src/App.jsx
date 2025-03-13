import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Product from "./pages/Product";
import { FaArrowUp } from "react-icons/fa6";

// Load Screen
const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>
        <p className="mt-4 text-gray-600 font-semibold">Loading...</p>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Scroll To Top
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

    // Function for behavior smooth
    const handleScrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div id="up">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
          </Routes>
          <Footer />

          <button onClick={handleScrollTop} style={{ opacity: scroll ? 1 : 0, transition: "1s" }}>
              <FaArrowUp className="w-9 h-9 bg-yellow-500 text-white fixed bottom-8 right-[3%] text-center border border-white/20 rounded-full p-3 
             transition-all duration-300 shadow-lg" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
