import React, { Component } from "react";
import styles from "./Account.module.css";
import axios from "axios";
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
  sendData(data) {
    axios
      .patch("http://localhost:3000/users/1", data)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // validations from backend .
      });
  }

  render() {
    return (
      <div className={styles["account-container"]}>
        <h1 className={styles["header"]}>Account</h1>
        <hr />
        <form action="">
          <EmailSection sendData={this.sendData} />

          <PasswordSection sendData={this.sendData} />

          <SecuritySection sendData={this.sendData} />

          <FilterSection sendData={this.sendData} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="/delete">
              <button data-testid="delete-account-button" className={styles["delete-account-button"]}>
                Delete account
              </button>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Account;
