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
                <input type="checkbox" name="" style={{ marginRight: "6px" }} />
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
          <hr />

          <div className={styles["password-box"]}>
            <div className={styles["title"]}>Password</div>
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
          <hr />
          <div className={styles["security-box"]}>
            <div className={styles["title"]}>Security</div>
            <div className={styles["security-section"]}>
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  style={{ marginTop: "6px", marginRight: "6px" }}
                />
                <div className={styles["security-description"]}>
                  <div>Email me about account activity</div>
                  <div>
                    You will receive an email when someone logs into your
                    account or a new app is authorized
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  style={{ marginTop: "6px", marginRight: "6px" }}
                />
                <div>
                  <div>Two-factor authentication</div>
                  <div>
                    Enabling two factor authentication makes it extra difficult
                    for anyone other than you to access your account. Learn
                    more.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles["filtering-section"]}>
            <div className={styles["title"]}>Filtering</div>
            <div style={{width:"80%"}}>
              <div>
                <span>
                  Filtered Tags{" "}
                  <a href="/help" style={{ textDecoration: "underline" }}>
                    (Help)
                  </a>
                </span>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    placeholder="Add a Filter"
                    style={{ marginRight: "10px" }}
                  />
                  <button className={styles["add-button"]}>Add</button>
                </div>
              </div>
              <div>
                <span>
                  Filtered Post Content{" "}
                  <a href="/help" style={{ textDecoration: "underline" }}>
                    (Help)
                  </a>
                </span>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    placeholder="Add a Filter"
                    style={{ marginRight: "10px" }}
                  />
                  <button className={styles["add-button"]}>Add</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Account;
