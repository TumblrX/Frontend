import React, { Component } from "react";
import styles from "../Dashboard.module.css";
export class Sounds extends Component {
  render() {
    return (
      <>
        <div className={styles["section"]}>
          <div className={styles["title"]}>Sounds</div>
          <div className={styles["section-form"]}>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Messaging sounds
                </div>
                <div className={styles["user-message"]}>
                  Assorted 'shling!' and 'fwip!' noises in messaging.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Sounds;
