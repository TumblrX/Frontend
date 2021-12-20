/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";

import styles from "../Account.module.css";
import pen from "../../../assets/Images/pencil-64x64.png";
import api from "../../../api/api";
import { getUserInfo, changeEmail,changeFindMeByEmail } from "./EmailSectionServices";
import { useSelector, useDispatch } from "react-redux";
import {
  updateEmail,
  updateConfirmedPassword,
  updateLetPeopleFindBlogByEmail,
  updatePrevEmail,
  updatePassword,
} from "../../../redux/EmailSection";

/**
 * Component to render the Email Section in the Accountsettings in the Settings page
 * @author Abdalla Mahmoud
 *
 * @component
 */

const EmailSection = function (props) {
  const {
    email,
    password,
    previousEmail,
    confirmedPassword,
    letPeopleFindBlogByEmail,
  } = useSelector((state) => state.emailInfo);
  const dispatch = useDispatch();
  /**
   * this function handle the click on the save button in the email section
   * @type {function}
   * @param {*} event
   * @returns {void} return nothing , it just a click event handler
   */
  const formAction = (event) => {
    /**
     * get the save button
     * @type {Array<Element>}
     *
     */
    const saveButtons = document.getElementsByClassName(
      `${styles["save-button"]}`
    );
    if (event.target === saveButtons[0]) {
      if (email === previousEmail || email === "") {
        document.getElementsByClassName(
          `${styles["error-email-message"]}`
        )[0].style.visibility = "unset";
      } else {
        // if (password !== confirmedPassword) {
        //   document.getElementsByClassName(
        //     `${styles['error-password-message']}`,
        //   )[0].style.visibility = 'unset';
        //   return;
        // }
        /**
         * @type{object } sentData
         * object for the data that will be sent to the server
         */
        const sentData = {
          email:email,
          password:confirmedPassword
        };
        changeEmail(sentData);
      }
    }
  };

  /**
   * this function handle the click on the cancel button in the email section
   * @type {function}
   * @param {*} event
   * @returns {void} return nothing , it just a click event handler
   */
  const cancelButtonClick = (event) => {
    // if the user entered invalid email or password then cancel the operation
    // remove the transition "immediate change " but you should put it again
    // so it will when the user click on the edit button agian
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.visibility = "hidden";
      element.style.transition = "none";
    });
    /**
     * get all Cancel buttons
     * @type {Array<Element>}
     */
    const allButtons = document.querySelectorAll(`.${styles["cancel-button"]}`);
    console.log(document.querySelector("#email-section-buttons"));
    if (event.target === allButtons[0]) {
      document
        .querySelector(
          `.${styles["change-email-section"]} input[type="password"]`
        )
        .classList.toggle(`${styles.hidden}`);
      // hide the password box
      document
        .querySelector(`.${styles["change-email-section"]} input[type="email"]`)
        .classList.toggle(`${styles["before-focus-on-edit"]}`); // remove the borders from the email box by toggle the class
      document
        .querySelector("#email-section-buttons")
        .classList.toggle(`${styles.hidden}`);
      // hide the buttons
      document
        .getElementsByTagName("img")[0]
        .classList.toggle(`${styles.hidden}`);
      // display the edit icon again
    }
    document.querySelectorAll("form >div").forEach((element) => {
      element.style.opacity = "1";
    });

    document.querySelectorAll("form")[0].style.pointerEvents = "all";
    // the change that has happen will be ignored
    // updateInfo((prevState) => ({
    //   ...prevState,
    //   email: prevState.previousEmail,
    // }));
    dispatch(updateEmail(previousEmail));
  };

  /**
   * retreive the data from the backend when the component mounted
   * @type {function}
   * @param {*} event
   * @returns {void} return nothing , it just a click event handler
   */
  const componentDidMount = () => {
    getUserInfo();
  };
  useEffect(componentDidMount, []);

  /**
   * this function handle the click on the edit icon button
   * @type {function}
   * @param {*} event
   * @returns {void} return nothing , it just a click event handler
   */
  const iconClick = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      element.style.transition = "0.5s .1s linear";
    });

    // if they set to zero
    /**
     * array to get the icon photo
     * @type {Array<Element>}
     *
     */
    const imgs = document.querySelectorAll(`.${styles["icon-photo"]}`);
    if (event.target.id === "email-box" || event.target === imgs[0]) {
      document
        .querySelectorAll(
          `.${styles["change-email-section"]} .${styles.hidden}`
        )
        .forEach((element) => {
          element.classList.toggle(`${styles.hidden}`);
          // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
          // How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
        });

      document
        .querySelector("#email-box")
        .classList.remove(`${styles["before-focus-on-edit"]}`);
      document
        .getElementsByClassName(`${styles["icon-photo"]}`)[0]
        .classList.toggle(`${styles.hidden}`);

      /**
       * get the Email section
       * @type {Array<Element>}
       *
       */
      const changeEmailSection = document.getElementsByClassName(
        `${styles["change-email-section"]}`
      )[0];
      const entireForm = document.getElementsByTagName("form")[0];
      entireForm.style.pointerEvents = "none";
      document.querySelectorAll("form >div").forEach((element) => {
        element.style.opacity = "0.5";
      });
      changeEmailSection.style.pointerEvents = "all";
      changeEmailSection.style.opacity = "1";
    }
  };

  /**
   * this function handle any change in the states
   * @type {function}
   * @param {*} event
   * @returns {void}
   */
  const changeInput = (event) => {
    document.querySelectorAll(".error-message").forEach((element) => {
      // if the user enter invalid input then try to enter new values
      element.style.visibility = "hidden";
    });
    if (event.target.type === "email") {
      dispatch(updateEmail(event.target.value));
      console.log(email);
    } else if (event.target.id === "emailcurrentpassword") {
      dispatch(updateConfirmedPassword(event.target.value));
    } else {
      const sentData = {
        findMeByEmail: event.target.checked,
      };
      // let token = localStorage.getItem("token");
      // api.post("/api/user/settings-save", sentData,{headers:{
      //   Authorization: token,
      // }}).then((respone)=>{
      //   console.log(respone)
      // });
      changeFindMeByEmail(sentData);
      dispatch(updateLetPeopleFindBlogByEmail(event.target.checked));
    }
  };

  return (
    <>
      <div
        data-testid="email-section"
        className={styles["change-email-section"]}
      >
        <div className={styles.title}>Email</div>
        <div className={styles["input-fields"]}>
          <input
            onClick={iconClick}
            id="email-box"
            data-testid="email-box"
            type="email"
            value={email}
            onChange={changeInput}
            className={`${styles["before-focus-on-edit"]} ${styles["input-box"]} `}
          />
          <div className={`${styles["error-email-message"]} error-message`}>
            change your Email
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className={`${styles.hidden} ${styles["input-box"]}`}
            value={confirmedPassword}
            onChange={changeInput}
            id="emailcurrentpassword"
            data-testid="password-box"
          />

          <div className={`${styles["error-password-message"]} error-message`}>
            Please Enter the correct password
          </div>

          <div
            className={`${styles.hidden}`}
            data-testid="buttons-container"
            id="email-section-buttons"
          >
            <button
              onClick={cancelButtonClick}
              className={styles["cancel-button"]}
              type="button"
              data-testid="email-cancel-button"
            >
              cancel
            </button>
            <button
              onClick={formAction}
              type="button"
              className={styles["save-button"]}
            >
              save
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              name=""
              style={{ marginRight: "6px" }}
              value={letPeopleFindBlogByEmail}
              onChange={changeInput}
              className={`${styles["input-box"]}`}
            />
            <div
              className={styles["user-message"]}
              style={{ marginTop: "-9px" }}
            >
              Let people find your blogs through this address.{" "}
            </div>
          </div>
        </div>

        <img
          src={pen}
          onClick={iconClick}
          className={styles["icon-photo"]}
          alt=" can't load "
          data-testid="email-edit-button"
        />
      </div>
      <hr />
    </>
  );
};

export default EmailSection;
