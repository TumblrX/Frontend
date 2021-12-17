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
      <div className={`${styles["one-flex"]} "first-of-first"`}>
        {posts.map((item, index) => {
         let height = index * 30 + 20;

         return (
           <div style={{ height: `${height}px`,backgroundColor:"red",marginBottom:"15px" }} key={index}>
             {item}
           </div>
         );
        })}
      </div>
    </div>
  );
}

export default OneFlexData;
