import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillCode, AiFillVideoCamera } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Services = () => {
  
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
          
        >
          <p><a href="/"> MMMUT Student</a></p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span><a href="https://github.com/Ashwanikumar1715"  rel="noreferrer" target="_blank" >Web Development</a></span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillCode />
          <span><a href="https://www.codechef.com/users/ashwani1715" target="_blank" rel="noreferrer">Competitive Coder</a></span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillVideoCamera />
          <span>< a href="/">Video Editor|Creator</a></span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
