import React, { Component } from "react";
import SettingsNavbar from "../../components/SettingsNavbar/SettingsNavbar";
import styles from "./Settings.module.css";
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
        <div >Account</div>
        <div className={styles["aside-bar"]}>
          <SettingsNavbar />
        </div>
      </div>
    );
  }
}
