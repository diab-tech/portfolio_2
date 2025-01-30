import React, { useEffect, useRef, useState } from "react";
import "./main.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import projects from "../../Data/projectsData";

export default function Main() {
  const [activeCategory, setActiveCategory] = useState("All");
  const lastScrollY = useRef(null);
  const categories = ["All", "HTML & CSS", "Vanilla JS", "TypeScript", "React"];

  // Create Filter Buttons
  const handleBtnClick = (category) => {
    setActiveCategory(category);
  };

  // Filter Projects According Categories
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.category.some(
            (e) => e.toLowerCase() === activeCategory.toLowerCase()
          )
        );

  // Hide Nav On Small Screen
  useEffect(() => {
    const nav = document.querySelector(".left");

    if (!nav) {
      console.error("Element With class 'left' Not Fount In DOM.");
      return; // to stop here if (!nav)
    }

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 600) {
        // Scroll Down
        nav.classList.add("hidden-nav");
      } else {
        // Scroll Up
        nav.classList.remove("hidden-nav");
      }
      lastScrollY.current = window.scrollY; //update value after handleScroll is important
    };

    window.addEventListener("scroll", handleScroll);

    //clean up to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // to run only once on mount

  const navigate = useNavigate();
  const handleProjectClick = (project) => {
    navigate("/more", { state: { project } });
  };

  return (
    <div id="projects" className="main flex p-relative ">
      <section className="left flex flex-column ">
        {categories.map((category) => (
          <button
            key={category}
            className={`filterBtn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleBtnClick(category)}
          >
            {category}
          </button>
        ))}
      </section>
      <section className="right flex ">
        {filteredProjects.map((p) => (
          <div
            className="project"
            key={p.id}
            onClick={() => handleProjectClick(p)}
          >
            <img src={p.image} alt={p.name} />
            <div className="box p-1">
              <h2>{p.name}</h2>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: p.description }}
              />
              {/* {p.description}
              </p> */}
              <div className="technologies flex ">
                {p.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="links flex space-between ">
              <div className="flex gap-10">
                <a href={p.link}>
                  <span className="icon-link"></span>
                </a>
                <a href={p.github}>
                  <span className="icon-github"></span>
                </a>
              </div>
              <div className="flex ">
                <Link to={"/more"} state={{ project: p }} className="more">
                  More
                </Link>
                <span className="right icon-arrow-right"></span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="border-line" />
    </div>
  );
}
