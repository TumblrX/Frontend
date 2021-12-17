import React from "react";
import styles from "./scss/ExploreSection.module.scss";
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
            let height = index * 30 + 20;

            return (
              <div style={{ height: `${height}px` ,backgroundColor:"red",marginBottom:"15px" }} key={index}>
                {item}
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["three-flexes"]} second-of-three"`}>
        {posts.map((item, index) => {
          if (index % 3 === 1) {
            let height = index * 30 + 20;

            return (
              <div style={{ height: `${height}px` ,backgroundColor:"red",marginBottom:"15px" }} key={index}>
                {item}
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["three-flexes"]} "third-of-three"`}>
        {posts.map((item, index) => {
          if (index % 3 === 2) {
            let height = index * 30 + 20;

            return (
              <div style={{ height: `${height}px` ,backgroundColor:"white",marginBottom:"15px" }} key={index}>
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ThreeFlexesData;
