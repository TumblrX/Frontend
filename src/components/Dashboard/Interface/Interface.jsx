import React, { Component } from "react";
import styles from "../Dashboard.module.css";
class Interface extends Component {
  render() {
    return (
      <>
        <div className={styles["section"]}>
          <div className={styles["title"]}>Interface</div>
          <div className={styles["section-form"]}>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Eanble endless scrolling
                </div>
                <div className={styles["user-message"]}>
                  Surf your dashboard page-by-page instead of as an
                  infinitely-scrolling feed. To update the URL for each page in
                  your browser, you'll also need to disable Best Stuff First.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Interface;
