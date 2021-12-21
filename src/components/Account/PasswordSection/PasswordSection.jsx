/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { changeInput, iconClick,cancelButtonClick } from "./PasswordSectionController";
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
