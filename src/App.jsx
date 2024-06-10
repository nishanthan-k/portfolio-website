import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useContext, useEffect, useRef } from "react";
import { NavBarContext } from "./contexts/NavBarContext";

const App = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const { activeMenu } = useContext(NavBarContext);

  useEffect(() => {
    const arr = [
      { ref: homeRef, name: "home" },
      { ref: aboutRef, name: "about" },
      { ref: experienceRef, name: "experience" },
      { ref: projectsRef, name: "projects" },
      { ref: contactRef, name: "contact" },
    ];

    const activeRef = arr.find((obj) => obj.name === activeMenu);

    activeRef?.ref?.current.scrollIntoView({
      behaviour: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [activeMenu]);

  return (
    <div className="box-border h-dvh overflow-x-hidden bg-bgColor text-textColor">
      <Header />
      <section className="mt-20 px-4 md:px-10 lg:px-20  ">
        <section ref={homeRef}>
          <Home />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </section>
    </div>
  );
};

export default App;
