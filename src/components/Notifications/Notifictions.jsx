import React, { Component } from "react";
import styles from "./Notifications.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
export class Notifictions extends Component {
  render() {
    return (
      <div className={styles["notification-container"]}>
        <h1 className={styles["header"]}>Account</h1>
        <hr />
        <div className={styles["notification-section"]}>
          <div style={{ display: "flex" }}>
            <img src="" alt="" />
            <div>Thebrownboy</div>
          </div>
          <div>
            Some notification and some emails
            <img className={styles["icon-photo"]} src={pen} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Notifictions;
