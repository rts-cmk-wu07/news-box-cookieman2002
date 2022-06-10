/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { vars } from "./variables";
import { ThemeContext } from "../contexts/context";
import { useContext } from "react";

const Section = ({ posts, title }) => {
  const { isSwitch } = useContext(ThemeContext);

  const styles = {
    postlist: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
      color: ${isSwitch.darkmode ? vars.typo_3 : vars.primary_3};
      margin-bottom: 50px;
    `,
    post: css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 15px;
      & img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
      }
      & h2 {    
        font-size: 13px;
      }
    `,
    title: css`
      margin-top: 10px;
      align-self: center;
    `,
  };

  return (
    <div css={styles.postlist}>
      <h2 css={styles.title}>{title}</h2>
      {posts.map((article) => (
        <div key={article.created_date} css={styles.post}>
          <img src={article.multimedia[0].url} alt="" />
          <div>
            <h2>{article.title}</h2>

            <p>published {article.published_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
