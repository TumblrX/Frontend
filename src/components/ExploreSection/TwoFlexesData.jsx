import React from "react";
import styles from "./scss/ExploreSection.module.scss";
import Post from "../Post/Post";
/**
 * Component to render two  Flexes in the post container if the window can take them
 * @author Abdalla Mahmoud
 *
 * @component
 */
function TwoFlexesData(props) {
  const { posts } = props;
  return (
    <div className={styles["posts-container"]}>
      <div className={`${styles["two-flexes"]} "first-of-two"`}>
        {posts.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <div className={styles["exlpore-post"]}>
                <Post data={item} key={index} />
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["two-flexes"]} "second-of-two"`}>
        {posts.map((item, index) => {
          if (index % 2 == 1) {
            return (
              <div className={styles["exlpore-post"]}>
                <Post data={item} key={index} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TwoFlexesData;
