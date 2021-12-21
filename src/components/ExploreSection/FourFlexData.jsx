import React from "react";
import styles from "./scss/ExploreSection.module.scss";
import Post from "../Post/Post";

/**
 * Component to render four Flexes in the post container if the window can take them
 * @author Abdalla Mahmoud
 *
 * @component
 */
function FourFlexData(props) {
  const { posts } = props;
  return (
    <div className={styles["posts-container"]}>
      <div className={`${styles["four-flexes"]} "first-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 0) {
            return <Post data={item} key={index} />;
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "second-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 1) {
            return <Post data={item} key={index} />;
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "third-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 2) {
            return <Post data={item} key={index} />;
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "forth-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 3) {
            return <Post data={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
}

export default FourFlexData;
