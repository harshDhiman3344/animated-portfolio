import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="Navbar">
      {/* Sidebar */} 
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{delay:1}}
        >
          Harsh Dhiman
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/harsh-dhiman-9b0926280/ "target="_blank">
            <img src="./linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/harshhh.fr/" target="_blank">
            <img src="./instagram.png" alt="" />
          </a>
          <a href="https://github.com/harshDhiman3344"target="_blank">
            <img src="./git.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
