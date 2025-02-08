import { lazy, Suspense } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
const Main = lazy(() => import("./components/3-main/Main"));
const Contact = lazy(() => import("./components/4-contact/Contact"));
import { Routes, Route } from "react-router-dom";
const ProjectDetails = lazy(() => import("./components/Project-details"));
const Footer = lazy(() => import("./components/5-footer/Footer"));
function App() {
  return (
    <div className="container">
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <div className="border-line"></div>
                <Main />
                <div className="border-line"></div>

                <Contact />
                <div className="border-line"></div>

                <Footer />
              </>
            }
          />
          <Route path="more" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
