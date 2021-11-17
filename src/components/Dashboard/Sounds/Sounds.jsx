import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import axios from "axios";
/**
 * @type {boolean}
 * this var will have the current state of the checkbox
 */
let checkboxState;

/**
 * component to render the interface on the sound section
 * @author Abdalla Mahmoud
 * @component
 */
export class Sounds extends Component {
  /**
   * @function
   * @param {void }
   * @returns {void }
   * check if the check button has been clicked and send its value to the server
   */
  checkBoxClick = () => {
    checkboxState = !checkboxState;

    let sentData = {
      messagingSounds: checkboxState,
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
        document.querySelectorAll(`input[type="checkbox"]`)[1].checked =
          response.data.messagingSounds;
        checkboxState = response.data.messagingSounds;
      })
      .catch((err) => {});
  };
  /**
   * this function is responsible render the sounds  section
   * @function
   * @returns {jsx} return jsx to be renderd
   */
  render() {
    return (
      <>
        <div className={styles["section"]}>
          <div className={styles["title"]}>Sounds</div>
          <div className={styles["section-form"]}>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
                data-testid="messageing-sounds-checkbox"
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Messaging sounds
                </div>
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
}

export default Sounds;
