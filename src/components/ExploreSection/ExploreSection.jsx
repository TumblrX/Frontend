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
import api from "../../api/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pushPosts } from "../../redux/ExploreRecuder";
/**
 * Component to render the Explore section  in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */

function ExploreSection() {
  const { posts } = useSelector((state) => state.Explore);
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get("/api/user/explore/5/trending")
      .then((res) => {
        console.log(res);

        dispatch(pushPosts(res.data.trendingPosts));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [flexesNumber, updateSize] = useState(4);

  /**
   * this function is used to update the state when resizing the window
   * updating the number of flexes container of the posts
   * @type {function}
   * @param {void}
   * @returns {void} return nothing
   */
  const onResize = () => {
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

  /**
   * once the Component is mounted you should add onresize function on the window to handle
   * the flexes numbers
   * @type {function}
   * @param {void}
   * @returns {void} return nothing
   *
   */
  const componentDidMount = () => {
    onResize(); // First call to set the state ;
    window.addEventListener("resize", onResize);
    // window.addEventListener("scroll", () => {
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //     onclickbutton();
    //   }
    // });
    // // it will be called when the Component is unmounted
    // return () => {
    //   window.removeEventListener("resize", onResize);
    // };
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
        <Route
          path="/explore/staff-picks"
          exact
          component={ExploreSuggestionList}
        />
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
    </div>
  );
}

export default ExploreSection;
