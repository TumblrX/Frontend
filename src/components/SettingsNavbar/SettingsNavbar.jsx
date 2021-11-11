import React, { Component } from "react";
import styles from "./SettingsNavbar.module.css";
/**
 * Component to render the navbar of the settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */
export default class SettingsNavbar extends Component {
  render() {
    return (
      <div>
        <a href="/settings/account">
          <div className={styles["nav-bar-slot"]}>
            <div>Account</div>
            <div>The essentials</div>
          </div>
        </a>
        <a href="/settings/dashboard">
          <div className={styles["nav-bar-slot"]}>
            <div>Dashboard</div>
            <div>Appearance options,text editor</div>
          </div>
        </a>
        <a href="/settings/notifications">
          <div className={styles["nav-bar-slot"]}>
            <div>Notifications</div>
            <div>Via email &amp; mobile </div>
          </div>
        </a>
        <a href="/settings/privacy">
          <div className={styles["nav-bar-slot"]}>
            <div>Privacy</div>
            <div>Personalization and data management</div>
          </div>
        </a>
      </div>
    );
  }
}
