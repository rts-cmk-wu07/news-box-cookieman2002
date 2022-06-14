/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { vars } from "./variables";
import { ThemeContext } from "../contexts/context";
import { useContext } from "react";
import Card from "./Card";
import Usefetch from "../hooks/Usefetch";

const Section = ({ posts, title }) => {
  const { isSwitch } = useContext(ThemeContext);
  const key = "PorNsbssWGT719UfIj07BezGGZ1kzBHK";
  const { data } =
    Usefetch(`https://api.nytimes.com/svc/topstories/v2/${posts}.json?api-key=${key}
    `);

  const spreadData = [...new Set(posts.map((article) => article.section))];
  console.log();

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
      flex-direction: column;
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

  // const titles = [...new Set(sorted.map((article) => article.section))];  // console.log(titles);

  // const searched = data.filter((el) => {
  //   if (posts.input === "") {
  //     return el;
  //   } else return el.text.toLowerCase().includes(posts.input);
  // });

  return (
    <div css={styles.postlist}>
      <h2 css={styles.title}>{title}</h2>
      {spreadData.map((title, index) => (
        <div key={index} css={styles.post}>
          <h2>{title}</h2>
          {data.section == title && <Card items={title}  /> }
        </div>
      ))}
    </div>
  );
};
// const sorted = posts.sort((a, b) => {
//   if (a.section < b.section) {
//     return -1;
//   }
//   if (a.section > b.section) {
//     return 1;
//   }
//   return 0;
// });

export default Section;
