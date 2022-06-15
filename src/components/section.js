/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { vars } from "./variables";
import { ThemeContext } from "../contexts/context";
import { useContext } from "react";


const Section = ({ posts, title }) => {
  const { isSwitch } = useContext(ThemeContext);
  
let topics = posts.map((topic) => topic.section)

let sortedTopics = topics.filter((element, index) => {
  return topics.indexOf(element) === index
});

console.log(sortedTopics)
  

  const styles = {
    postlist: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
      color: ${isSwitch.darkmode ? vars.typo_3 : vars.primary_3};
     
      
    `,
  topics: css`
  display: flex;
  flex-direction: column;
  & h1{
    align-self: center;
  }

  
  `,
  post: css`
  font-size: 10px;
  `,
    title: css`
      margin-top: 10px;
      align-self: center;
    `,
  };

  return (<div css={styles.postlist}>
    <h1 css={styles.title}>{title}</h1>
    {sortedTopics.map((topic, index) => (
      <section css={styles.topics} key={index} >
        <h1>{topic}</h1>
        {posts.map((story, index) => story.section === topic && 
        <div key={index} css={styles.post}> 
          <img src={story.multimedia[0].url} alt="" />
          <h2>{story.title}</h2>
          <p>{story.subsection}</p>
          <p>{story.published_date}</p>
        </div>)}
      </section>
    ))}
  </div>
  );
}
export default Section;
