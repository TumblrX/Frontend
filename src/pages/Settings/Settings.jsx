import React, { Component } from "react";
import SettingsNavbar from "../../components/SettingsNavbar/SettingsNavbar";
import styles from "./Settings.module.css";
import Account from "../../components/Account/Account";
/**
 * Component to render the settings page with its different routes
 * @author Abdalla Mahmoud
 *
 * @component
 *
 */
export default class Settings extends Component {
  render() {
    return (
      <div className={styles["contanier"]}>
        <div className={styles["left-side"]}>
          <Account />
        </div>
        <div className={styles["aside-bar"]}>
          <SettingsNavbar />
        </div>
      </div>
    );
  }
}
