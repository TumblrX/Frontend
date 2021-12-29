/* eslint-disable react/jsx-filename-extension */
import React from "react";
import img1 from "../../../assets/Images/avatar.png";
import styles from "./scss/ExploreSuggestionList.module.scss";

/**
 * Component to render the suggestion list card  in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreSuggestionListCard(props) {
  return (
    <div className={styles["suggestion-card"]} style={{backgroundColor:`${props.background}`}}>
      <div className={styles["card-tag"]}>#{props.tag}</div>
      <div className={styles["card-imgs-container"]}>
        <img
          src={props.img1}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = img1;
          }}
        />
        <img
          src={props.img2}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = img1;
          }}
        />
      </div>
      <button style={{color:`${props.color}`}}>Follow</button>
    </div>
  );
}

export default ExploreSuggestionListCard;
