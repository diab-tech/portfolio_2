import React from "react";
import "./hero.css";
import { AnimatePresence, motion } from "motion/react";
import Animation from "./Animation";
function Hero() {
  return (
    <div className="hero p-relative flex space-between border-bottom">
      <div className="info">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="image"
        >
          <img src="/photo_2024-12-13_21-53-18-modified.png" />
          <span className="verified icon-verified"></span>
        </motion.div>
        <h1>
          Front-End Developer <br /> Creating Exceptional Web Experiences
        </h1>
        <p>
          I’m <span className="name">Shaban Diab</span>, a Front-End Developer
          passionate about crafting intuitive and dynamic web applications with
          a focus on user experience and modern design.
        </p>
        <div className="social-icon p-relative">
          <a href="https://github.com/diab-tech" target="_blank">
            <span className="icon-github"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/shabaan-diab-06bb0921a/"
            target="_blank"
          >
            <span className="icon-linkedin-square"></span>
          </a>
          <a href="mailto:shapan.mohamed9779@gmail.com" target="_blank">
            <span className="icon-envelope"></span>
          </a>
        </div>
      </div>
      <div className="animation">
        <Animation />
      </div>
    </div>
  );
}

export default Hero;
