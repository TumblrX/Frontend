import React from "react";
import { useSelector } from "react-redux";
import ExploreSuggestionList from "../ExploreSuggestionList/ExploreSuggestionList";
import FourFlexData from "../FourFlexData";
import ThreeFlexesData from "../ThreeFlexesData";
import TwoFlexesData from "../TwoFlexesData";
import OneFlexData from "../OneFlexData";
import { componentDidMount } from "../ExploreSectionController";
import { useEffect } from "react";
function ForYou() {
  const { forYouPosts, flexesNumber } = useSelector((state) => state.Explore);
  useEffect(componentDidMount, []);
  return (
    <div>
      <ExploreSuggestionList/>
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

export default ForYou;
