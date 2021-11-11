import React, { Component } from "react";
import styles from "./Account.module.css";

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
        <form action="" id="email">
          <div className={styles["email-box"]}>
            <div className={styles["title"]}>Email</div>
            <div className={styles["input-fields"]}>
              <input type="email" name="" value="abdalla@abdalla.com" />
              <input type="password" placeholder="Confirm Password" />

              <div>
                <button id={styles["cancel-button"]}>cancel</button>
                <button id={styles["save-button"]}>save</button>
              </div>
              <div>
                <input type="checkbox" name="" />
                <span>Let people find your blogs through this address. </span>
              </div>
            </div>
            <div>
              <img
                src="../../assets/Images/pen-filled-diagonal-writing-tool.png"
                alt="failed to get it "
              />
            </div>
          </div>
          <div>
            <div className={styles["password-box"]}>
              <div>Password</div>
              <div className={styles["input-fields"]}>
                <input type="password" name="" placeholder="Current Password" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm Password" />

                <div>
                  <button id={styles["cancel-button"]}>cancel</button>
                  <button id={styles["save-button"]}>save</button>
                </div>
              </div>
              <div>
                <img
                  src="../../assets/Images/pen-filled-diagonal-writing-tool.png"
                  alt="failed to get it "
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Account;
