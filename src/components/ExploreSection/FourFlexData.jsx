import React from "react";
import styles from "./scss/ExploreSection.module.scss";

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
            let height = index * 30 + 20;

            return (
              <div
                style={{
                  height: `${height}px`,
                  backgroundColor: "red",
                  marginBottom: "15px",
                }}
                key={index}
              >
                {item}
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "second-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 1) {
            let height = index * 30 + 20;

            return (
              <div
                style={{
                  height: `${height}px`,
                  backgroundColor: "black",
                  marginBottom: "15px",
                }}
                key={index}
              >
                {item}
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "third-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 2) {
            let height = index * 30 + 20;

            return (
              <div
                style={{
                  height: `${height}px`,
                  backgroundColor: "white",
                  marginBottom: "15px",
                }}
                key={index}
              >
                {item}
              </div>
            );
          }
        })}
      </div>
      <div className={`${styles["four-flexes"]} "forth-of-four"`}>
        {posts.map((item, index) => {
          if (index % 4 == 3) {
            let height = index * 30 + 20;

            return (
              <div
                style={{
                  height: `${height}px`,
                  backgroundColor: "green",
                  marginBottom: "15px",
                }}
                key={index}
              >
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FourFlexData;
