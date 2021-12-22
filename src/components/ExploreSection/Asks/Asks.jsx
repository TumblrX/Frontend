import React from "react";
import { useSelector } from "react-redux";
import FourFlexData from "../FourFlexData";
import ThreeFlexesData from "../ThreeFlexesData";
import TwoFlexesData from "../TwoFlexesData";
import OneFlexData from "../OneFlexData";
import { componentDidMount } from "../ExploreSectionController";
import { useEffect } from "react";
function Asks() {
  const { askPosts, flexesNumber } = useSelector((state) => state.Explore);
  useEffect(componentDidMount, []);
  return (
    <div>
      {flexesNumber == 4 ? (
        <FourFlexData posts={askPosts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={askPosts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={askPosts} />
      ) : (
        <OneFlexData posts={askPosts} />
      )}
    </div>
  );
}

export default Asks;
