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
      <aside>
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
        <div className={styles.blogs}>Blogs</div>
        <div className={`${styles["blog-slot"]}`}>
          <div>
            <img src="" alt="" />
            <div>
              <div>youngdev</div>
              <div className={styles["small-text"]}>Thebrownboy</div>
            </div>
          </div>
        </div>
        <a href="/new/blog" className={styles["small-text"]}>create a new blog </a>
      </aside>
    );
  }
}
