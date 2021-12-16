import React from "react";
import styles from "./scss/ExploreSection.module.scss";
function FourFlexData(props) {
  const { posts } = props;
  return (
    <div className={styles["posts-container"]}>
      <div className={styles["four-flexes"]}>
        {posts.map((item, index) => {
          if (index % 4 == 0) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div className={styles["four-flexes"]}>
        {posts.map((item, index) => {
          if (index % 4 == 1) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div className={styles["four-flexes"]}>
        {posts.map((item, index) => {
          if (index % 4 == 2) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
      <div className={styles["four-flexes"]}>
        {posts.map((item, index) => {
          if (index % 4 == 3) {
            return <div key={index}>{item}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default FourFlexData;
