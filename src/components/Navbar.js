/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import LightSwitch from "./Lightswitch";
import { ThemeContext } from "../contexts/context";
import { useContext } from "react";
import { vars } from "./variables";

const Navbar = () => {
  const { isSwitch } = useContext(ThemeContext);

  const styles = {
    navbar: css`
      display: flex;
      align-items: center;
      background-color: ${isSwitch.darkmode ? vars.primary_3 : vars.typo_3};
      height: 50px;
      border-bottom: 2px solid ${isSwitch.darkmode ? "#2f3136" : "#f2f2f2"};
      transition-duration: 1s;
      justify-content: space-between;
      & button {
        background-color: ${isSwitch.darkmode ? vars.primary_3 : vars.typo_3};
        border: none;
        transition-duration: 1s;
      }
      & h1 {
        transition-duration: 0.05s;
        color: ${isSwitch.darkmode ? vars.typo_3 : vars.primary_3};
      }
    `,

    links: css`
      display: flex;
      align-items: center;
      color: ${vars.typo_2};
      transition-duration: 1s;
    `,
  };
  return (
    <nav css={styles.navbar}>
      <Link to="archive" css={styles.links}>
        <FeatherIcon
          icon="inbox"
          stroke={isSwitch.darkmode ? "white" : "black"}
        />
      </Link>

      <h1>Newsbox</h1>

      <LightSwitch
        css={styles.lightSwitch}
        button={
          isSwitch.darkmode ? (
            <FeatherIcon icon="toggle-right" />
          ) : (
            <FeatherIcon icon="toggle-left" />
          )
        }
      />
    </nav>
  );
};

export default Navbar;
