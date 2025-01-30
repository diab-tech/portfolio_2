import React from "react";
import { Link, useLocation } from "react-router";
import "./project-details.css";

export default function ProjectDetails() {
  const location = useLocation();
  const { project } = location.state;

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

          <div className="tech mt-2">🛠️ Technologies Used:</div>
          <div className="technologies flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="links flex space-between pr-1 pl-1 ">
          <div className="link">
            <a href={project.link} target="_blank">
              <div className="flex flex-column">
                <span className="icon icon-link"></span>
                <span>Live Demo</span>
              </div>
            </a>
          </div>
          <div className="github">
            <a href={project.github} target="_blank">
              <div className="flex flex-column pr-1 pl-1">
                <span className=" icon icon-github"></span>
                <span>View Code</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
