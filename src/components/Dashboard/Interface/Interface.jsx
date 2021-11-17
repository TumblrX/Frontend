import axios from "axios";
import React, { Component } from "react";
import styles from "../Dashboard.module.css";
/**
 * this variable works as a state , there is no mean to put state here in this
 * component , for performance concerns
 * @type {boolean}
 */
let checkboxState;

/**
 * component to render the interface on the Dashboard settings
 * @author Abdalla Mahmoud
 * @component
 */

class Interface extends Component {
  /**
   * @function
   * @param {void }
   * @returns {void }
   * check if the check button has been clicked and send its value to the server
   */
  checkBoxClick = () => {
    checkboxState = !checkboxState;
    /**
     * @type{object } sentData
     * object for the data that will be sent to the server
     */

    let sentData = {
      enableEndLessScrolling: checkboxState,
    };
    this.props.sendData(sentData);
  };

  /**
   * @function
   * @param {void}
   * @returns {void}
   * retreive the data from the backend when the component mounted
   */
  componentDidMount = () => {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        console.log(response.data.enableEndLessScrolling);
        document.querySelectorAll(`input[type="checkbox"]`)[0].checked =
          response.data.enableEndLessScrolling;
        checkboxState = response.data.enableEndLessScrolling;
      })
      .catch((err) => {});
  };
  /**
   * this function is responsible render the interface section
   * @function
   * @returns {jsx} return jsx to be renderd
   */
  render() {
    return (
      <>
        <div className={styles["section"]}>
          <div className={styles["title"]}>Interface</div>
          <div className={styles["section-form"]}>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
                data-testid="enable-endless-scrolling-checkbox"
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Eanble endless scrolling
                </div>
                <div className={styles["user-message"]}>
                  Surf your dashboard page-by-page instead of as an
                  infinitely-scrolling feed. To update the URL for each page in
                  your browser, you'll also need to disable Best Stuff First.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Interface;
