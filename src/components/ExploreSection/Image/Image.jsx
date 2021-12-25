import React from "react";
import { useSelector } from "react-redux";
import TrendingList from "../TrendingList/TrendingList";
import FourFlexData from "../FourFlexData";
import ThreeFlexesData from "../ThreeFlexesData";
import TwoFlexesData from "../TwoFlexesData";
import OneFlexData from "../OneFlexData";
import { componentDidMount } from "../ExploreSectionController";
import { useEffect } from "react";
function Image() {
  const { imagesPosts, flexesNumber } = useSelector((state) => state.Explore);
  useEffect(componentDidMount, []);
  return (
    <div style={{ minHeight: "250px" }}>
      {/* minHeight = 250px the height of the menu when no posts retrieved */}
      {flexesNumber == 4 ? (
        <FourFlexData posts={imagesPosts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={imagesPosts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={imagesPosts} />
      ) : (
        <OneFlexData posts={imagesPosts} />
      )}
    </div>
  );
}

export default Image;
