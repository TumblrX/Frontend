import React from "react";
import styles from "./scss/ExploreSection.module.scss";
import Post from "../Post/Post";
/**
 * Component to render one Flexes in the post container
 * @author Abdalla Mahmoud
 *
 * @component
 */
function OneFlexData(props) {
  const { posts } = props;
  return (
    <div className={styles["posts-container"]}>
      <div className={`${styles["one-flex"]} first-of-first`}>
        {posts.map((item, index) => {
          return (
            <div className={styles["exlpore-post"]}>
              <Post data={item} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OneFlexData;
