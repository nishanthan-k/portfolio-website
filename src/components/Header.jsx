import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-scroll";

const Header = ({ activeSection, handleNavClick }) => {
  const navLinks = (link, index) => {
    console.log(typeof link, link);
    const linkLowerCase = link.toLowerCase();
    return (
      <li
        key={index}
        className="flex h-2/3 flex-col items-center justify-evenly hover:cursor-pointer"
      >
        <Link
          onClick={() => handleNavClick(`${linkLowerCase}`)}
          to={linkLowerCase}
          spy={true}
          offset={-100}
          duration={500}
        >
          {link}
        </Link>
        <RxDotFilled
          className={
            activeSection === `${linkLowerCase}`
              ? "block text-gray-500 "
              : "hidden"
          }
        />
      </li>
    );
  };

  return (
    <header className="fixed flex h-20 w-screen border shadow">
      <section className="flex h-full w-1/3 items-center justify-center">
        <p className="text-2xl">Nishanthan Karunakaran</p>
      </section>
      <section className="flex h-full w-2/3 items-center">
        <nav className="w-full">
          <ul className="flex items-center justify-evenly">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (link, index) => navLinks(link, index),
            )}
            {/* <li className="flex h-2/3 flex-col items-center justify-evenly hover:cursor-pointer">
              <Link
                onClick={() => handleNavClick("home")}
                to="home"
                spy={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
              <RxDotFilled
                className={
                  activeSection === "home" ? "block text-gray-500 " : "hidden"
                }
              />
            </li>
            <li className="flex flex-col items-center hover:cursor-pointer">
              <Link
                onClick={() => handleNavClick("about")}
                to="about"
                spy={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
              <RxDotFilled
                className={
                  activeSection === "about" ? "block text-gray-500 " : "hidden"
                }
              />
            </li>
            <li className="flex flex-col items-center hover:cursor-pointer">
              <Link
                onClick={() => handleNavClick("experience")}
                to="experience"
                spy={true}
                offset={-100}
                duration={500}
              >
                Experience
              </Link>
              <RxDotFilled
                className={
                  activeSection === "experience"
                    ? "block text-gray-500 "
                    : "hidden"
                }
              />
            </li>
            <li className="flex flex-col items-center hover:cursor-pointer">
              <Link
                onClick={() => handleNavClick("projects")}
                to="projects"
                spy={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
              <RxDotFilled
                className={
                  activeSection === "projects"
                    ? "block text-gray-500 "
                    : "hidden"
                }
              />
            </li>
            <li className="flex flex-col items-center hover:cursor-pointer">
              <Link
                onClick={() => handleNavClick("contact")}
                to="contact"
                spy={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
              <RxDotFilled
                className={
                  activeSection === "contact"
                    ? "block text-gray-500 "
                    : "hidden"
                }
              />
            </li> */}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
