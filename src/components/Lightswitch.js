import { ThemeContext } from "../contexts/context";
import { useContext } from "react";

const LightSwitch = (props) => {
    const { isSwitch, setIsSwitch } = useContext(ThemeContext);
  
    return (
    <button onClick={() => setIsSwitch({ darkmode: !isSwitch.darkmode })}>
      {props.button}
    </button>
  );
};

export default LightSwitch;
