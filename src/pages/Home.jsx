/* ======================
  table of contents
=========================

  1. Imports
  2. Home
*/

/*==============
  1. Imports
===============*/
import Hero from "../Components/Hero";
import InfiniteHorizontal from "../Components/InfiniteHorizontal";
import LatestProjects from "../Components/LatestProjects";
import Testimonials from "../Components/Testimonials";
import About from "./About";
import Contact from "./Contact";

/*============
  2. Home
==============*/
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
  );
}

export default Home;
