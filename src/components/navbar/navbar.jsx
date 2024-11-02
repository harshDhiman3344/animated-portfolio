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
          <a href="">
            <img src="./facebook.png" alt="" />
          </a>
          <a href="">
            <img src="./instagram.png" alt="" />
          </a>
          <a href="">
            <img src="./youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
