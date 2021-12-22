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
import api from "../../api/api";
import { useSelector } from "react-redux";
import { componentDidMount } from "./ExploreSectionController";
import Trending from "./Trending/Trending";
import ForYou from "./ForYou/ForYou";
import Audio from "./Audio/Audio";
import Text from "./Text/Text";
/**
 * Component to render the Explore section  in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */

function ExploreSection() {
  const { posts, flexesNumber, postIndex } = useSelector(
    (state) => state.Explore
  );
  useEffect(() => componentDidMount(postIndex), []);

  return (
    <div className={styles["explore-section"]}>
      <ExploreNavbar />
      <Switch>
        <Route path="/explore/recommended-for-you" component={ForYou} exact />
        <Route path="/explore/trending" exact component={Trending} />
        <Route
          path="/explore/staff-picks"
          exact
          component={ExploreSuggestionList}
        />
        <Route path="/explore/audios" exact component={Audio} />
        <Route path="/explore/text" exact component={Text} />
      </Switch>
      {/* <Switch>
        <Route
          path="/explore/recommended-for-you"
          component={ExploreSuggestionList}
          exact
        />
        <Route path="/explore/trending" exact component={TrendingList} />
        <Route
          path="/explore/staff-picks"
          exact
          component={ExploreSuggestionList}
        />
      </Switch> */}
      {/* {flexesNumber == 4 ? (
        <FourFlexData posts={posts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={posts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={posts} />
      ) : (
        <OneFlexData posts={posts} />
      )} */}
    </div>
  );
}

export default ExploreSection;
