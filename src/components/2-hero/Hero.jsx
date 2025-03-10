import "./hero.css";
import { motion } from "motion/react";
import Animation from "./Hero-Animation";
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
        <h1>
          Front-End Developer <br /> Creating Exceptional Web Experiences
        </h1>
        <p>
          Hi, I’m <span className="name">Shaban Diab</span>, a Front-End
          Developer passionate about crafting intuitive and dynamic web
          applications using modern technologies like React and JavaScript. With
          a strong focus on user experience and innovative design, I strive to
          create seamless and engaging digital experiences that leave a lasting
          impression.
        </p>
        <div className="social-icon p-relative">
          <a
            href="https://github.com/diab-tech"
            target="_blank"
            aria-label="Visit My GitHub profile"
          >
            <span className="icon-github"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/shabaan-diab-06bb0921a/"
            target="_blank"
            aria-label="Visit My LinkedIn profile"
          >
            <span className="icon-linkedin-square"></span>
          </a>
          <a
            href="mailto:shapan.mohamed9779@gmail.com"
            target="_blank"
            aria-label="Send an email to Me"
          >
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
