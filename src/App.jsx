import { useEffect, useState } from "react";
import "./app.scss";
import Hero from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar";
import Spaceman from "./components/spaceman/Spaceman.jsx";
import gsap from "gsap";
import { motion } from "framer-motion";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import { Center } from "@react-three/drei";

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
      <section id="Projects">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
