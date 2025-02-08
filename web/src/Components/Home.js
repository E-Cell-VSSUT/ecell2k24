import React from "react";
import { StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import { slideIn } from "../utils/motion";
import Announcement from './Announcement';

function Home() {
  return (
    <section id="home" className="relative w-screen h-screen mx-auto mt-10">
      <StarsCanvas />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-600/40 via-white/5 to-purple-700/40 rounded-full blur-3xl top-1/2 left-1/4 animate-float" />
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-700/40 via-white/5 to-blue-700/20 rounded-full blur-3xl top-1/2 right-1/4 animate-float-delay" />
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5 my-19`}
      >
        <motion.div
          variants={slideIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img className="h-20" src={logo} alt="" />
          <motion.h1 className={`${styles.heroHeadText}text-white-100`}>
            ENTREPRENEURSHIP CELL | VSSUT
          </motion.h1>
          <h2 className={`${styles.heroSubText} mt-2  text-white-100`}>
            <i>A Techno-Managment Club</i>
          </h2>
        </motion.div>
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-none text-lg shadow"
          whileHover={{ transition: { delay: 1 } }}
          style={{ border: "1px solid white" }}
        >
          <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <a
            className={`${styles.sectionSubText}  hover:text-white`}
            href="#about"
          >
            <span className="flex mt-2 place-content-center relative text-white group-hover:text-black font-serif">
              Explore
            </span>
          </a>
        </motion.div>
       
        
      </div>
       {/* <StarsCanvas /> */}
       <div className="absolute flex justify-center mx-0 items-end -bottom-14 w-full z-10 px-9"><Announcement/></div>
      <div className="absolute m-0 p-0 w-screen h-[250px] bg-slate-950 blur-3xl animate-float-delay -bottom-36 pointer-events-none" />
    </section>
  );
}

export default Home;
