/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { slide as Menu } from "react-burger-menu";


import FeatherIcon from "feather-icons-react";
import LightSwitch from "./Lightswitch";
import { ThemeContext, TopicContext } from "../contexts/context";
import { useContext } from "react";

const Setting = (props) => {
  const { isSwitch } = useContext(ThemeContext);
  const {isEnabled } = useContext(TopicContext)
  const styles = {
    setting: css`
    display: flex;
    flex-direction: column;
    `
  }
  return (
    <Menu {...props}>
      <div id="Wrapper">
        <ul css={styles.setting}>
          <li>

      <LightSwitch
          button={
            isSwitch.darkmode ? (
              <FeatherIcon icon="toggle-right" />
              ) : (
                <FeatherIcon icon="toggle-left" />
                )
              }
              />
              </li>
              <li>
                <button>
                  {isEnabled.topics ? (
                    <FeatherIcon icon="toggle-left"/>) : (
                      <FeatherIcon icon="toggle-right"/>
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
