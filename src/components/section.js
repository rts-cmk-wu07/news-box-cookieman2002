/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { vars } from "./variables";
import { ThemeContext } from "../contexts/context";
import { useContext } from "react";
import Cat from "./Cat";

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
      gap: 10px;
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
  console.log(posts);
  const sorted = posts.sort((a, b) => {
    if (a.section < b.section) {
      return -1;
    }
    if (a.section > b.section) {
      return 1;
    }
    return 0;
  });

  // const titles = [...new Set(sorted.map((article) => article.section))];  // console.log(titles);
  const spreadData = [...new Set(posts.map((article) => article.subsection))];
  console.log(spreadData);

  return (
    <div css={styles.postlist}>
      {spreadData}
      <h2 css={styles.title}>{title}</h2>
      {posts.map((article, index) => (
        <div key={index} css={styles.post}>
          <h2>{spreadData[index]}</h2>  
        </div>
      ))}
    </div>
  );
};

{
  /* <img src={article.multimedia[0].url} alt="" />
<div>
  <h2>{article.title}</h2>

  <p>published {article.published_date}</p>
</div> */
}
export default Section;
