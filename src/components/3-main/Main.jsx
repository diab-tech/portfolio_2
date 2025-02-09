import { useCallback, useEffect, useRef, useState } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import projects from "../../Data/projectsData";
import Card from "./ProjectCard.jsx";
import { AnimatePresence } from "motion/react";

export default function Main() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [clickedProjectId, setClickedProjectId] = useState(null);
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
      if (window.scrollY > lastScrollY.current && window.scrollY > 700) {
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
  const handleProjectClick = useCallback(
    (project) => {
      setClickedProjectId(project.id);

      navigate("/more", { state: { project } });
    },
    [navigate]
  );

  return (
    <div id="projects" className="main ">
      <section className="left flex-column">
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
      <section className="right">
        <AnimatePresence mode="sync">
          {filteredProjects.map((p) => (
            <Card
              key={p.id}
              project={p}
              handleProjectClick={handleProjectClick}
            />
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
}
