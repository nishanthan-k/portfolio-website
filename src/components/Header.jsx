import { useCallback, useContext, useEffect, useState } from "react";
import {
  RiMenu3Fill,
  RiSunFill,
  RiSunLine,
  RiCloseLargeFill,
} from "react-icons/ri";
import { NavBarContext } from "../contexts/NavBarContext";
import { updateTheme } from "../utils/themeHandler";
import { AnimatePresence, motion } from "framer-motion";

const renderName = () => "<NK />";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState("dark");
  const { activeMenu, handleActiveMenu } = useContext(NavBarContext);

  const menuList = ["home", "about", "experience", "projects"];

  const renderThemeIcon = useCallback(
    () => (themeIcon === "dark" ? <RiSunLine /> : <RiSunFill />),
    [themeIcon],
  );

  useEffect(() => {
    renderThemeIcon();
  }, [themeIcon, renderThemeIcon]);

  const handleThemeIcon = () => {
    setThemeIcon(themeIcon === "dark" ? "light" : "dark");
    updateTheme();
  };

  const handleMenu = () => setIsOpen(!isOpen);

  const formatMenu = (menu) =>
    menu.substring(0, 1).toUpperCase() + menu.substring(1);

  const navVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.36, 1],
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.9,
      },
    },
    open: {
      transition: {
        // delayChildren: 0.3,
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <header className="relative w-screen bg-bgColor">
      <div className="fixed flex w-full items-center justify-between px-4 py-6 shadow-lg">
        <p className="cursor-pointer text-xl font-bold text-textColor">
          {renderName()}
        </p>
        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-10">
              {menuList.map((menu, index) => (
                <li
                  key={index}
                  className={`${activeMenu === menu ? "text-lg" : "text-md"} cursor-pointer text-textColor`}
                  onClick={() => {
                    handleActiveMenu(menu);
                    handleMenu();
                  }}
                >
                  {formatMenu(menu)}
                </li>
              ))}
            </ul>
          </nav>
          <div
            onClick={handleThemeIcon}
            className="cursor-pointer text-2xl text-iconColor"
          >
            {renderThemeIcon()}
          </div>
          <RiMenu3Fill
            className="cursor-pointer text-2xl font-bold text-iconColor md:hidden"
            onClick={handleMenu}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={navVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 flex h-screen w-full origin-top flex-col items-center gap-28 bg-amber-500 py-4 md:hidden"
          >
            <RiCloseLargeFill
              className="ml-auto mr-4 mt-4 cursor-pointer text-3xl"
              onClick={handleMenu}
            />
            <motion.ul
              variants={containerVars}
              initial="initial"
              animate="open"
              className="flex flex-col items-center justify-center gap-10"
            >
              {menuList.map((menu, index) => (
                <motion.li
                  variants={linkVars}
                  key={index}
                  className={`${activeMenu === menu ? "text-2xl" : "text-xl"} cursor-pointer`}
                  onClick={() => {
                    handleActiveMenu(menu);
                    handleMenu();
                  }}
                >
                  {formatMenu(menu)}
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
