import React, { Component } from "react";
import styles from "./Notifications.module.css";
import pen from "../../assets/Images/pencil-64x64.png";
import userPhoto from "../../assets/Images/myphoto.jpg"
export class Notifictions extends Component {
  render() {
    return (
      <div className={styles["notification-container"]}>
        <h1 className={styles["header"]}>Account</h1>
        <hr />
        <div className={styles["notification-section"]}>
          <div className={styles["user-info"]} style={{ display: "flex" }}>
            <img src={userPhoto} alt="" className={styles["user-img"]} />
            <div>Thebrownboy</div>
          </div>
          <div className={styles["edit-section"]}>
            Some notification and some emails
            <img className={styles["icon-photo"]} src={pen} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Notifictions;
