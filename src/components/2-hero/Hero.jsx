import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="hero p-relative">
      <div className="image">
        <img src="/public/photo_2024-12-13_21-53-18-modified.png" />
        <span className="verified icon-verified"></span>
      </div>
      <h1>
        Front-End Developer <br /> Creating Exceptional Web Experiences
      </h1>
      <p>
        I’m Shaban Diab, a Front-End Developer passionate about crafting
        intuitive and dynamic web applications with a focus on user experience
        and modern design.
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
        <a
          href="mailto:https://www.linkedin.com/in/shabaan-diab-06bb0921a/"
          target="_blank"
        >
          <span className="icon-envelope"></span>
        </a>
      </div>
      <div className="border-line" />
    </div>
  );
}

export default Hero;
