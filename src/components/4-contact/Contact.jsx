import React from "react";
import "./contact.css";
export default function Contact() {
  let a = 5; // 101
  let b = 3; // 011

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log(a, b);
  return (
    <div className="contact p-relative">
      <div className="title flex">
        <span className="mail-icon icon-envelope block"></span>
        <h2>Contact Us</h2>
      </div>
      <div className="border-line" />
    </div>
  );
}
