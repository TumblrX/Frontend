/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";
import api from "../../../api/api";
import {
  getUserInfo,
  changeEmail,
  changeFindMeByEmail,
} from "./EmailSectionServices";
import { useSelector, useDispatch } from "react-redux";
import {
  updateEmail,
  updateConfirmedPassword,
  updateLetPeopleFindBlogByEmail,
  updatePrevEmail,
  updatePassword,
} from "../../../redux/EmailSection";
import {
  componentDidMount,
  iconClick,
  changeInput,
  cancelButtonClick,
} from "./EmailSectionController";
/**
 * Component to render the Email Section in the Accountsettings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

const EmailSection = function (props) {
  const {
    email,
    password,
    previousEmail,
    confirmedPassword,
    letPeopleFindBlogByEmail,
  } = useSelector((state) => state.emailInfo);
  const dispatch = useDispatch();
  /**
   * this function handle the click on the save button in the email section
   * @type {function}
   * @param {*} event
   * @returns {void} return nothing , it just a click event handler
   */
  const formAction = (event) => {
    /**
     * get the save button
     * @type {Array<Element>}
     *
     */
    const saveButtons = document.getElementsByClassName(
      `${styles["save-button"]}`
    );
    if (event.target === saveButtons[0]) {
      if (email === previousEmail || email === "") {
        document.getElementsByClassName(
          `${styles["error-email-message"]}`
        )[0].style.visibility = "unset";
      } else {
        // if (password !== confirmedPassword) {
        //   document.getElementsByClassName(
        //     `${styles['error-password-message']}`,
        //   )[0].style.visibility = 'unset';
        //   return;
        // }
        /**
         * @type{object } sentData
         * object for the data that will be sent to the server
         */
        const sentData = {
          email: email,
          password: confirmedPassword,
        };
        changeEmail(sentData);
      }
    }
  };

  useEffect(componentDidMount, []);

  return (
    <>
      <div
        data-testid="email-section"
        className={styles["change-email-section"]}
      >
        <div className={styles.title}>Email</div>
        <div className={styles["input-fields"]}>
          <input
            onClick={iconClick}
            id="email-box"
            data-testid="email-box"
            type="email"
            value={email}
            onChange={changeInput}
            className={`${styles["before-focus-on-edit"]} ${styles["input-box"]} `}
          />
          <div className={`${styles["error-email-message"]} error-message`}>
            change your Email
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className={`${styles.hidden} ${styles["input-box"]}`}
            value={confirmedPassword}
            onChange={changeInput}
            id="emailcurrentpassword"
            data-testid="password-box"
          />

          <div className={`${styles["error-password-message"]} error-message`}>
            Please Enter the correct password
          </div>

          <div
            className={`${styles.hidden}`}
            data-testid="buttons-container"
            id="email-section-buttons"
          >
            <button
              onClick={(event) => cancelButtonClick(event, previousEmail)}
              className={styles["cancel-button"]}
              type="button"
              data-testid="email-cancel-button"
            >
              cancel
            </button>
            <button
              onClick={formAction}
              type="button"
              className={styles["save-button"]}
            >
              save
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              name=""
              style={{ marginRight: "6px" }}
              value={letPeopleFindBlogByEmail}
              onChange={changeInput}
              className={`${styles["input-box"]}`}
            />
            <div
              className={styles["user-message"]}
              style={{ marginTop: "-9px" }}
            >
              Let people find your blogs through this address.{" "}
            </div>
          </div>
        </div>

        <img
          src={pen}
          onClick={iconClick}
          className={styles["icon-photo"]}
          alt=" can't load "
          data-testid="email-edit-button"
        />
      </div>
      <hr />
    </>
  );
};

export default EmailSection;
