import React from "react";
import "./aboutSection.scss";
import { motion } from "framer-motion";


const scrollVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-560%",
        transition:{
            duration:10,
            repeatType:"mirror",
            repeat:Infinity
        }
    },
}

const scrollVariants2={
    initial:{
        x:0,
    },
    animate:{
        x:"-300%",
        transition:{
            duration:10,
            repeatType:"mirror",
            repeat:Infinity
        }
    },
}

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Harsh Dhiman. I'm a passionate developer with an interest in
          creating unique and engaging web experiences. I love coding and
          exploring new technologies. When I'm not coding, you can find me
          diving into astronomy or working on my latest creative projects.
        </p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/hoshiko3d/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram 3D ART PAGE
          </a>
          <a
            href="https://github.com/harshDhiman3344"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-dhiman-9b0926280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <motion.div className="slidingText" variants={scrollVariants} initial="initial" animate="animate">
      Developer | Designer | Innovator 
       </motion.div>
       <motion.div className="slidingText2" variants={scrollVariants2} initial="initial" animate="animate">
       | Creator | Problem Solver ✨
       </motion.div>
    </div>
  );
};

export default AboutSection;
