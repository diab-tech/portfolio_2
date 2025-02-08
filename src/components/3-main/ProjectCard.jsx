import { memo } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Card = memo(({ project, handleProjectClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -50, scale: 0.8 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="project"
    onClick={() => handleProjectClick(project)}
  >
    <img src={project.image} alt={project.name} loading="lazy" />
    <div className="box p-1">
      <h2>{project.name}</h2>
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
    </div>
    <div className="links flex space-between ">
      <div className="flex gap-10">
        <a href={project.link}>
          <span className="icon-link"></span>
        </a>
        <a href={project.github}>
          <span className="icon-github"></span>
        </a>
      </div>
      <div className="flex ">
        <Link to={"/more"} state={{ project }} className="more">
          More
        </Link>
        <span className="right icon-arrow-right"></span>
      </div>
    </div>
  </motion.div>
));

export default Card;
