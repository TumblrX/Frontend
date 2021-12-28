import React from "react";
import FourFlexData from "../../ExploreSection/FourFlexData";
import ThreeFlexesData from "../../ExploreSection/ThreeFlexesData";
import TwoFlexesData from "../../ExploreSection/TwoFlexesData";
import OneFlexData from "../../ExploreSection/OneFlexData";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { componentDidMount } from "../SearchSectionController";
function TextSearch() {
  const { textPosts, flexesNumber } = useSelector((state) => state.Search);

  useEffect(componentDidMount, []);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div style={{ minHeight: "250px" }}>
      {flexesNumber == 4 ? (
        <FourFlexData posts={textPosts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={textPosts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={textPosts} />
      ) : (
        <OneFlexData posts={textPosts} />
      )}
    </div>
  );
}

export default TextSearch;
