import React from "react";
import { RxDotFilled } from "react-icons/rx";

const Header = ({ activeSection, handleNavClick }) => {
  return (
    <header className="fixed flex h-20 w-screen border shadow">
      <section className="flex h-full w-1/3 items-center justify-center">
        <p className="text-2xl">Nishanthan Karunakaran</p>
      </section>
      <section className="flex h-full w-2/3 items-center">
        <nav className="w-full">
          <ul className="flex items-center justify-evenly">
            <li
              onClick={() => handleNavClick("home")}
              className="flex h-2/3 flex-col items-center justify-evenly"
            >
              <button type="button">Home</button>
              <RxDotFilled
                className={
                  activeSection === "home" ? "block text-gray-500 " : "hidden"
                }
              />
            </li>
            <li
              onClick={() => handleNavClick("about")}
              className="flex flex-col items-center"
            >
              <button type="button">About</button>
              <RxDotFilled
                className={
                  activeSection === "about" ? "block text-gray-500 " : "hidden"
                }
              />
            </li>
            <li
              onClick={() => handleNavClick("experience")}
              className="flex flex-col items-center"
            >
              <button type="button">Experience</button>
              <RxDotFilled
                className={
                  activeSection === "experience"
                    ? "block text-gray-500 "
                    : "hidden"
                }
              />
            </li>
            <li
              onClick={() => handleNavClick("projects")}
              className="flex flex-col items-center"
            >
              <button type="button">Projects</button>
              <RxDotFilled
                className={
                  activeSection === "projects"
                    ? "block text-gray-500 "
                    : "hidden"
                }
              />
            </li>
            <li
              onClick={() => handleNavClick("contact")}
              className="flex flex-col items-center"
            >
              <button type="button">Contact</button>
              <RxDotFilled
                className={
                  activeSection === "contact"
                    ? "block text-gray-500 "
                    : "hidden"
                }
              />
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
