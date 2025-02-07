import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const modeBtn = document.querySelector(".toggle-mode");

    // Get Mode From LocalStorage
    let savedMode = window.localStorage.getItem("mode");
    if (savedMode) {
      document.body.className = savedMode;
    }

    // Define the toggle function
    const toggleMode = () => {
      const isDark = document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode", !isDark);

      window.localStorage.setItem("mode", document.body.className);
    };

    if (modeBtn) {
      // Add the event listener
      modeBtn.addEventListener("click", toggleMode);
    }

    // cleaner
    return () => {
      if (modeBtn) {
        modeBtn.removeEventListener("click", toggleMode);
      }
    };
  }, []);

  // Handle scroll2up
  useEffect(() => {
    const arrowUp = document.querySelector("a.scroll2up");

    let debounceTimer;

    const handleScroll2up = () => {
      clearTimeout(debounceTimer); // Remove Any Recent SetTimeout
      debounceTimer = setTimeout(() => {
        const scroll = window.scrollY;
        if (scroll < 500) {
          arrowUp.classList.add("hide");
          arrowUp.classList.remove("show");
        } else {
          arrowUp.classList.remove("hide");
          arrowUp.classList.add("show");
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll2up);

    // Cleaning
    return () => {
      window.removeEventListener("scroll", handleScroll2up);
    };
  }, []);

  return (
    <header id="up">
      {/* empty div to make nav in the middle of screen */}
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowMenu(true);
          // Prevent PageScroll
          document.body.style.overflow = "hidden";
        }}
      />

      <div />

      <nav>
        {/* ul>(li>a)*5 */}
        <ul className="flex">
          <li>
            <a href="#up">About</a>
          </li>
          {/* <li>
            <a href="">Article</a>
          </li> */}
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="">Speaking</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="toggle-mode">
        <i className="moon icon-moon-o"></i>
        <i className="sun icon-sun"></i>
      </button>

      {showMenu && (
        <div className="overlay">
          <ul className="modal">
            <button
              onClick={() => {
                setShowMenu(false);
                document.body.style.overflow = "auto";
              }}
              className="icon-close close"
            />
            <li>
              <a href="#up">About</a>
            </li>
            {/* <li>
              <a href="">Article</a>
            </li> */}
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="">Speaking</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
      <a href="#up" className="scroll2up flex">
        <span className="icon-keyboard_arrow_up"></span>
      </a>
    </header>
  );
};

export default Header;
