import "../framework.css";
const projects = [
  {
    id: 1,
    name: "Bondi",
    category: ["html & css"],
    image: "/bondi.webp",
    link: "https://diab-tech.github.io/Bondi/",
    github: "https://github.com/diab-tech/Bondi",
    description: `<strong>Bondi</strong> - Modern & Stylish Website 🌐\n Bondi is a sleek and responsive website designed with a modern aesthetic.
It showcases a clean user interface, smooth animations, and an intuitive layout to provide an engaging user experience.
The project is built using the latest front-end technologies to ensure high performance and seamless responsiveness across all devices.

 <h3>✨Features✨</h3> 
<strong>Fully Responsive Design:</strong> Adapts perfectly to desktops, tablets, and mobile devices.

<strong>Modern UI/UX:</strong> A visually appealing layout with smooth interactions.

<strong>Clean & Well:</strong> Structured Code – Built with best practices for maintainability.

<strong>Animated Sections:</strong> Eye-catching animations enhance user engagement.

<strong>Optimized Performance:</strong> Fast loading and smooth scrolling.`,
    technologies: ["HTML5", "CSS3"],
  },
  {
    id: 2,
    name: "Special Design",
    category: ["Vanilla JS"],
    image: "../../special-design.webp",
    link: "https://diab-tech.github.io/special-design/",
    github: "https://github.com/diab-tech/special-design",
    description: `<strong>Special Design</strong> - Customizable Design for Personalization 🎨
Special Design is a visually dynamic and highly customizable web project designed to give users full control over the design experience.
The project features an elegant and minimalist interface that provides the option to personalize the background and text styling.
It allows for a unique and engaging experience through its interactive features.

 <h3>✨Features✨</h3> 
<strong>Customizable Background:</strong> Users can choose to set a static background or enable a Random Background Color (Random BGC) for an ever-changing aesthetic.

<strong>Font Color Customization:</strong> A simple option for users to change the text color according to their preferences, offering a more personalized experience.

<strong>Responsive:</strong> The project works seamlessly across different devices, including desktops, tablets, and mobiles.

 <strong>Minimalist:</strong> A clean and user-friendly interface focused on functionality and customization.
`,
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  // {
  //   id: 3,
  //   name: "Small Store (Under Development)",
  //   category: ["React"],
  //   image: "/small-store.png",
  //   link: "https://my-first-domain-v2.netlify.app/",
  //   github: "https://github.com/diab-tech/my-first-domain",
  //   description:
  //     "This is a simple and cleanly designed web application hosted on Netlify, possibly created as a learning project. The website likely demonstrates basic front-end web development skills, such as HTML, CSS, and JavaScript, and could include features like Home Page with introductory content.Basic navigation and layout for showcasing different sections.Interactive elements or components (e.g., buttons, forms, or animations)",
  //   technologies: [
  //     "HTML5",
  //     "CSS3",
  //     "JavaScript",
  //     "React",
  //     "Redux Toolkit",
  //     "React Bootstrap",
  //   ],
  // },
  {
    id: 4,
    name: "My Portfolio",
    category: ["TypeScript", "React"],
    image: "/portfolio.webp",
    link: "https://diab-portfolio.netlify.app/",
    github: "https://github.com/diab-tech/my-portfolio",
    description: `<strong>Welcome</strong> to my personal portfolio!\nThis project is a showcase of my skills, projects,and experiences as a developer. \nIt’s designed to reflect my creativity, technical expertise, and passion for building meaningful and user-friendly applications.\n
 <h3>✨Features✨</h3> 
  <strong>Responsive Design:</strong> Works on all devices (desktop, tablet, mobile).

  <strong>Modern UI:</strong> A clean and visually appealing interface built with modern web technologies.

  <strong>Project Showcase:</strong> Displays my projects, including descriptions, technologies used, and live demos.

  <strong>Contact Form:</strong> An interactive form that allows visitors to reach out to me directly.

  <strong>Custom Fonts & Icons:</strong> Unique typography and icons for a personalized touch.

  <strong>Dynamic Content:</strong> Easily updatable project data stored in a structured format for quick modifications.`,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "TailwindCSS",
    ],
    tools: ["Vite", "ESLint"],
  },
];

export default projects;
