import React from "react";
import { motion } from "framer-motion";
import "./proj.scss"
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
  // Your projects data
  const projects = [
    {
      name: "Astrophotography App",
      detail: "An app for astrophotography enthusiasts with features like astronomical news and event tracking.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      link: "https://your-astrophotography-app-link.com",
    },
    {
      name: "MERN Blog Platform",
      detail: "A full-featured blog platform built with the MERN stack, including user authentication and a CMS.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      link: "https://your-mern-blog-platform-link.com",
    },
    {
      name: "3D Modeling Portfolio",
      detail: "A portfolio showcasing 3D models and designs created in Blender, with downloadable assets and project breakdowns.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      link: "https://your-3d-modeling-portfolio-link.com",
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
    </div>
  );
};

export default ProjectsSection;


