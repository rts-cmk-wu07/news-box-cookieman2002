import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeContext, TopicContext } from "./contexts/context";
import { useState } from "react";

function App() {
  const [isSwitch, setIsSwitch] = useState({
    darkmode: false,
  });
  const [isEnabled, setIsEnabled] = useState({
    topics: true,
  });
  return (
    <ThemeContext.Provider value={{ isSwitch, setIsSwitch }}>
      <TopicContext.Provider value={{isEnabled, setIsEnabled}} >

      <Navbar />
      <div className={isSwitch.darkmode ? "dark-mode" : "light-mode"} id="page-wrap">
        <Outlet />
      </div>
      </TopicContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
