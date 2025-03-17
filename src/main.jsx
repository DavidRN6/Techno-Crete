import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Techno-Crete">
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
