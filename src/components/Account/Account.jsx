import React, { Component } from "react";
import styles from "./Account.module.css";

import FilterSection from "./FilterSection/FilterSection";
import EmailSection from "./EmailSection/EmailSection";
import PasswordSection from "./PasswordSection/PasswordSection";
import SecuritySection from "./SecuritySection/SecuritySection";
/**
 * Component to render the Account settings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */
export class Account extends Component {
  render() {
    return (
      <div className={styles["account-container"]}>
        <h1 className="title">Account</h1>
        <hr />
        <form action="">
          <EmailSection />

          <PasswordSection />

          <SecuritySection />

          <FilterSection />
        </form>
      </div>
    );
  }
}

export default Account;
