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
      <div className={styles["three-flexes"]}>
        {posts.map((item, index) => {
          console.log(item);
          if (index % 3 === 0) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div className={styles["three-flexes"]}>
        {posts.map((item, index) => {
          if (index % 3 === 1) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div className={styles["three-flexes"]}>
        {posts.map((item, index) => {
          if (index % 3 === 2) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default ThreeFlexesData;
