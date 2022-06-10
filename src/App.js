import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts/context";
import { useState } from "react";

function App() {
  const [isSwitch, setIsSwitch] = useState({
    darkmode: false,
  });
  return (
    <ThemeContext.Provider value={{ isSwitch, setIsSwitch }}>
      <Navbar />
      <div className={isSwitch.darkmode ? "dark-mode" : "light-mode"}>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
