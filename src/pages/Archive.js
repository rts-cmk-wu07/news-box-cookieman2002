/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { vars } from "../components/variables";
import { ThemeContext } from "../contexts/context";
import {
  TrailingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useContext } from "react";

const Archive = () => {
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
    delete: css`
      background-color: red;
      font-size: 20px;
      color: ${isSwitch.darkmode ? vars.typo_3 : "black"};
    `,
  };
  const news = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    news.push(JSON.parse(localStorage.getItem(key)));
  }

  console.log(news);

  let topics = news.map((topic) => topic.section);

  let sortedTopics = topics.filter((element, index) => {
    return topics.indexOf(element) === index;
  });
  const deleteItem = (e) => {
    const trashcan = {
      title: e.title,
      publish: e.publish,
      subsection: e.subsection,
      section: e.section,
      image: e.image,
    };

    localStorage.removeItem(e.publish);
  };

  return (
    <div css={styles.postlist}>
      <h1 css={styles.title}>Archives</h1>
      {sortedTopics.map((topic, index) => (
        <section css={styles.topics} key={index}>
          <h1>{topic}</h1>
          {news.map(
            (story, index) =>
              story.section === topic && (
                <div css={styles.post} key={index}>
                  <SwipeableList>
                    <SwipeableListItem
                      trailingActions={
                        <TrailingActions>
                          <SwipeAction
                            css={styles.delete}
                            destructive={true}
                            onClick={() => deleteItem(story)}
                          >
                            Delete
                          </SwipeAction>
                        </TrailingActions>
                      }
                    >
                      <img src={story.image} alt="" />
                      <div>
                        <h2>{story.title}</h2>
                        <p>{story.subsection}</p>
                        <p>{story.publish}</p>
                      </div>
                    </SwipeableListItem>
                  </SwipeableList>
                </div>
              )
          )}
        </section>
      ))}
    </div>
  );
};

export default Archive;
