import Hero from "../Components/Hero";
import InfiniteHorizontal from "../Components/InfiniteHorizontal";
import LatestProjects from "../Components/LatestProjects";
import Testimonials from "../Components/Testimonials";

import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <LatestProjects />
      <InfiniteHorizontal />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home;