import React from "react";
import styles from "./scss/ExploreSuggestionList.module.scss";

import ExploreSuggestionListCard from "./ExploreSuggestionListCard";
function ExploreSuggestionList() {
  /**
   * this function handle the click on the arrows on the suggestion list
   * it just scrolls the suggestion list to right or left .
   *
   * @type {function}
   * @param {*} event
   * @returns {void}
   */
  const onArrowClick = (event) => {
    let header = document.querySelector(`.${styles["suggestion-list"]}`);
    let after = document.querySelector(`.${styles["after"]}`);

    if (event.target === after) {
      header.scrollLeft += 652;
    } else {
      header.scrollLeft -= 652;
    }
  };
  return (
    <div className={styles["suggestion-list"]}>
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <div className={styles["before"]} onClick={onArrowClick}></div>
      <div className={styles["after"]} onClick={onArrowClick}></div>
    </div>
  );
}

export default ExploreSuggestionList;
