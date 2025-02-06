import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Animation from "./Contact-Animation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Check If All Input Are Filled
  useEffect(() => {
    const allFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsSubmitDisabled(!allFilled);
  }, [formData]);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qqidy05",
        "template_koyx16u",
        e.target,
        "MaM3hRHNL8Wa8YUYr"
      )
      .then(
        () => {
          toast.success("Message Sent successfully!");
          console.log(formData);
        },
        () => {
          toast.error("Failed to send message! Try Again");
        }
      );
  };
  return (
    <div id="contact" className="contact p-relative mb-3">
      <div className="title flex">
        <span className="mail-icon icon-envelope block"></span>
        <h2>Contact Me</h2>
      </div>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <form className="flex" id="contactForm" onSubmit={handleSubmit}>
        <div className="contact">
          <div className="flex justify-content-start">
            <label htmlFor="name">Your Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
              required
              autoComplete="name"
            />
          </div>
          <div className="flex justify-content-start">
            <label htmlFor="email">Email Address: </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              required
              autoComplete="email"
            />
          </div>
          <div className="flex justify-content-start">
            <label htmlFor="message">Your Message: </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInput}
              required
            ></textarea>
          </div>
          <button id="submit" type="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
        </div>
        <div className="animation">
          <Animation />
        </div>
      </form>
      <ToastContainer aria-label="Notifications" />
    </div>
  );
}
