import React from "react";
import styles from "./scss/TrendingList.module.scss";
import TrendCard from "./TrendCard";
function TrendingList() {
  return (
    <div className={styles["trending-list"]}>
      <div>
        <ul className={styles["odd-items"]}>
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
        </ul>
        <ul className={styles["even-items"]}>
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
          <TrendCard />
        </ul>
      </div>
    </div>
  );
}

export default TrendingList;
