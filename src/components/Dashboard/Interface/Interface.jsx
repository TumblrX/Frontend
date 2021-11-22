import React, { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";
import axios from "axios";
import api from "../../../api/api";

/**
 * Component to render the interface section in the Dashboard settings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

function Interface(props) {
  // the state is supposed to be null not false and not true
  // why , but react assert a waring that warns from using the state  value with null
  // so the state will be object with a key equal to null
  const [checkBoxState, setState] = useState({ state: null });

  /**
   * check if the check button has been clicked and send its value to the server
   * @type {function}
   * @param {void }
   * @returns {void }
   *
   */
  const checkBoxClick = () => {
    // on click set the state with the inversion of the previous state
    setState((prevState) => {
      return { state: !prevState.state };
    });
  };

  useEffect(() => {
    // value will be null in the first call the the other useEffect state
    // TAKE CARE  the setState function is an async function so we use useEffect method
    // to see any change happens to the state
    if (checkBoxState.state === null) return;
    let sentData = {
      enableEndLessScrolling: checkBoxState.state,
    };
    // I will send the data when the checkbox is clicked
    // so every update in the state should be sent to the server
    // so I will listen here for any change done in the checkboxstate and send it to the server .
    // it is different from the EmailSection.jsx and Password because these sections have submit
    // button
    props.sendData(sentData);
  }, [checkBoxState, props]);
  /**
   * retreive the data from the backend when the component mounted
   * @type {function}
   * @param {void}
   * @returns {void}
   *
   */
  const componentDidMount = () => {
    api
      .get("/users/1")
      .then((response) => {
        document.querySelectorAll(`input[type="checkbox"]`)[0].checked =
          response.data.enableEndLessScrolling;

        setState({ state: response.data.enableEndLessScrolling });
      })
      .catch((err) => {});
  };

  useEffect(componentDidMount, []);

  return (
    <>
      <div className={styles["section"]}>
        <div className={styles["title"]}>Interface</div>
        <div className={styles["section-form"]}>
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <input
              type="checkbox"
              style={{ marginTop: "6px", marginRight: "6px" }}
              onClick={checkBoxClick}
              data-testid="enable-endless-scrolling-checkbox"
              className={`${styles["input-box"]}`}
              // value={checkBoxState.state}
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

export default Interface;
