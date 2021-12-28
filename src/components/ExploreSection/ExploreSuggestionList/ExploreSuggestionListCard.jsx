/* eslint-disable react/jsx-filename-extension */
import React from "react";
import img1 from "../../../assets/Images/Project_128-09.jpg";
import styles from "./scss/ExploreSuggestionList.module.scss";

/**
 * Component to render the suggestion list card  in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreSuggestionListCard(props) {
  return (
    <div className={styles["suggestion-card"]}>
      <div className={styles["card-tag"]}>#{props.tag}</div>
      <div className={styles["card-imgs-container"]}>
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </div>
      <button>Follow</button>
    </div>
  );
}

export default ExploreSuggestionListCard;
