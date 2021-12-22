/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import styles from "./SettingsNavbar.module.css";
import { Link } from "react-router-dom";
import userPhoto from "../../assets/Images/myphoto.jpg";

/**
 * Component to render the navbar of the settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */
export default class SettingsNavbar extends Component {
  /**
   * this function is responsible render the SettingsNavBar
   * @function
   * @returns {jsx} return jsx to be renderd
   */
  render() {
    return (
      <aside>
        <Link to="/settings/account">
          <div className={styles["nav-bar-slot"]}>
            <div>Account</div>
            <div>The essentials</div>
          </div>
        </Link>

        <Link to="/settings/dashboard">
          <div className={styles["nav-bar-slot"]}>
            <div>Dashboard</div>
            <div>Appearance options,text editor</div>
          </div>
        </Link>

        <Link to="/settings/notifications">
          <div className={styles["nav-bar-slot"]}>
            <div>Notifications</div>
            <div>Via email &amp; mobile </div>
          </div>
        </Link>
        {/* <Link to="/settings/privacy">
          <div className={styles["nav-bar-slot"]}>
            <div>Privacy</div>
            <div>Personalization and data management</div>
          </div>
        </Link> */}

        <div className={styles.blogs}>Blogs</div>
        <Link to="/settings/blog/youngdev">
          <div className={`${styles["blog-slot"]}`}>
            <div style={{ display: "flex" }}>
              <img
                src={userPhoto}
                alt=""
                className={styles["user-img"]}
                data-testid="navbar-avatar"
              />
              <div>
                <div className="username" />
                <div className={`${styles["small-text"]} nickname`} />
              </div>
            </div>
          </div>
        </Link>
        <Link to="/new/blog">
          <div className={styles["small-text"]}> create a new blog </div>
        </Link>
      </aside>
    );
  }
}
