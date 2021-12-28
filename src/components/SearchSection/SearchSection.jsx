/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import styles from "../ExploreSection/scss/ExploreSection.module.scss";
import SearchNavbar from "./SearchNavBar/SearchNavBar";
import FourFlexData from "../ExploreSection/FourFlexData";
import ThreeFlexesData from "../ExploreSection/ThreeFlexesData";
import TwoFlexesData from "../ExploreSection/TwoFlexesData";
import OneFlexData from "../ExploreSection/OneFlexData";
import { componentDidMount } from "./SearchSectionController";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPosts from "./AllPosts/AllPosts";
import TextSearch from "./Text/TextSearch";
import { useSelector } from "react-redux";
function SearchSection() {
  const { searchWord } = useSelector((state) => state.Search);

  useEffect(componentDidMount, []);
  return (
    <div className={styles["explore-section"]} style={{ borderRight: "none" }}>
      <SearchNavbar />
      <Switch>
        <Route path={`/search/${searchWord}/all`} component={AllPosts} exact />
        <Route
          path={`/search/${searchWord}/text`}
          exact
          component={TextSearch}
        />
        {/* <Route
          path="/explore/staff-picks"
          exact
          component={ExploreSuggestionList}
        />
        <Route path="/explore/audios" exact component={Audio} />
        <Route path="/explore/text" exact component={Text} />
        <Route path="/explore/photos" exact component={Image} />
        <Route path="/explore/videos" exact component={Videos} />
        <Route path="/explore/asks" exact component={Asks} /> */}
      </Switch>
    </div>
  );
}

export default SearchSection;
