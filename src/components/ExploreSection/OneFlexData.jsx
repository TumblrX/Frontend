/* eslint-disable react/jsx-filename-extension */
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
            <div className={styles["exlpore-post"]} key={index}>
              <Post data={item} key={item._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OneFlexData;
