import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Initialize scroll spy
    scrollSpy.update();

    // Listen to scroll events
    Events.scrollEvent.register("scroll", (to, element) => {
      setActiveSection(to);
    });

    // Clean up event listeners
    return () => {
      Events.scrollEvent.remove("scroll");
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);

    scroll.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="box-border h-dvh bg-gray-100">
      <Header activeSection={activeSection} handleNavClick={handleNavClick} />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
