import { useEffect, useState } from "react";
import "./app.scss";
import Hero from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar";
import gsap from "gsap";
import { motion } from "framer-motion";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import ProjectsSection from "./components/projects/ProjectsSection.jsx";
import AboutSection from "./components/about/aboutSection.jsx";

const App = () => {

  const [isClicked, setIsClicked] = useState(false);

  //Cursor EFFECT 
  useEffect(() => {
    function cursorEffect() {
      var cursor = document.querySelector("#cursor");
      var homepage = document.querySelector("#Homepage");

      homepage.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
          ease: "power1.out",
          duration: 0.5,
          x: dets.clientX,
          y: dets.clientY,
        });
      });

      homepage.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          scale: 1,
          opacity: 1,
        });
      });

      homepage.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          scale: 0,
          opacity: 0,
        });
      });
    }

    cursorEffect();
  }, []);

  return (
    <div>
      <section id="Homepage">
        <motion.div id="cursor" ></motion.div>
        <Navbar />
        <Hero />
        
      </section>
      <section id="Skills"><h1>Skills</h1> 
      <SkillsSection />
      </section>
      <section id="Projects">Projects <ProjectsSection/>
      </section>
      {/* <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section> */}
      <section id="About">About <AboutSection/>
      </section>
    </div>
  );
};

export default App;
