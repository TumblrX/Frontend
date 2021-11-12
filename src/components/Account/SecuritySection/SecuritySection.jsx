import styles from "../Account.module.css";

import React from "react";

/**
 * function that is used to render the Security section
 * @returns {jsx}
 */
function SecuritySection() {
  return (
    <>
      <div className={styles["security-box"]}>
        <div className={styles["title"]}>Security</div>
        <div className={styles["security-section"]}>
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <input
              type="checkbox"
              style={{ marginTop: "6px", marginRight: "6px" }}
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
      <hr />
    </>
  );
}

export default SecuritySection;
