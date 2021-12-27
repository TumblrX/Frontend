/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ExploreAside from "../../components/ExploreAside/ExploreAside";
import styles from "../Explore/scss/explore.module.scss";

function Search() {
  return (
    <div>
      <div className={styles["explore-container"]}>
        <ExploreAside tagName="Checkout related blogs" />
      </div>
    </div>
  );
}

export default Search;
