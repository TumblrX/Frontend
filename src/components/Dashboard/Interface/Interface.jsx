import axios from "axios";
import React, { Component } from "react";
import styles from "../Dashboard.module.css";
/**
 * this variable works as a state , there is no mean to put state here in this
 * component , for performance concerns
 * @type {boolean}
 */
let checkboxState;
class Interface extends Component {
  checkBoxClick = () => {
    checkboxState = !checkboxState;

    let sentData = {
      enableEndLessScrolling: checkboxState,
    };
    this.props.sendData(sentData);
  };
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
