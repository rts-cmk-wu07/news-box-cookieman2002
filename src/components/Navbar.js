/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { vars } from "./variables";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import FeatherIcon from "feather-icons-react";
import LightSwitch from "./Lightswitch";

const Navbar = ({ items }) => {
  const styles = {
    navbar: css`
      display: flex;
      align-items: center;
      background-color: ${vars.primary_3};
      height: 50px;
    `,
    links: css`
      display: flex;
      align-items: center;
      color: ${vars.typo_2};
    `,
  };
  return (
    <nav css={styles.navbar}>
      <Link to="archive" css={styles.links}>
        <FeatherIcon icon="inbox" stroke="black" />
      </Link>

      <h1>Newsbox</h1>

      <LightSwitch button="click" />
    </nav>
  );
};

export default Navbar;
