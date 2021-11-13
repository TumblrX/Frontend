import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import axios from "axios";
let checkboxState;
export class Sounds extends Component {
  checkBoxClick = () => {
    checkboxState = !checkboxState;

    let sentData = {
     
        messagingSounds: checkboxState,
      
    };
    this.props.sendData(sentData);
  };
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
