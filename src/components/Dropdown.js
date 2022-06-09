/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { vars } from "./variables";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Dropdown = ({ submenu }) => {
  const styles = {
    links: css`
      display: flex;
      align-items: center;
      color: ${vars.typo_2};
    `,
  };

  return (
    <ul>
      
      <Link to="indbox" css={styles.links}>
        <FeatherIcon icon="inbox" stroke="black" />
        Inbox
      </Link>
    </ul>
  );
};

export default Dropdown;
