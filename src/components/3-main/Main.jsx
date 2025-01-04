import React, { useEffect, useRef } from "react";
import "./main.css";
import { Link } from "react-router-dom";
const projects = [
  {
    id: 1,
    name: "Bondi",
    category: "html & css",
    image: "/bondi.png",
    link: "https://diab-tech.github.io/Bondi/",
    github: "https://github.com/diab-tech/Bondi",
    description:
      "Bondi is a sleek and modern web project showcasing responsive design and interactive elements. It features a clean, user-friendly interface with well-structured layouts and intuitive navigation. Whether viewed on desktop or mobile, the site adapts seamlessly, providing a smooth user experience across different devices. The Bondi website demonstrates best practices in front-end development, offering a visually appealing and functional example of modern web design principles.",
    technologies: ["HTML", "CSS"],
  },
  {
    id: 2,
    name: "Small Store",
    category: "JavaScript",
    image: "/small-store.png",
    link: "https://my-first-domain-v2.netlify.app/",
    github: "https://github.com/diab-tech/my-first-domain",
    description:
      "This is a simple and cleanly designed web application hosted on Netlify, possibly created as a learning project. The website likely demonstrates basic front-end web development skills, such as HTML, CSS, and JavaScript, and could include features like Home Page with introductory content.Basic navigation and layout for showcasing different sections.Interactive elements or components (e.g., buttons, forms, or animations).Potential use of frameworks or libraries like React, Tailwind, or Bootstrap.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux Toolkit",
      "React Bootstrap",
    ],
  },
  {
    id: 3,
    name: "Company Page",
    category: "JavaScript",
    image: "/company-page.png",
    link: "https://diab-tech.github.io/special-design/",
    github: "https://github.com/diab-tech/special-design",
    description:
      "This web project, hosted on GitHub Pages, showcases a special design concept with a focus on creativity and visual appeal. It may highlight modern web design trends, such as: Stylized UI/UX: Engaging user interface elements like animations, hover effects, or custom layouts. Responsive Design: A layout optimized for various screen sizes, ensuring accessibility across devices. Thematic Presentation: Possibly tailored for a specific purpose, such as a product showcase, portfolio, or experimental design.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

// filters
// All Projects Filter
const all = () => {
  projects.find((p) => console.log(p.category == "JavaScript"));
};
export default function Main() {
  const lastScrollY = useRef(null);
  useEffect(() => {
    const nav = document.querySelector(".left");

    if (!nav) {
      console.error("Element With class 'left' Not Fount In DOM.");
      return; // to stop here if (!nav)
    }

    const handleScroll = () => {
      console.log("Current scroll position:", window.scrollY);
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

  return (
    <div className="main flex p-relative ">
      <section className="left flex flex-column">
        <button onClick={() => all()}>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>
      <section className="right flex ">
        {projects.map((p) => (
          <div className="project" key={p.id}>
            <img src={p.image} />
            <div className="box p-1">
              <h2>{p.name}</h2>
              <p>{p.description}</p>
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
                <Link to={"/more"} className="more">
                  More
                </Link>
                <span className="right icon-arrow-right"></span>
              </div>
            </div>

            {/* <a href={p.link}>
              <span className="icon-external-link"></span>
              Live Demo
            </a> */}
          </div>
        ))}
        {/* <div className="card border">
          <img src="/public/1.jpg" />
          <div className="box">
            <h3>React Project</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio voluptatum atque corrupti dolore sit
            </p>
            <div className="links flex space-between">
              <div className="flex">
                <a href="https://diab-tech.github.io/Bondi/">
                  <span className="icon-link"></span>
                </a>
                <a href="https://github.com/diab-tech/Bondi">
                  <span className="icon-github"></span>
                </a>
              </div>
              <div className="flex ">
                <Link to={"/more"} className="more">
                  More
                </Link>
                <span className="right icon-arrow-right"></span>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <div className="border-line" />
    </div>
  );
}
