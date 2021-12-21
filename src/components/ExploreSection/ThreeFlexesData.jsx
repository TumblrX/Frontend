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
          console.log(item);
          if (index % 3 === 0) {
            return <Post data={item} key={index} />;
          }
        })}
      </div>
      <div className={`${styles["three-flexes"]} second-of-three"`}>
        {posts.map((item, index) => {
          if (index % 3 === 1) {
            return <Post data={item} key={index} />;
          }
        })}
      </div>
      <div className={`${styles["three-flexes"]} "third-of-three"`}>
        {posts.map((item, index) => {
          if (index % 3 === 2) {
            return <Post data={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
}

export default ThreeFlexesData;
