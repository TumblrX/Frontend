/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { changeInput, iconClick } from "./PasswordSectionController";
import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";
import api from "../../../api/api";
import { useSelector, useDispatch } from "react-redux";
import {
  updateConfirmedPassword,
  updatenewConfirmedPassword,
  updatenewPassword,
  updatePassword,
} from "../../../redux/PasswordSection";
import { sendPasswordData } from "./PasswordSectionServices";
/**
 * Component to render the Password  Section in the Accountsettings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

const PasswordSection = function (props) {
  const { password, confirmedPassword, newPassword, newConfirmedPassword } =
    useSelector((state) => state.passwordInfo);
  /**
   * this function handle the click on the save button in the email section
   * @type {function}
   * @param {*} event
   * @returns {void} return nothing , it just a click event handler
   */
  const formAction = (event) => {
    /**
     *  get save buttons
     * @type {Array<Element>}
     *
     */
    const saveButtons = document.getElementsByClassName(
      `${styles["save-button"]}`
    );

    if (event.target === saveButtons[1]) {
      if (newPassword.length < 10 || password === newPassword) {
        // one condition for test
        if (newPassword.length < 10) {
          document.getElementsByClassName(
            `${styles["error-new-password"]}`
          )[0].style.visibility = "unset";
        } else {
          document.getElementsByClassName(
            `${styles["error-new-password"]}`
          )[1].style.visibility = "unset";
        }
      } else if (newPassword !== newConfirmedPassword) {
        document.getElementsByClassName(
          `${styles["error-confirm-password"]}`
        )[0].style.visibility = "unset";
      } else {
        const sentData = {
          oldPassword: confirmedPassword,
          password: newPassword,
        };
        sendPasswordData(sentData);
        // console.log(newConfirmedPassword, newPassword, password);
      }
    }
  };

  /**
   * this function handle the event handler on cancel button on the editing email section
   * @type {function}
   * @param {*} event  it takes the click item as an event
   * @return {void} returns nothing it just an event handler
   */

  const cancelButtonClick = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.visibility = "hidden";
      element.style.transition = "none";
    });
    /**
     * all cancel buttons
     * @type {Array<Element>}
     *
     */
    const allButtons = document.querySelectorAll(`.${styles["cancel-button"]}`);
    if (event.target === allButtons[1]) {
      document.getElementsByClassName(`${styles.dots}`)[0].style.display =
        "block";
      document
        .querySelectorAll(`.${styles["password-box"]} input`)
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          // How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });

      document
        .getElementsByTagName("img")[1]
        .classList.toggle(`${styles.hidden}`);

      document
        .querySelector("#password-section-buttons")
        .classList.toggle(`${styles.hidden}`);
    }
    document.querySelectorAll("form >div").forEach((element) => {
      element.style.opacity = "1";
    });

    document.querySelectorAll("form >div").forEach((element) => {
      element.style.opacity = "1";
    });

    document.querySelectorAll("form")[0].style.pointerEvents = "all";
  };

  return (
    <>
      <div data-testid="password-section" className={styles["password-box"]}>
        <div className={styles.title}>Password</div>
        <div className={styles.dots} onClick={iconClick} data-testid="dots">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div
          className={`${styles["input-fields"]} ${styles.hidden}`}
          data-testid="password-section-input-field"
        >
          <input
            id="currentpassword"
            type="password"
            name=""
            placeholder="Current Password"
            value={confirmedPassword}
            onChange={changeInput}
            data-testid="currentpassword-box"
            className={`${styles["input-box"]}`}
          />
          <div className={`${styles["error-current-password"]} error-message `}>
            Please Enter your password Correctly
          </div>
          <input
            id="newpassword"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={changeInput}
            data-testid="newpassword-box"
            className={`${styles["input-box"]}`}
          />
          <div className={`${styles["error-new-password"]} error-message`}>
            Please Enter Strong Password
          </div>
          <div className={`${styles["error-new-password"]} error-message`}>
            Please Don not enter you previous Password
          </div>
          <input
            id="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            value={newConfirmedPassword}
            onChange={changeInput}
            data-testid="confirmpassword-box"
            className={`${styles["input-box"]}`}
          />
          <div className={`${styles["error-confirm-password"]} error-message`}>
            Please Enter Identical Passwords
          </div>

          <div id="password-section-buttons">
            <button
              onClick={cancelButtonClick}
              className={styles["cancel-button"]}
              type="button"
            >
              cancel
            </button>
            <button
              type="button"
              onClick={formAction}
              className={styles["save-button"]}
            >
              save
            </button>
          </div>
        </div>

        <img
          src={pen}
          onClick={iconClick}
          className={styles["icon-photo"]}
          alt=" can't load "
          data-testid="password-edit-button"
        />
      </div>
      <hr />
    </>
  );
};

export default PasswordSection;
