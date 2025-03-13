import Hero from "../Components/Hero";
import LatestProjects from "../Components/LatestProjects";

import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <LatestProjects />
      <Contact />
    </div>
  )
}

export default Home;