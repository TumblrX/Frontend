import styles from "../Account.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

/**
 * Component to render the Security  Section in the Accountsettings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

function SecuritySection(props) {
  const [checkboxesStates, updateState] = useState({
    EmailUserAbout: null,
    TwoFactorAuth: null,
  });

  /**
   * this fucntion is just a handler for clicking on check box in the Security Section
   * @type {function}
   * @param {event} event
   *
   */
  const checkBoxClick = (event) => {
    /**
     * get all the check boxes in the security container
     * @type {Array<Element>}
     *
     */
    let boxes = document.querySelectorAll(".security-container input");
    if (event.target === boxes[0]) {
      updateState((prevState) => {
        return { ...prevState, EmailUserAbout: !prevState.EmailUserAbout };
      });
    } else {
      updateState((prevState) => {
        return { ...prevState, TwoFactorAuth: !prevState.TwoFactorAuth };
      });
    }
  };

  useEffect(() => {
    // value will be null in the first call the the other useEffect state
    // TAKE CARE  the setState function is an async function so we use useEffect method
    // to see any change happens to the state
    if (
      checkboxesStates.EmailUserAbout === null ||
      checkboxesStates.TwoFactorAuth === null
    )
      return;
    let sentData = {
      emailAboutAccountActivity: checkboxesStates.EmailUserAbout,
      twoFactorAuthentication: checkboxesStates.TwoFactorAuth,
    };
    console.log("Yes Iam ");
    axios
      .patch("http://localhost:3000/users/1", sentData)
      .then((res) => {
        console.log("data sent ");
      })
      .catch((err) => {
        console.log(err);
        // validations from backend .
      });
  }, [checkboxesStates, props]);

  /**
   * @function
   * @param {void}
   * @returns {void}
   * retreive the data from the backend when the component mounted
   */
  const componentDidMount = () => {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        document.querySelectorAll(`input[type="checkbox"]`)[1].checked =
          response.data.emailAboutAccountActivity;
        document.querySelectorAll(`input[type="checkbox"]`)[2].checked =
          response.data.twoFactorAuthentication;
        console.log("Iam here ");

        updateState({
          EmailUserAbout: response.data.emailAboutAccountActivity,
          TwoFactorAuth: response.data.twoFactorAuthentication,
        });
      })
      .catch((err) => {});
  };

  useEffect(componentDidMount, []);
  return (
    <>
      <div
        data-testid="security-seciton"
        className={`${styles["security-box"]} security-container`}
      >
        <div className={styles["title"]}>Security</div>
        <div className={styles["security-section"]}>
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <input
              type="checkbox"
              style={{ marginTop: "6px", marginRight: "6px" }}
              onClick={checkBoxClick}
              data-testid="email-user-about-activity-checkbox"
              className={`${styles["input-box"]}`}
              // value={checkboxesStates.EmailUserAbout}
            />
            <div className={styles["security-description"]}>
              <div className={styles["section-message"]}>
                Email me about account activity
              </div>
              <div className={styles["user-message"]}>
                You will receive an email when someone logs into your account or
                a new app is authorized
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <input
              type="checkbox"
              style={{ marginTop: "6px", marginRight: "6px" }}
              onClick={checkBoxClick}
              className={`${styles["input-box"]}`}
              // value={checkboxesStates.TwoFactorAuth}
            />
            <div>
              <div className={styles["section-message"]}>
                Two-factor authentication
              </div>
              <div className={styles["user-message"]}>
                Enabling two factor authentication makes it extra difficult for
                anyone other than you to access your account.
                <a href="/learnmore" className={styles["anchor"]}>
                  {" "}
                  Learn more.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecuritySection;
