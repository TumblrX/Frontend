import React from "react";
import styles from "./scss/ExploreNavbar.module.scss";
import { Link } from "react-router-dom";

/**
 * Component to render the Explore Navbar in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreNavbar() {
  return (
    <div className={styles["explore-navbar"]}>
      <div className={styles["explore-selection"]}>
        <Link to="recommended-for-you">
          <span>For You 💖</span>
        </Link>
        <Link to="/explore/trending">
          <span>Trending 🚀</span>
        </Link>
        <Link to="/explore/staff-picks">
          <span>Staff Picks 🌟</span>
        </Link>
        <span>More </span>
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
  );
}

export default ExploreNavbar;
