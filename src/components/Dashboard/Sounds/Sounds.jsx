import React, { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";
import axios from "axios";

/**
 * this function is responsible render the sounds  section
 * @function
 * @returns {jsx} return jsx to be renderd
 */
function Sounds(props) {
  const [checkBoxState, setState] = useState({ state: null });
  /**
   * @function
   * @param {void }
   * @returns {void }
   * check if the check button has been clicked and send its value to the server
   */
  const checkBoxClick = () => {
    // on click set the state with the inversion of the previous state
    setState((prevState) => {
      return { state: !prevState.state };
    });
  };

  useEffect(() => {
    if (checkBoxState.state === null) return;
    let sentData = {
      messagingSounds: checkBoxState.state,
    };
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
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        document.querySelectorAll(`input[type="checkbox"]`)[1].checked =
          response.data.messagingSounds;

        setState({ state: response.data.messagingSounds });
      })
      .catch((err) => {});
  };

  useEffect(componentDidMount, []);
  return (
    <>
      <div className={styles["section"]}>
        <div className={styles["title"]}>Sounds</div>
        <div className={styles["section-form"]}>
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <input
              type="checkbox"
              style={{ marginTop: "6px", marginRight: "6px" }}
              onClick={checkBoxClick}
              data-testid="messageing-sounds-checkbox"
              value={checkBoxState.state}
              className={`${styles["input-box"]}`}
            />
            <div className={styles["description"]}>
              <div className={styles["section-message"]}>Messaging sounds</div>
              <div className={styles["user-message"]}>
                Assorted 'shling!' and 'fwip!' noises in messaging.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sounds;
