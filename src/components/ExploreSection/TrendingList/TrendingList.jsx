import React from "react";
import styles from "./scss/TrendingList.module.scss";
import TrendCard from "./TrendCard";
function TrendingList() {
  return (
    <div className={styles["trending-list"]}>
      <ul className={styles["odd-items"]}>
          <TrendCard/>
      </ul>
      <ul className={styles["even-items"]}>
      </ul>
    </div>
  );
}

export default TrendingList;
