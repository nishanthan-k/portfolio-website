import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-scroll";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const Header = ({ activeSection, handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (link, index) => {
    const linkLowerCase = link.toLowerCase();
    return (
      <li
        key={index}
        className="flex h-2/3 flex-col items-center justify-evenly hover:cursor-pointer"
      >
        <Link
          onClick={() => {
            handleNavClick(`${linkLowerCase}`);
            setIsOpen(false);
          }}
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
    <header className="fixed flex h-20 w-screen items-center justify-between border bg-white shadow">
      <section className="flex h-full items-center justify-center md:w-1/3">
        <p className="ml-7 text-xl md:ml-0 md:text-2xl">
          Nishanthan Karunakaran
        </p>
      </section>

      <section className="hidden h-full items-center md:flex md:w-2/3">
        <nav className="hidden w-full md:block">
          <ul className="flex items-center justify-evenly">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (link, index) => navLinks(link, index),
            )}
          </ul>
        </nav>
      </section>

      <section className="block md:hidden">
        <MdOutlineMenu
          className="mr-9 block text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute left-0 top-0 h-dvh w-screen overflow-hidden bg-white shadow md:hidden">
            <MdOutlineClose
              className="ml-auto mr-8 mt-8 block text-2xl md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
            <nav className="flex h-full items-center justify-center">
              <ul className="flex flex-col gap-10">
                {["Home", "About", "Experience", "Projects", "Contact"].map(
                  (link, index) => navLinks(link, index),
                )}
              </ul>
            </nav>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
