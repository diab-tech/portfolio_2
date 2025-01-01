import React, { useEffect } from "react";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const modeBtn = document.querySelector(".toggle-mode");

    // Define the toggle function
    const toggleMode = () => {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
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

  return (
    <header>
      {/* empty div to make nav in the middle of screen */}
      <button className="menu icon-menu" onClick={() => setShowMenu(true)} />

      <div />

      <nav>
        {/* ul>(li>a)*5 */}
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
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
              onClick={() => setShowMenu(false)}
              className="icon-close close"
            />
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
