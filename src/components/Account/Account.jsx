/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { useEffect } from "react";
import styles from "./Account.module.css";
import EmailSection from "./EmailSection/EmailSection";
import PasswordSection from "./PasswordSection/PasswordSection";
import SecuritySection from "./SecuritySection/SecuritySection";
import { getUserInfo } from "./AccountServices";
/**
 * Component to render the Account settings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */
const Account = function () {
  useEffect(getUserInfo, []);
  return (
    <div className={styles["account-container"]}>
      <h1 className={styles.header}>Account</h1>
      <hr />
      <form action="">
        <EmailSection />

        <PasswordSection />

        <SecuritySection />

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a href="/delete">
            <button
              data-testid="delete-account-button"
              className={styles["delete-account-button"]}
            >
              Delete account
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Account;
