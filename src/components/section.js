/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { vars } from "./variables";
import { ThemeContext } from "../contexts/context";
import { useContext, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { LeadingActions } from "react-swipeable-list";

const Section = ({ posts, title }) => {
  const { isSwitch } = useContext(ThemeContext);
  const styles = {
    postlist: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
      color: ${isSwitch.darkmode ? vars.typo_3 : vars.primary_3};
      & div {
        margin-bottom: 20px;
      }
      & input {
        align-self: center;
      }
    `,
    topics: css`
      display: flex;
      flex-direction: column;
      & h1 {
        align-self: center;
      }
    `,
    post: css`
      font-size: 10px;
      display: flex;
      gap: 1em;
      align-items: center;

      & img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
      }
    `,
    title: css`
      margin-top: 10px;
      align-self: center;
    `,
  };

  const handlers = useSwipeable({ onSwipedLeft: () => console.log("swiped") });

  const [inputSearch, setInputSearch] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
    console.log("hej");
  };

  let articleImg = posts.map((mediaImg) => mediaImg.multimedia);
  let topics = posts.map((topic) => topic.section);

  // console.log(posts[0].multimedia[0].url);

  let sortedTopics = topics.filter((element, index) => {
    return topics.indexOf(element) === index;
  });
  let imagesfix = (image) => {
    if (image === null) {
      // console.log("image if:" + image.url);
      return <div>no Image</div>;
    } else {
      // console.log("image:" + image.url);
      return <img src={image.url} alt="" />;
    }
  };

  return (
    <div css={styles.postlist}>
      <h1 css={styles.title}>{title}</h1>
      <input type="text" onChange={inputHandler} placeholder="Search here" />
      {sortedTopics.map((topic, index) => (
        <section css={styles.topics} key={index} input={inputSearch}>
          <h1>{topic}</h1>
          {posts.map(
            (story, index) =>
              story.section === topic && (
                <div key={index} css={styles.post}>
                  {(story.multimedia !== null &&
                    imagesfix(story.multimedia[0])) || <div>No image </div>}
                  {/* {imagesfix(story.multimedia[0])} */}
                  <div>
                    <h2>{story.title}</h2>
                    <p>{story.subsection}</p>
                    <p>{story.published_date}</p>
                  </div>
                </div>
              )
          )}
        </section>
      ))}
    </div>
  );
};
export default Section;
