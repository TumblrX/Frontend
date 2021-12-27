import React from "react";
import FourFlexData from "../../ExploreSection/FourFlexData";
import ThreeFlexesData from "../../ExploreSection/ThreeFlexesData";
import TwoFlexesData from "../../ExploreSection/TwoFlexesData";
import OneFlexData from "../../ExploreSection/OneFlexData";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { componentDidMount } from "../SearchSectionController";
function AllPosts() {
  const { forYouPosts, flexesNumber } = useSelector((state) => state.Search);

  useEffect(componentDidMount, []);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
  );
}

export default AllPosts;
