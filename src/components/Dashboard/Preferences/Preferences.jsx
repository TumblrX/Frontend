import React, { Component } from "react";
import styles from "../Dashboard.module.css";
class Preferences extends Component {
  render() {
    return (
      <>
        <div className={styles["section"]}>
          <div className={styles["title"]}>Preferences</div>
          <div className={styles["section-form"]}>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Best Stuff First
                </div>
                <div className={styles["user-message"]}>
                  This switch puts stuff you'll like at the top of your dash.
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Include stuff in your orbit
                </div>
                <div className={styles["user-message"]}>
                  Posts that your favorite people liked.
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Enable colorized tags
                </div>
                <div className={styles["user-message"]}>
                  Colorize matching tags on the dashboard. Colorized tags add a
                  nice touch to your dashboard but they might be harder to read.
                </div>
              </div>
            </div>

            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Include followed tag posts
                </div>
                <div className={styles["user-message"]}>
                  Posts from the tags you follow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Preferences;
