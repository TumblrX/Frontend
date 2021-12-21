/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";
import { useSelector } from "react-redux";
import {
  iconClick,
  changeInput,
  cancelButtonClick,
  formAction,
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
              onClick={(event) =>
                formAction(event, email, previousEmail, confirmedPassword)
              }
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
