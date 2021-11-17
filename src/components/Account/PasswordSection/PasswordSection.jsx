import React, { Component } from "react";

import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";
import axios from "axios";

/**
 * Component to render the Password section on the Account section
 *
 * @author Abdalla Mahmoud
 * @Component
 */
export class PasswordSection extends Component {
  /**
   * @constructor
   *
   * @public
   *
   * @param {object} props any props sent from parent component
   */
  constructor(props) {
    super(props);

    this.state = {
      /**
       * string for previous password
       * @type {string}
       */
      password: "",
      /**
       * string for password that the user will enter to confirm changing email
       * @type {string}
       */
      confirmedPassword: "",
      /**
       * string for the new password
       * @type {string}
       */
      newPassword: "",
      /**
       * confirmed new password
       * @type {string}
       */
      newConfirmedPassword: "",
    };
  }
  /**
   * this function handle the click on the save button in the email section
   * @function
   *
   * @param {event} event
   * @returns {void} return nothing , it just a click event handler
   */
  formAction = (event) => {
    /**
     * @type {Array<Element>}
     * get save buttons
     */
    let saveButtons = document.getElementsByClassName(
      `${styles["save-button"]}`
    );

    if (event.target === saveButtons[1]) {
      if (this.state.confirmedPassword !== this.state.password) {
        document.getElementsByClassName(
          `${styles["error-current-password"]}`
        )[0].style.visibility = "unset";
      } else if (
        this.state.newPassword.length < 10 ||
        this.state.password === this.state.newPassword
      ) {
        // one condition for test
        if (this.state.newPassword.length < 10)
          document.getElementsByClassName(
            `${styles["error-new-password"]}`
          )[0].style.visibility = "unset";
        else
          document.getElementsByClassName(
            `${styles["error-new-password"]}`
          )[1].style.visibility = "unset";
      } else if (this.state.newPassword !== this.state.newConfirmedPassword) {
        document.getElementsByClassName(
          `${styles["error-confirm-password"]}`
        )[0].style.visibility = "unset";
      } else {
        let sentData = { password: this.state.newPassword };
        this.props.sendData(sentData);
      }
    }
  };

  /**
   * this function handle the event handler on cancel button on the editing email section
   * @function
   * @param {event} event  it takes the click item as an event
   * @return {void} returns nothing it just an event handler
   */

