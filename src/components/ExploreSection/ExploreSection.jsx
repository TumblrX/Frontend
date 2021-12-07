import React from "react";
import styles from "./scss/ExploreSection.module.scss";
import ExploreSuggestionList from "./ExploreSuggestionList/ExploreSuggestionList";
import ExploreNavbar from "./ExploreNavbar/ExploreNavbar";

function ExploreSection() {
  return (
    <div className={styles["explore-section"]}>
      <ExploreNavbar/>
      <ExploreSuggestionList/>

      
    </div>
  );
}

export default ExploreSection;
