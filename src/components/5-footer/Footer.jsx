import React from "react";
import "./footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="flex m-1">
        &copy;&nbsp;<span className="year">{currentYear} </span>
        &nbsp;Spencer Sharp. All rights reserved.
      </p>
    </div>
  );
}
