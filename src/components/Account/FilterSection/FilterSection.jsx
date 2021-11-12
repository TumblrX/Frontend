import React, { Component } from "react";

import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";

/**
 * component to render the email section on the account settings
 * @author Abdalla Mahmoud
 * @component
 */
export class FilterSection extends Component {
  /**
   * this function is responsible render the Email section
   * @returns {jsx} return jsx to be renderd
   */
  render() {
    return (
      <>
        <div className={styles["filtering-section"]}>
          <div className={styles["title"]}>Filtering</div>
          <div style={{ width: "80%" }}>
            <div>
              <div>
                <span
                  className={`${styles["section-message"]} ${styles["filter-message"]}`}
                >
                  Filtered Tags{" "}
                  <a href="/help" className={styles["anchor"]}>
                    (Help)
                  </a>
                </span>
              </div>

              <div className={styles["section-message"]}>
                You're not filtering any tags
                <img
                  src={pen}
                  onClick={this.iconClick}
                  className={styles["icon-photo"]}
                  alt="can't load"
                />
              </div>

              <div className={styles["tags-filter-box"]}>
                <input
                  type="text"
                  placeholder="Add a Filter"
                  style={{ marginRight: "10px" }}
                />
                <button type="button" className={styles["add-button"]}>
                  Add
                </button>
              </div>
            </div>
            <div>
              <span
                style={{ color: "gray" }}
                className={`${styles["section-message"]} ${styles["filter-message"]}`}
              >
                Filtered Post Content{" "}
                <a href="/help" className={styles["anchor"]}>
                  (Help)
                </a>
              </span>

              <div className={styles["section-message"]}>
                You're not filtering any posts
                <img
                  src={pen}
                  onClick={this.iconClick}
                  className={styles["icon-photo"]}
                  alt="can't load"
                />
              </div>
              <div className={styles["posts-filter-box"]}>
                <input
                  type="text"
                  placeholder="Add a Filter"
                  style={{ marginRight: "10px" }}
                />
                <button type="button" className={styles["add-button"]}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FilterSection;
