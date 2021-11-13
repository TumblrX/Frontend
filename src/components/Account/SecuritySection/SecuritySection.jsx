import styles from "../Account.module.css";
import axios from "axios";
import React, { Component } from "react";

/**
 * function that is used to render the Security section
 * @returns {jsx}
 */
let checkboxStates = [false, false];

class SecuritySection extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        let boxes = document.querySelectorAll(".security-container input");
        boxes[0].checked = response.data.emailAboutAccountActivity;
        checkboxStates[0] = response.data.emailAboutAccountActivity;
        boxes[1].checked = response.data.twoFactorAuthentication;
        checkboxStates[1] = response.data.twoFactorAuthentication;
      })
      .catch((err) => {});
  }
  checkBoxClick = (event) => {
    let boxes = document.querySelectorAll(".security-container input");
    let sentData;
    boxes.forEach((element, index) => {
      if (event.target === element) {
        checkboxStates[index] = !checkboxStates[index];
      }
    });
    if (event.target === boxes[0]) {
      console.log("i am in 111 ");
      sentData = {
        emailAboutAccountActivity: checkboxStates[0],
      };
      axios.patch("http://localhost:3000/users/1", sentData);
    } else {
      console.log("i am in 2222");
      sentData = {
        twoFactorAuthentication: checkboxStates[1],
      };
      axios.patch("http://localhost:3000/users/1", sentData);
    }
  };
  render() {
    return (
      <>
        <div className={`${styles["security-box"]} security-container`}>
          <div className={styles["title"]}>Security</div>
          <div className={styles["security-section"]}>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
              />
              <div className={styles["security-description"]}>
                <div className={styles["section-message"]}>
                  Email me about account activity
                </div>
                <div className={styles["user-message"]}>
                  You will receive an email when someone logs into your account
                  or a new app is authorized
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
              />
              <div>
                <div className={styles["section-message"]}>
                  Two-factor authentication
                </div>
                <div className={styles["user-message"]}>
                  Enabling two factor authentication makes it extra difficult
                  for anyone other than you to access your account.
                  <a href="/learnmore" className={styles["anchor"]}>
                    {" "}
                    Learn more.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default SecuritySection;
