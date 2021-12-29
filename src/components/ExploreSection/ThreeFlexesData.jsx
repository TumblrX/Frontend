/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styles from "./scss/ExploreSection.module.scss";
import Post from "../Post/Post";
/**
 * Component to render three Flexes in the post container if the window can take them
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ThreeFlexesData(props) {
  const { posts } = props;
  return (
    <div className={styles["posts-container"]}>
      <div className={`${styles["three-flexes"]} "first-of-three"`}>
        {posts.map((item, index) => {
          if (index % 3 === 0) {
            return (
              <div className={styles["exlpore-post"]} key={index}>
                <Post data={item} key={item._id} />
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["three-flexes"]} second-of-three"`}>
        {posts.map((item, index) => {
          if (index % 3 === 1) {
            return (
              <div className={styles["exlpore-post"]} key={index}>
                <Post data={item} key={item._id} />
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["three-flexes"]} "third-of-three"`}>
        {posts.map((item, index) => {
          if (index % 3 === 2) {
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

export default ThreeFlexesData;
