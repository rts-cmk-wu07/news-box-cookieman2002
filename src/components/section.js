/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { vars } from "./variables";
import { ThemeContext } from "../contexts/context";
import { useContext, useState } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

// import { useSwipeable } from "react-swipeable";
// import { LeadingActions } from "react-swipeable-list";

const Section = ({
  posts,
  title,
  isActive,
  activeSections,
  setActiveSections,
}) => {
  const { isSwitch } = useContext(ThemeContext);
  const styles = {
    archive: css`
      background-color: green;
      font-size: 20px;
      color: ${isSwitch.darkmode ? vars.typo_3 : "black"};
    `,
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
  // const [query, setQuery] = useState("");

  let topics = posts.map((topic) => topic.section);
  let sortedTopics = topics.filter((element, index) => {
    return topics.indexOf(element) === index;
  });
  // console.log(topics);
  // console.log(sortedTopics);
  var blar =
    activeSections &&
    sortedTopics.filter((topic) => activeSections.includes(topic));
  // console.log(activeSections);

  // console.log(sortedTopics);
  let imagesfix = (image) => {
    if (image === null) {
      return <div>no Image</div>;
    } else {
      return <img src={image.url} alt="" />;
    }
  };

  const archiveitem = (archive) => {
    const archived = {
      title: archive.title,
      publish: archive.published_date,
      subsection: archive.subsection,
      section: archive.section,
      image: (archive.multimedia !== null && archive.multimedia[0].url) || (
        <div>No image </div>
      ),
    };
    localStorage.setItem(archive.published_date, JSON.stringify(archived));
  };

  return (
    <div css={styles.postlist}>
      <h1 css={styles.title}>{title}</h1>
      <input
        type="text"
        // onChange={(event) => setQuery(event.target.value)}
        placeholder="Search here"
      />

      {sortedTopics.map((topic, index) => (
        <section
          css={styles.topics}
          className={isActive ? "active" : null}
          key={index}
        >
          <h1>{topic}</h1>
          {posts.map(
            (story, index) =>
              story.section === topic && (
                <div key={index} css={styles.post}>
                  <SwipeableList>
                    <SwipeableListItem
                      leadingActions={
                        <LeadingActions>
                          <SwipeAction
                            css={styles.archive}
                            onClick={() => archiveitem(story)}
                          >
                            Archive
                          </SwipeAction>
                        </LeadingActions>
                      }
                    >
                      {(story.multimedia !== null &&
                        imagesfix(story.multimedia[0])) || <div>No image </div>}
                      {/* {imagesfix(story.multimedia[0])} */}
                      <div>
                        <h2>{story.title}</h2>
                        <p>{story.subsection}</p>
                        <p>{story.published_date}</p>
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
export default Section;
