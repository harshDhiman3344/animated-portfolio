import React from "react";
import SkillBox from "../skillBox/SkillBox";
import "./skillsSection.scss";
import { motion } from "framer-motion";

const scrollVariants={
  initial:{
      x:0,
  },
  animate:{
      x:"-415%",
      transition:{
          duration:15,
          repeatType:"mirror",
          repeat:Infinity
      }
  },
}

const BoxVariants={
  initial:{
      x:-500,
      opacity:0,
  },
  animate:{
      x:0,
      opacity:1,

      transition:{
          duration:1,
          staggerChildren: 0.2,
      }
  },
  
}

const SkillsSection = () => {
  const skills = [
    { name: "Python", detail: "Proficient in pythot" },
    { name: "Web Development (MERN)", detail: "Experience with Express, React, and Node.js" },
    { name: "Blender 3D", detail: "Skilled in 3D modeling" },
    { name: "Figma", detail: "Experience in UI/UX design and prototyping" },
    { name: "C++", detail: "Knowledge of object-oriented programming and algorithms" },
    { name: "C#", detail: "Proficient in game development and scripting" },
    // Add more skills as needed
];


  // Group skills into rows of 3
  const rows = [];
  for (let i = 0; i < skills.length; i += 3) {
    rows.push(skills.slice(i, i + 3));
  }

  return (
    <motion.div variants={BoxVariants} className="skills-section">
      {rows.map((row, rowIndex) => (
        <motion.div variants={BoxVariants} key={rowIndex} className="skills-row">
          {row.map((skill, index) => (
            <SkillBox key={index} skillName={skill.name} skillDetail={skill.detail} />
          ))}
        </motion.div>
      ))}

      <motion.div className="slidingSkills" variants={scrollVariants} initial="initial" animate="animate">
        HTML5 CSS Js React Express Python Blender GIT
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;