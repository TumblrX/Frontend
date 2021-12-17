import React from "react";
import styles from "./scss/ExploreSection.module.scss";
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
      <div className={styles["one-flex"]}>
        {posts.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default OneFlexData;
