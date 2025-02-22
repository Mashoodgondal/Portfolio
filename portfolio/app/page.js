// import H from "./home/page";
// import Hero from "./home/page";

import About from "./about/page";
import ContactUs from "./contact/page";
// import Contect from "./contect/page"
import Hero from "./home/page";
import Projects from "./projects/page";


export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero />
      <About />
      <Projects />
      <ContactUs />
    </>
  );
}
