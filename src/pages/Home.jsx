import Hero from "../Components/Hero";
import InfiniteHorizontal from "../Components/InfiniteHorizontal";
import LatestProjects from "../Components/LatestProjects";

import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <LatestProjects />
      <InfiniteHorizontal />
      <Contact />
    </div>
  )
}

export default Home;