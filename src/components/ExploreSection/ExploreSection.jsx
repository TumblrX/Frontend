import React, { useState, useEffect } from "react";
import styles from "./scss/ExploreSection.module.scss";
import ExploreSuggestionList from "./ExploreSuggestionList/ExploreSuggestionList";
import ExploreNavbar from "./ExploreNavbar/ExploreNavbar";
import TrendingList from "./TrendingList/TrendingList";
import FourFlexData from "./FourFlexData";
import ThreeFlexesData from "./ThreeFlexesData";
import TwoFlexesData from "./TwoFlexesData";
import OneFlexData from "./OneFlexData";
function ExploreSection() {
  const [flexesNumber, updateSize] = useState(4);
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

      <ExploreSuggestionList />
      {/* <TrendingList/> */}
      {/* <div className={styles["posts-grid"]}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "12px",
            minWidth: "300px",
          }}
        >
          <div style={{ height: "50px", backgroundColor: "black" }}>
            post 2{" "}
          </div>
          <div style={{ height: "40px", backgroundColor: "red" }}>post 1 </div>
          <div style={{ height: "70px", backgroundColor: "white" }}>
            post 4{" "}
          </div>
          <div style={{ height: "60px", backgroundColor: "blue" }}>post 3 </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "12px",
            minWidth: "300px",
          }}
        >
          <div style={{ height: "70px", backgroundColor: "white" }}>
            post 4{" "}
          </div>
          <div style={{ height: "40px", backgroundColor: "red" }}>post 1 </div>
          <div style={{ height: "50px", backgroundColor: "black" }}>
            post 2{" "}
          </div>
          <div style={{ height: "60px", backgroundColor: "blue" }}>post 3 </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "12px",
            minWidth: "300px",
          }}
        >
          <div style={{ height: "60px", backgroundColor: "blue" }}>post 3 </div>

          <div style={{ height: "40px", backgroundColor: "red" }}>post 1 </div>
          <div style={{ height: "50px", backgroundColor: "black" }}>
            post 2{" "}
          </div>
          <div style={{ height: "70px", backgroundColor: "white" }}>
            post 4{" "}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "12px",
            minWidth: "300px",
          }}
        >
          <div style={{ height: "40px", backgroundColor: "red" }}>post 1 </div>
          <div style={{ height: "50px", backgroundColor: "black" }}>
            post 2{" "}
          </div>
          <div style={{ height: "60px", backgroundColor: "blue" }}>post 3 </div>
          <div style={{ height: "70px", backgroundColor: "white" }}>
            post 4{" "}
          </div>
        </div>
      </div> */}

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
