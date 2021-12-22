/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import styles from "../Account.module.css";
import { useSelector } from "react-redux";
import { checkBoxClick } from "./SecuritySectionController";
/**
 * Component to render the Security  Section in the Accountsettings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

const SecuritySection = function () {
  const { EmailUserAbout, TwoFactorAuth } = useSelector(
    (state) => state.securityInfo
  );

  return (
    <div
      data-testid="security-seciton"
      className={`${styles["security-box"]} security-container`}
    >
      <div className={styles.title}>Security</div>
      <div className={styles["security-section"]}>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={checkBoxClick}
            data-testid="email-user-about-activity-checkbox"
            className={`${styles["input-box"]}`}
          />
          <div className={styles["security-description"]}>
            <div className={styles["section-message"]}>
              Email me about account activity
            </div>
            <div className={styles["user-message"]}>
              You will receive an email when someone logs into your account or a
              new app is authorized
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={(event) =>
              checkBoxClick(event, EmailUserAbout, TwoFactorAuth)
            }
            className={`${styles["input-box"]}`}
          />
          <div>
            <div className={styles["section-message"]}>
              Two-factor authentication
            </div>
            <div className={styles["user-message"]}>
              Enabling two factor authentication makes it extra difficult for
              anyone other than you to access your account.
              <a href="/learnmore" className={styles.anchor}>
                {" "}
                Learn more.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
