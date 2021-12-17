import React from "react";
import img1 from "../../../assets/Images/Project_128-09.jpg";
import styles from "./scss/ExploreSuggestionList.module.scss";

/**
 * Component to render the suggestion list card  in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreSuggestionListCard() {
  return (
    <div className={styles["suggestion-card"]}>
      <div className={styles["card-tag"]}>#Photography</div>
      <div className={styles["card-imgs-container"]}>
        <img src={img1} alt="" />
        <img src={img1} alt="" />
      </div>
      <button>Follow</button>
    </div>
  );
}

export default ExploreSuggestionListCard;
