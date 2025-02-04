import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";
import "./project-details.css";
import { motion } from "motion/react";

export default function ProjectDetails() {
  const location = useLocation();
  const { project } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);

    const mode = localStorage.getItem("mode");
    if (mode) {
      document.body.classList.add(mode);
    }
  }, []);

  return (
    <div className="container-2 mt-2">
      <div className="project " key={project.id}>
        <img src={project.image} alt={project.name} />
        <div className="box p-1">
          <h2 className="mb-1">{project.name}</h2>
          {/* makes you use html tags in jsx */}
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          <h3 className="tech mt-2"> Technologies:</h3>
          <div className="sub-tech flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          {project.tools && (
            <div className="tools-container">
              <h3 className="tools mt-2"> Tools:</h3>
              <div className="sub-tools flex flex-wrap gap-5">
                {project.tools.map((tool, index) => (
                  <span key={index}>{tool}</span>
                ))}
              </div>
            </div>
          )}

          <div className="sub-tools flex flex-wrap gap-5"></div>
        </div>
        <div className="links flex space-between pr-1 pl-1 mt-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2 }} // تكبير مع دوران بسيط
            whileTap={{ scale: 0.9 }} // تصغير مع دوران عكسي عند النقر
            transition={{ type: "spring", stiffness: 300 }}
            className="link"
          >
            <a href={project.link} target="_blank">
              <div className="flex flex-column">
                <span className="icon icon-link"></span>
                <span>Live Demo</span>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="github"
          >
            <a href={project.github} target="_blank">
              <div className="flex flex-column pr-1 pl-1">
                <span className=" icon icon-github"></span>
                <span>View Code</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
