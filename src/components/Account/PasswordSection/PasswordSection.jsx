/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import {
  changeInput,
  iconClick,
  cancelButtonClick,
  formAction,
} from "./PasswordSectionController";
import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";
import { useSelector } from "react-redux";

/**
 * Component to render the Password  Section in the Accountsettings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

const PasswordSection = function (props) {
  const { password, confirmedPassword, newPassword, newConfirmedPassword } =
    useSelector((state) => state.passwordInfo);

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
          <div style={{ }}>
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
            <div
              className={`${styles["error-current-password"]} error-message `}
            >
              Please Enter your password Correctly
            </div>
          </div>
          <div style={{ display: "none" }}>
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
          </div>
          <div style={{ display: "none" }}>
            <input
              id="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              value={newConfirmedPassword}
              onChange={changeInput}
              data-testid="confirmpassword-box"
              className={`${styles["input-box"]}`}
            />
            <div
              className={`${styles["error-confirm-password"]} error-message`}
            >
              Please Enter Identical Passwords
            </div>
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
              onClick={(event) =>
                formAction(
                  event,
                  newPassword,
                  newConfirmedPassword,
                  confirmedPassword
                )
              }
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
