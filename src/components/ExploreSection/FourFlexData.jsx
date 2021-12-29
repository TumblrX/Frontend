/* eslint-disable react/jsx-filename-extension */
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
            return (
              <div className={styles["exlpore-post"]} key={index}>
                <Post data={item} key={item._id} />
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "second-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 1) {
            return (
              <div className={styles["exlpore-post"]} key={index}>
                <Post data={item} key={item._id} />
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "third-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 2) {
            return (
              <div className={styles["exlpore-post"]} key={index}>
                <Post data={item} key={item._id} />
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "forth-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 3) {
            return (
              <div className={styles["exlpore-post"]} key={index}>
                <Post data={item} key={item._id} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FourFlexData;
