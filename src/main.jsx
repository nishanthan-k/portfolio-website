import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBarContextProvider from "./contexts/NavBarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBarContextProvider>
      <App />
    </NavBarContextProvider>
  </React.StrictMode>,
);
