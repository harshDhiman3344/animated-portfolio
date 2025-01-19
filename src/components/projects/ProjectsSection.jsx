import React from "react";
import { motion } from "framer-motion";
import "./proj.scss"

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
const BoxVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const ProjectsSection = () => {
  const projects = [
    {
      name: "StudyTimer WebApp",
      detail: "This tool is designed to help you stay focused during study sessions and manage your time effectively.",
      image: "./StudyTimer.png",
      link: "https://harshdhiman3344.github.io/StudyTimer/",
    },
    {
      name: "Sleek Music Player",
      detail: "A simple, functional music player built with HTML, CSS, and JavaScript.",
      image: "./MUSIC.png", // Replace with a relevant image
      link: "https://harshdhiman3344.github.io/MusicPlayer/", // Replace with your project link
  },
  
    {
      name: "3D Music Visualizer",
      detail: "A functional 3D app which generates mesmerizing visuals of any music (mp3) file.",
      image: "./NEON-3D.png",
      link: "https://harshdhiman3344.github.io/3dVisualizer/",
    },
    {
      name: "BLENDER PROJECTS",
      detail: "Things i have made in 3D software blender. click on the button to view all of them",
      image: "./BLENDER.png",
      link: "https://www.instagram.com/hoshiko3d/",
    },
  ];

  return (
    <div className="projectsContainer">
      {projects.map((project, index) => (
        <div className="card-holder">
        <div className="img">
          <img src={project.image} />
        </div>
        <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.detail}</p>
        <button className="btn btn-primary" onClick={() => window.open(project.link, "_blank")} >
        View Project
        </button>
        </div>
        </div>
      ))}
      <motion.div className="slidingProjects" variants={scrollVariants} initial="initial" animate="animate">
        PROJECTS PROJECTS PROJECTS 
      </motion.div>
    </div>
  );
};

export default ProjectsSection;


