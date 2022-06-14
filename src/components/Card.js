/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Card = ({ items, image }) => {
  const styles = {
    card: css`
      display: flex;
      justify-content: flex-start;
    `,
  };
  console.log(items.multimedia);

//   const checkImage = (media) => {
//     if (!media == undefined) {
//       return <img src={media.url} alt="placeholder" />;
//     }
//     return <span>No image</span>;
//   };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} css={styles.card}>
          {/* {checkImage(item.multimedia[0])} */}
          <div>
            <h2>{item.title}</h2>
            <p>published {item.published_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
