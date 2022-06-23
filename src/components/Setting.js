/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { slide as Menu } from "react-burger-menu";


import FeatherIcon from "feather-icons-react";
import LightSwitch from "./Lightswitch";
import { ThemeContext, TopicContext } from "../contexts/context";
import { useContext } from "react";

const Setting = (props) => {
  const { isSwitch } = useContext(ThemeContext);
  const {isEnabled, setIsEnabled } = useContext(TopicContext)
 
  const styles = {
    setting: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    `,
    button: css`
     background-color: #373a47;
    border: none;
    `
  }
  console.log(isEnabled)
  return (
    <Menu {...props}>
      <div id="Wrapper">
        <ul css={styles.setting}>
          <li >
        <h3>Light/darkmode</h3>
      <LightSwitch
          button={
            isSwitch.darkmode ? (
              <FeatherIcon icon="toggle-right" size={48} />
              ) : (
                <FeatherIcon icon="toggle-left" size={48} />
                )
              }
              />
              </li>
              <li>
                <h3>topics name</h3>
                <button css={styles.button} onClick={() => setIsEnabled ({ topics: !isEnabled.topics })}>
                {
            isEnabled.topics ? (
              <FeatherIcon icon="toggle-right" size={48} />
              ) : (
                <FeatherIcon icon="toggle-left" size={48} />
                )
              }                
                </button>
              </li>
              </ul>
      </div>
    </Menu>
  );
};

export default Setting;
