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
  const cats = [
    "us",
    "health",
    "world",
    "sports",
    "arts",
    "opinion",
    "nyregion",
    "podcasts",
    "well",
  ];
  const active = {topics: true}
  const [activeSections, setActiveSections] = useState(cats);
  return (
    <ThemeContext.Provider value={{ isSwitch, setIsSwitch }}>
      <TopicContext.Provider value={{ isEnabled, setIsEnabled }}>
        <Navbar
          activeSections={activeSections}
          setActiveSections={setActiveSections}
          cats={cats}
        />
        <div
          className={isSwitch.darkmode ? "dark-mode" : "light-mode"}
          id="page-wrap"
        >
          <Outlet active={active} activeSections={activeSections} setActiveSections={setActiveSections} />
        </div>
      </TopicContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
