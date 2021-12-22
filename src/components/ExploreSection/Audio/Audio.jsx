import React from "react";
import { useSelector } from "react-redux";
import ExploreSuggestionList from "../ExploreSuggestionList/ExploreSuggestionList";
import FourFlexData from "../FourFlexData";
import ThreeFlexesData from "../ThreeFlexesData";
import TwoFlexesData from "../TwoFlexesData";
import OneFlexData from "../OneFlexData";
import { componentDidMount } from "../ExploreSectionController";
import { useEffect } from "react";
function Audio() {
  const { audioPosts, flexesNumber } = useSelector((state) => state.Explore);
  useEffect(componentDidMount, []);
  return (
    <div>
      {flexesNumber == 4 ? (
        <FourFlexData posts={audioPosts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={audioPosts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={audioPosts} />
      ) : (
        <OneFlexData posts={audioPosts} />
      )}
    </div>
  );
}

export default Audio;
