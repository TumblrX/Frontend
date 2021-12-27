/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import styles from "../../ExploreSection/ExploreNavbar/scss/ExploreNavbar.module.scss";
import { Link } from "react-router-dom";
import { componentDidMount } from "../../ExploreSection/ExploreNavbar/ExploreNavBarController";
/**
 * Component to render the Search Navbar in Search Page.
 * @author Abdalla Mahmoud
 *
 * @component
 */
function SearchNavbar() {
  useEffect(componentDidMount, []);
  return (
    <>
      <div
        style={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          color: "white",
          marginLeft: "10px",
          marginTop: "30px",
        }}
        id="searchTag"
      >
        NASA
      </div>
      <div className={styles["explore-navbar"]} style={{ marginTop: "10px" }}>
        <div className={styles["explore-selection"]}>
          <span className={`more-section`} style={{ position: "relative" }}>
            All posts
            <div
              className={`${styles["more-list"]} ${styles["hide"]}`}
              style={{ left: "0%" }}
            >
              <div>
                <Link to="/search/text">Text</Link>
              </div>
              <div>
                <Link to="/search/photos">Photos</Link>
              </div>
              <div>
                <Link to="/search/audios">Audios </Link>
              </div>
              <div>
                <Link to="/search/videos">Videos</Link>
              </div>
              <div>
                <Link to="/search/asks">Asks</Link>
              </div>
            </div>
          </span>

          {/* <div>More <div>^</div></div> */}
        </div>
        <div
          style={{ display: "flex", width: "50%", justifyContent: "flex-end" }}
        >
          <span className={styles["grid-icons"]} tabindex="-1">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="RGB(255,255,255,1)"
            >
              <rect width="8" height="10" x="3" y="3" rx="1"></rect>
              <rect width="8" height="6" x="13" y="3" rx="1"></rect>
              <rect width="8" height="10" x="13" y="11" rx="1"></rect>
              <rect width="8" height="6" x="3" y="15" rx="1"></rect>
            </svg>
          </span>
          <span className={styles["grid-icons"]} tabindex="-1">
            <svg
              viewBox="0 0 24 24"
              width="23"
              height="23"
              fill="RGB(255,255,255,.65)"
            >
              <rect width="16" height="4" x="4" y="2" rx="1"></rect>
              <rect width="16" height="4" x="4" y="18" rx="1"></rect>
              <rect width="16" height="8" x="4" y="8" rx="1"></rect>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default SearchNavbar;
