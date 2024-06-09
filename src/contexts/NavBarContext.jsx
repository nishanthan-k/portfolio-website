import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NavBarContext = createContext();

const NavBarContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleActiveMenu = (menu) => setActiveMenu(menu);

  return (
    <NavBarContext.Provider value={{ activeMenu, handleActiveMenu }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContextProvider;

NavBarContextProvider.propTypes = {
  children: PropTypes.any,
};
