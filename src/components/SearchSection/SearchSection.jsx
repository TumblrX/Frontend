/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import styles from "../ExploreSection/scss/ExploreSection.module.scss";
import SearchNavbar from "./SearchNavBar/SearchNavBar";
import FourFlexData from "../ExploreSection/FourFlexData";
import ThreeFlexesData from "../ExploreSection/ThreeFlexesData";
import TwoFlexesData from "../ExploreSection/TwoFlexesData";
import OneFlexData from "../ExploreSection/OneFlexData";
import { componentDidMount } from "./SearchSectionController";
import { useSelector } from "react-redux";
function SearchSection() {
  const { forYouPosts, flexesNumber } = useSelector((state) => state.Search);

  useEffect(componentDidMount, []);
  return (
    <div className={styles["explore-section"]} style={{borderRight:"none"}}>
      <SearchNavbar />
      <div style={{ minHeight: "250px" }}>
        {flexesNumber == 4 ? (
          <FourFlexData posts={forYouPosts} />
        ) : flexesNumber == 3 ? (
          <ThreeFlexesData posts={forYouPosts} />
        ) : flexesNumber == 2 ? (
          <TwoFlexesData posts={forYouPosts} />
        ) : (
          <OneFlexData posts={forYouPosts} />
        )}
      </div>
    </div>
  );
}

export default SearchSection;
