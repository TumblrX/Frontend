import React from "react";
import img1 from "../../../assets/Images/Project_128-09.jpg";
import styles from "./scss/ExploreSuggestionList.module.scss";

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
