/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import { getTags } from "../ExploreSuggestionList/ExploreSuggestionListServices";
import styles from "./scss/TrendingList.module.scss";
import TrendCard from "./TrendCard";
import { useSelector } from "react-redux";
function TrendingList() {
  useEffect(getTags, []);
  const { items, tags } = useSelector((state) => state.suggestedList);

  return (
    <div className={styles["trending-list"]}>
      <div>
        <ul className={styles["odd-items"]}>
          {items.map((value, index) => {
            if (value.length === 0) return <></>;
            if (index % 2 === 1)
              return <TrendCard tag={tags[index]} img={value[0]} key={index} />;
          })}
        </ul>
        <ul className={styles["even-items"]}>
          {items.map((value, index) => {
            if (value.length === 0) return <></>;
            if (index % 2 === 0)
              return <TrendCard tag={tags[index]} img={value[0]} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TrendingList;
