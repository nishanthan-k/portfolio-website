import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (sectionId) => setActiveSection(sectionId);

  return (
    <div className="box-border h-dvh bg-gray-100">
      <Header activeSection={activeSection} handleNavClick={handleNavClick} />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
