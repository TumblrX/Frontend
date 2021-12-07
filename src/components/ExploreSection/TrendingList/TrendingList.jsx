import React from "react";
import styles from "./scss/TrendingList.module.scss";
function TrendingList() {
  return (
    <div className={styles["trending-list"]}>
      <ul className={styles["odd-items"]}>
      </ul>
      <ul className={styles["even-items"]}>
      </ul>
    </div>
  );
}

export default TrendingList;
