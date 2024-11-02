import "./hero.scss";
import { motion } from "framer-motion";
import SpacemanCanvas from "../spaceman/Spaceman.jsx"

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,

        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
      }
    }
}
const scrollVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-360%",
        transition:{
            duration:15,
            repeatType:"mirror",
            repeat:Infinity
        }
    },
}
const hero = () => {

  const rotationX = 0;
  const rotationY = 0;
  const scale = [2, 2, 2];
  const position = [1, 0, 0]; // Adjust as needed

  return (
    <div className="Hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>HARSH DHIMAN</motion.h2>
          <motion.h1 variants={textVariants}>Developer & Designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See The Works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
        </motion.div>
      </div>
      <div className="avatarContainer">
      <SpacemanCanvas rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />

      </div>
      <motion.div className="slidingText" variants={scrollVariants} initial="initial" animate="animate">
        Python WebDeveloper Designer Engineer
      </motion.div>
    </div>
  );
};

export default hero;
