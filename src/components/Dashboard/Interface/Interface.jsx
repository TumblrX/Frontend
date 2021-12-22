/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import styles from "../Dashboard.module.css";
import { checkBoxClick } from "./InterfaceServices";
/**
 * Component to render the interface section in the Dashboard settings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

const Interface = function (props) {
  return (
    <div className={styles.section}>
      <div className={styles.title}>Interface</div>
      <div className={styles["section-form"]}>
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="checkbox"
            style={{ marginTop: "6px", marginRight: "6px" }}
            onClick={() => {
              let sentData = {
                dashBoardInfiniteScrolling: document.querySelector(
                  `[data-testid="enable-endless-scrolling-checkbox"]`
                ).checked,
              };
              checkBoxClick(sentData);
            }}
            data-testid="enable-endless-scrolling-checkbox"
            className={`${styles["input-box"]}`}
          />
          <div className={styles.description}>
            <div className={styles["section-message"]}>
              Eanble endless scrolling
            </div>
            <div className={styles["user-message"]}>
              Surf your dashboard page-by-page instead of as an
              infinitely-scrolling feed. To update the URL for each page in your
              browser, you will also need to disable Best Stuff First.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