  cancelButtonClick = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.visibility = "hidden";
      element.style.transition = "none";
    });
    /**
     * @type {Array<Element>}
     * all cancel buttons
     */
    let allButtons = document.querySelectorAll(`.${styles["cancel-button"]}`);
    if (event.target === allButtons[1]) {
      document.getElementsByClassName(`${styles["dots"]}`)[0].style.display =
        "block";
      document
        .querySelectorAll(`.${styles["password-box"]} input`)
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          //How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });

      document
        .getElementsByTagName("img")[1]
        .classList.toggle(`${styles.hidden}`);

      document
        .getElementsByClassName(`${styles["password-section-buttons"]}`)[0]
        .classList.toggle(`${styles.hidden}`);
    }
    document.querySelectorAll(`form >div`).forEach((element) => {
      element.style.opacity = "1";
    });

    document.querySelectorAll(`form >div`).forEach((element) => {
      element.style.opacity = "1";
    });

    document.querySelectorAll(`form`)[0].style.pointerEvents = "all";
  };
  /**
   * @function
   * @param {void }
   * @returns {void}
   * retreive the data from the backend when the component mounted
   */
  componentDidMount() {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        this.data = response.data;
        this.previousData = response.data;
        this.setState(() => {
          return {
            email: response.data.email,
            password: response.data.password,
          };
        });
      })
      .catch();
  }

  /**
   * this function handle the event handler on edit button icon
   * @param {event} event
   * @return {void} return nothing it just an event handler
   */
  iconClick = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.transition = "0.5s .1s linear";
    });
    /**
     * @type {Array<Element>}
     * get all icon images
     */
    let imgs = document.querySelectorAll(`.${styles["icon-photo"]}`);
    if (
      event.target === imgs[1] ||
      event.target.className === `${styles["dots"]}` ||
      event.target.parentElement.className === `${styles["dots"]}`
    ) {
      document.getElementsByClassName(`${styles["dots"]}`)[0].style.display =
        "none";
      document
        .querySelectorAll(`.${styles["password-box"]} .${styles.hidden}`)
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          //How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });
      document
        .getElementsByClassName(`${styles["icon-photo"]}`)[1]
        .classList.toggle(`${styles.hidden}`);
      /**
       * @type {Element}
       * the form of the Account
       */
      let entireForm = document.getElementsByTagName("form")[0];
      entireForm.style.pointerEvents = "none";
      document.querySelectorAll(`form >div`).forEach((element) => {
        element.style.opacity = "0.5";
      });
      /**
       * @type {Array<Element>}
       * get the section for changing password
       */
      let changePasswordSection = document.getElementsByClassName(
        `${styles["password-box"]}`
      )[0];
      changePasswordSection.style.pointerEvents = "all";
      changePasswordSection.style.opacity = "1";
    }
  };

  /**
   * this function handle any change in the states
   * @function
   * @param {event} event
   * @returns {void}
   */
  changeInput = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      // if the user enter invalid input then try to enter new values
      element.style.visibility = "hidden";
    });
    document.querySelectorAll(".error-message").forEach((element) => {
      // if the user enter invalid input then try to enter new values
      element.style.visibility = "hidden";
    });
    if (event.target.id === "currentpassword") {
      this.setState(() => {
        return { confirmedPassword: event.target.value };
      });
    } else if (event.target.id === "newpassword") {
      this.setState(() => {
        return { newPassword: event.target.value };
      });
    } else if (event.target.id === "confirmpassword") {
      this.setState(() => {
        return { newConfirmedPassword: event.target.value };
      });
    } else {
      this.setState(() => {
        return { confirmedPassword: event.target.value };
      });
    }
  };

  /**
   * this function is responsible render the Email section
   * @returns {jsx} return jsx to be renderd
   */
  render() {
    return (
      <>
        <div  data-testid="password-section"className={styles["password-box"]}>
          <div className={styles["title"]}>Password</div>
          <div
            className={styles["dots"]}
            onClick={this.iconClick}
            data-testid="dots"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles["input-fields"]} ${styles.hidden}`} data-testid="password-section-input-field">
            <input
              id="currentpassword"
              type="password"
              name=""
              placeholder="Current Password"
              value={this.state.confirmedPassword}
              onChange={this.changeInput}
              data-testid="currentpassword-box"
            />
            <div
              className={`${styles["error-current-password"]} error-message `}
            >
              Please Enter your password Correctly
            </div>
            <input
              id="newpassword"
              type="password"
              placeholder="New Password"
              value={this.state.newPassword}
              onChange={this.changeInput}
              data-testid="newpassword-box"
            />
            <div className={`${styles["error-new-password"]} error-message`}>
              Please Enter Strong Password
            </div>
            <div className={`${styles["error-new-password"]} error-message`}>
              Please Don't enter you previous Password
            </div>
            <input
              id="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              value={this.state.newConfirmedPassword}
              onChange={this.changeInput}
              data-testid="confirmpassword-box"
            />
            <div
              className={`${styles["error-confirm-password"]} error-message`}
            >
              Please Enter Identical Passwords
            </div>

            <div className={styles["password-section-buttons"]} >
              <button
                onClick={this.cancelButtonClick}
                className={styles["cancel-button"]}
                type="button"
              >
                cancel
              </button>
              <button
                type="button"
                onClick={this.formAction}
                className={styles["save-button"]}
              >
                save
              </button>
            </div>
          </div>

          <img
            src={pen}
            onClick={this.iconClick}
            className={styles["icon-photo"]}
            alt=" can't load "
            data-testid="password-edit-button"
          />
        </div>
        <hr />
      </>
    );
  }
}

export default PasswordSection;
