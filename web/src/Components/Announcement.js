import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant,slideIn } from "../utils/motion";
import { Link } from 'react-router-dom';

function Announcement() {
  return (
   <section id="announcement" className="w-full h-[300px] mx-auto mt-5">
    <div className="flex flex-col">
      <h1 className={`${styles.heroHeadText}`}>Orientation is live now!</h1>
      <h1 className={`text-gray-400 text-2xl pb-6`}>Get ready to be E-NSPIRE'd</h1>
      <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="group relative h-12 w-64 overflow-hidden rounded-lg bg-none text-lg shadow"
          whileHover={{ transition: { delay: 1 } }}
          style={{ border: "1px solid #2a5bfa" }}
        >
          <div className="absolute inset-0 w-3 bg-[#2a5bfa] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <Link
            className={`${styles.sectionSubText}  hover:text-white`}
            to={"/orientation-2k25"}
          >
            <span className="flex mt-2 place-content-center relative text-white group-hover:text-black font-serif">
              Visit Orientation Website
            </span>
          </Link>
        </motion.div>
    </div>
   </section>
    
  );
}

export default Announcement;
