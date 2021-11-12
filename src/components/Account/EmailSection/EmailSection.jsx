import React, { Component } from "react";

import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";
import axios from "axios";

class EmailSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmedPassword: "",
    };
    let data, previousData;
  }
  formAction = (event) => {
    let saveButtons = document.getElementsByClassName(
      `${styles["save-button"]}`
    );
    console.log(saveButtons[0]);
    console.log(event.target);
    if (event.target === saveButtons[0]) {
      console.log("done");
      if (this.state.email === this.previousData.email) {
        document.getElementsByClassName(
          `${styles["error-email-message"]}`
        )[0].style.visibility = "unset";
      } else {
        this.data.email = this.state.email;
        if (this.state.password !== this.state.confirmedPassword) {
          document.getElementsByClassName(
            `${styles["error-password-message"]}`
          )[0].style.visibility = "unset";
          return;
        }
        axios
          .put("http://localhost:3000/users/1", {
            ...this.data,
          })
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            // validations from backend .
          });
      }
    }
  };
  cancelButtonClick = (event) => {
    // if the user entered invalid email or password then cancel the operation
    // remove the transition "immediate change " but you should put it again
    // so it will when the user click on the edit button agian
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.visibility = "hidden";
      element.style.transition = "none";
    });
    let allButtons = document.querySelectorAll(`.${styles["cancel-button"]}`);
    if (event.target === allButtons[0]) {
      document
        .querySelector(
          `.${styles["change-email-section"]} input[type="password"]`
        )
        .classList.toggle(`${styles.hidden}`);
      document
        .querySelector(`.${styles["change-email-section"]} input[type="email"]`)
        .classList.toggle(`${styles["before-focus-on-edit"]}`);
      document
        .getElementsByClassName(`${styles["email-section-buttons"]}`)[0]
        .classList.toggle(`${styles.hidden}`);
      document
        .getElementsByTagName("img")[0]
        .classList.toggle(`${styles.hidden}`);
    }
    document.querySelectorAll(`form >div`).forEach((element) => {
      element.style.opacity = "1";
    });

    document.querySelectorAll(`form`)[0].style.pointerEvents = "all";
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        this.data = response.data;
        this.previousData = response.data;
        this.setState(() => {
          return {
            email: response.data.email,
            password: response.data.password,
          };
        });
      })
      .catch();
  }
  iconClick = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.transition = "0.5s .1s linear";
    });

    // if they set to zero
    let imgs = document.querySelectorAll(`.${styles["icon-photo"]}`);
    if (event.target.id === "email-box" || event.target === imgs[0]) {
      document
        .querySelectorAll(
          `.${styles["change-email-section"]} .${styles.hidden}`
        )
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          //How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });

      document
        .querySelector("#email-box")
        .classList.remove(`${styles["before-focus-on-edit"]}`);
      document
        .getElementsByClassName(`${styles["icon-photo"]}`)[0]
        .classList.toggle(`${styles.hidden}`);

      let changeEmailSection = document.getElementsByClassName(
        `${styles["change-email-section"]}`
      )[0];
      let entireForm = document.getElementsByTagName("form")[0];
      entireForm.style.pointerEvents = "none";
      document.querySelectorAll(`form >div`).forEach((element) => {
        element.style.opacity = "0.5";
      });
      changeEmailSection.style.pointerEvents = "all";
      changeEmailSection.style.opacity = "1";
    }
  };
  changeInput = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      // if the user enter invalid input then try to enter new values
      element.style.visibility = "hidden";
    });
    if (event.target.type === "email") {
      this.setState(() => {
        return { email: event.target.value };
      });
    } else if (event.target.id === "emailcurrentpassword") {
      this.setState(() => {
        return { confirmedPassword: event.target.value };
      });
    }
  };
  render() {
    return (
      <div>
        <div className={styles["change-email-section"]}>
          <div className={styles["title"]}>Email</div>
          <div className={styles["input-fields"]}>
            <input
              onClick={this.iconClick}
              id="email-box"
              type="email"
              value={this.state.email}
              onChange={this.changeInput}
              className={styles["before-focus-on-edit"]}
            />
            <div className={`${styles["error-email-message"]} error-message`}>
              change your Email
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.hidden}
              value={this.state.confirmedPassword}
              onChange={this.changeInput}
              id="emailcurrentpassword"
            />

            <div
              className={`${styles["error-password-message"]} error-message`}
            >
              Please Enter the correct password
            </div>

            <div
              className={`${styles.hidden} ${styles["email-section-buttons"]}`}
            >
              <button
                onClick={this.cancelButtonClick}
                className={styles["cancel-button"]}
                type="button"
              >
                cancel
              </button>
              <button
                onClick={this.formAction}
                type="button"
                className={styles["save-button"]}
              >
                save
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <input type="checkbox" name="" style={{ marginRight: "6px" }} />
              <div
                className={styles["user-message"]}
                style={{ marginTop: "-2px" }}
              >
                Let people find your blogs through this address.{" "}
              </div>
            </div>
          </div>

          <img
            src={pen}
            onClick={this.iconClick}
            className={styles["icon-photo"]}
            alt=" can't load "
          />
        </div>
        <hr />
      </div>
    );
  }
}

export default EmailSection;
