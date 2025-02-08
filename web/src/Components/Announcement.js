import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";
import { Link } from "react-router-dom";

function Announcement() {
  return (
    <section
      id="announcement"
      className="w-full h-[400px] mx-auto relative overflow-hidden"
    >
      <motion.div
        variants={slideIn("right", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex justify-center  backdrop-blur-lg rounded-2xl pb-20 mx-auto max-w-4xl mt-10 shadow-xl border border-white/20 border-b-0 rounded-b-none"
      >
        <div className="space-y-3 flex justify-center text-center flex-col items-center">
          <motion.h1
            variants={textVariant()}
            className={`${styles.heroHeadText} text-white drop-shadow-md `}
          >
            ORIENTATION IS LIVE NOW!
          </motion.h1>

          <motion.p
            variants={textVariant(0.2)}
            className="text-gray-200 text-2xl pb-6 drop-shadow-md"
          >
            Get ready to be{" "}
            <span className="text-blue-400 font-bold">E-NSPIRE'd</span>
          </motion.p>

          {/* Glassmorphic button */}
          <motion.div
            variants={slideIn("down", "spring", 0.2, 1)}
            className="group relative h-14 w-72 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300" />
            <Link
              className="flex items-center justify-center h-full w-full gap-2"
              to="/orientation-2k25"
            >
              <span className="text-white font-semibold text-lg relative z-20 tracking-wider">
                Visit Orientation Website
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Announcement;
