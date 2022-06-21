/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { stack as Menu } from "react-burger-menu";
import LightSwitch from "./Lightswitch";
import FeatherIcon from "feather-icons-react";
import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

const Setting = () => {
  const { isSwitch } = useContext(ThemeContext);

  return (
    <Menu outerContainerId={"Wrapper"} width="100%">
      <div id="Wrapper">
        <LightSwitch
          button={
            isSwitch.darkmode ? (
              <FeatherIcon icon="toggle-right" />
            ) : (
              <FeatherIcon icon="toggle-left" />
            )
          }
        />
      </div>
    </Menu>
  );
};

export default Setting;
