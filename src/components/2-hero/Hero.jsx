import "./hero.css";
import { motion } from "motion/react";
import Animation from "./Animation";
function Hero() {
  return (
    <div className="hero p-relative flex space-between border-bottom">
      <div className="info">
        <div className="image">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/photo_2024-12-13_21-53-18-modified.webp"
            loading="lazy"
            alt="My Photo"
          />
          <span className="verified icon-verified"></span>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          Front-End Developer <br /> Creating Exceptional Web Experiences
        </motion.h1>
        <p>
          Hi, I’m <span className="name">Shaban Diab</span>, a Front-End
          Developer passionate about crafting intuitive and dynamic web
          applications using modern technologies like React and JavaScript. With
          a strong focus on user experience and innovative design, I strive to
          create seamless and engaging digital experiences that leave a lasting
          impression.
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
