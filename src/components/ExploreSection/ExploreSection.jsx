import React from "react";
import styles from "./scss/ExploreSection.module.scss";
import ExploreSuggestionList from "./ExploreSuggestionList/ExploreSuggestionList";
import ExploreNavbar from "./ExploreNavbar/ExploreNavbar";
import TrendingList from "./TrendingList/TrendingList";
function ExploreSection() {
  return (
    <div className={styles["explore-section"]}>
      <ExploreNavbar />

      <ExploreSuggestionList />
      {/* <TrendingList/> */}
      <div className={styles["posts-grid"]}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "12px",
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
        {/* <div style={{ height: "50px", backgroundColor: "black" }}>post 2 </div>
        <div style={{ height: "60px", backgroundColor: "blue" }}>post 3 </div>
        <div style={{ height: "70px", backgroundColor: "white" }}>post 4 </div> */}
      </div>
    </div>
  );
}

export default ExploreSection;
