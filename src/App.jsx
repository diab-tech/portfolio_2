import { useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/Project-details";
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main />
              <Contact />
            </>
          }
        />
        <Route path="more" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
