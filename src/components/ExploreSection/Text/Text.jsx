import React from "react";
import { useSelector } from "react-redux";
import FourFlexData from "../FourFlexData";
import ThreeFlexesData from "../ThreeFlexesData";
import TwoFlexesData from "../TwoFlexesData";
import OneFlexData from "../OneFlexData";
import { componentDidMount } from "../ExploreSectionController";
import { useEffect } from "react";
function Text() {
  const { textPosts, flexesNumber } = useSelector((state) => state.Explore);
  useEffect(componentDidMount, []);
  return (
    <div>
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

export default Text;
