import { motion } from "framer-motion";

function Test() {

  const items= [
    "item1","item2","item3","item4"
  ]

  const variants={
    visible:(i)=>({
      opacity:1,
      x:100,
      transition:{delay:i*0.3}
    }),

    hidden:{
      opacity:0
    }
  }

  return (
    <div className="course">
   <motion.ul initial="hidden" animate="visible" variants={variants} >
    {items.map((item,i)=>(
      <motion.li variants={variants} custom={i} key={item}>{item}</motion.li>
    ))}
   </motion.ul>
    </div>
  );
}

export default Test;
