/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styles from "./scss/explore.module.scss";

import ExploreSection from "../../components/ExploreSection/ExploreSection.jsx";
import ExploreAside from "../../components/ExploreAside/ExploreAside.jsx";


const Explore = function () {
  return (
    <div>
      <div className={styles["explore-container"]} view="wide">
        <ExploreSection/>
        <ExploreAside tagName="Check out these Blogs"/>
      </div>
    </div>
  );
};

export default Explore;
