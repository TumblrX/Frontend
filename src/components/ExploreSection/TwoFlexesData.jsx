import React from "react";
import styles from "./scss/ExploreSection.module.scss";
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
            let height = index * 30 + 20;

            return (
              <div style={{ height: `${height}px`,backgroundColor:"red",marginBottom:"15px" }} key={index}>
                {item}
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["two-flexes"]} "second-of-two"`}>
        {posts.map((item, index) => {
          if (index % 2 == 1) {
            let height = index * 30 + 20;

            return (
              <div style={{ height: `${height}px`,backgroundColor:"black" ,marginBottom:"15px"}} key={index}>
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TwoFlexesData;
