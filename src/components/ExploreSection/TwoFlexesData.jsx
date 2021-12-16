import React from "react";
import styles from "./scss/ExploreSection.module.scss";
function TwoFlexesData(props) {
  const { posts } = props;
  return (
    <div className={styles["posts-container"]}>
      <div
        className={styles["two-flexes"]}
      >
        {posts.map((item, index) => {
          if (index % 2 == 0) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div
        className={styles["two-flexes"]}
      >
        {posts.map((item, index) => {
          if (index % 2 == 1) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default TwoFlexesData;
