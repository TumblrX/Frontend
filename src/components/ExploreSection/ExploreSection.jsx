import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./scss/ExploreSection.module.scss";
import ExploreSuggestionList from "./ExploreSuggestionList/ExploreSuggestionList";
import ExploreNavbar from "./ExploreNavbar/ExploreNavbar";
import TrendingList from "./TrendingList/TrendingList";
import FourFlexData from "./FourFlexData";
import ThreeFlexesData from "./ThreeFlexesData";
import TwoFlexesData from "./TwoFlexesData";
import OneFlexData from "./OneFlexData";
import Post from "../Post/Post";

function ExploreSection() {
  const [flexesNumber, updateSize] = useState(4);
  const [posts, updatePosts] = useState([1, 2, 3, 4, 5, 6]);
  const onclickbutton = () => {
    updatePosts((prevPosts) => [...prevPosts, 1]);
  };

  const componentDidMount = () => {
    if (window.innerWidth <= 910) {
      updateSize(1);
    } else if (window.innerWidth <= 1364) {
      updateSize(2);
    } else if (window.innerWidth <= 1830) {
      updateSize(3);
    } else {
      updateSize(4);
    }
    window.onresize = (event) => {
      if (window.innerWidth <= 910) {
        updateSize(1);
      } else if (window.innerWidth <= 1364) {
        updateSize(2);
      } else if (window.innerWidth <= 1830) {
        updateSize(3);
      } else {
        updateSize(4);
      }
    };
  };

  useEffect(componentDidMount, []);

  return (
    <div className={styles["explore-section"]}>
      <ExploreNavbar />
      <Switch>
        <Route
          path="/explore/recommended-for-you"
          component={ExploreSuggestionList}
        />
        <Route path="/explore/trending" exact component={TrendingList} />
        <Route path="/explore/staff-picks" exact component={ExploreSuggestionList}/>
      </Switch>
      {flexesNumber == 4 ? (
        <FourFlexData posts={posts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={posts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={posts} />
      ) : (
        <OneFlexData posts={posts} />
      )}

      <button onClick={onclickbutton}>Click on me </button>
    </div>
  );
}

export default ExploreSection;
