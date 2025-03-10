import Hero from "../Components/Hero";
import Products from "../Components/Products";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Contact />
    </div>
  )
}

export default Home;