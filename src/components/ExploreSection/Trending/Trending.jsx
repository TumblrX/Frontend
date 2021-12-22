import React from "react";
import { useSelector } from "react-redux";
import TrendingList from "../TrendingList/TrendingList";
import FourFlexData from "./FourFlexData";
import ThreeFlexesData from "./ThreeFlexesData";
import TwoFlexesData from "./TwoFlexesData";
import OneFlexData from "./OneFlexData";
function Trending() {
  const { flexesNumber } = useSelector((state) => state.Explore);
  return (
    <div>
      <TrendingList />
      {flexesNumber == 4 ? (
        <FourFlexData posts={posts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={posts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={posts} />
      ) : (
        <OneFlexData posts={posts} />
      )}
    </div>
  );
}

export default Trending;
