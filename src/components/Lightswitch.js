/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ThemeContext } from "../contexts/context";
import { useContext } from "react";

const LightSwitch = (props) => {
  const { isSwitch, setIsSwitch } = useContext(ThemeContext);
  const styles = {
    lightSwitch: css`
    background-color: #373a47;
    border: none;
    `
  };

  return (
    <button
      css={styles.lightSwitch}
      onClick={() => setIsSwitch({ darkmode: !isSwitch.darkmode })}
    >
      {props.button}
    </button>
  );
};

export default LightSwitch;
