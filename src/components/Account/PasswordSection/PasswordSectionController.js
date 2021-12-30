import configureStore from "../../../redux/store";
import styles from "../Account.module.css";
import { sendPasswordData } from "./PasswordSectionServices";

import {
  updateConfirmedPassword,
  updatenewPassword,
  updatenewConfirmedPassword,
} from "../../../redux/PasswordSection";
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
  document.querySelectorAll(".error-message").forEach((element) => {
    // if the user enter invalid input then try to enter new values
    element.style.visibility = "hidden";
  });
  if (event.target.id === "currentpassword") {
    // updateInfo({ ...passwordInfo, confirmedPassword: event.target.value });
    configureStore.dispatch(updateConfirmedPassword(event.target.value));
  } else if (event.target.id === "newpassword") {
    // updateInfo({ ...passwordInfo, newPassword: event.target.value });
    configureStore.dispatch(updatenewPassword(event.target.value));
  } else if (event.target.id === "confirmpassword") {
    // updateInfo({ ...passwordInfo, newConfirmedPassword: event.target.value });
    configureStore.dispatch(updatenewConfirmedPassword(event.target.value));
  } else {
    // updateInfo({ ...passwordInfo, confirmedPassword: event.target.value });
    configureStore.dispatch(updateConfirmedPassword(event.target.value));
  }
};

/**
 * this function handle the event handler on edit button icon
 * @type {function}
 * @param {*} event
 * @return {void} return nothing it just an event handler
 */
const iconClick = (event) => {
  document.querySelectorAll(".error-message").forEach((element) => {
    element.style.transition = "0.5s .1s linear";
  });
  /**
   * get all icon images
   * @type {Array<Element>}
   *
   */
  const imgs = document.querySelectorAll(`.${styles["icon-photo"]}`);
  if (
    event.target === imgs[1] ||
    event.target.className === `${styles.dots}` ||
    event.target.parentElement.className === `${styles.dots}`
  ) {
    document.querySelector("#currentpassword").parentElement.style.display =
      "flex";
    document.querySelector("#newpassword").parentElement.style.display = "flex";

    document.querySelector("#confirmpassword").parentElement.style.display =
      "flex";

    document.getElementsByClassName(`${styles.dots}`)[0].style.display = "none";
    document
      .querySelectorAll(`.${styles["password-box"]} .${styles.hidden}`)
      .forEach((element) => {
        element.classList.toggle(`${styles.hidden}`);
        // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
        // How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
      });
    document
      .getElementsByClassName(`${styles["icon-photo"]}`)[1]
      .classList.toggle(`${styles.hidden}`);
    /**
     * the form of the Account
     * @type {Element}
     *
     */
    const entireForm = document.getElementsByTagName("form")[0];
    entireForm.style.pointerEvents = "none";
    document.querySelectorAll("form >div").forEach((element) => {
      element.style.opacity = "0.5";
    });
    /**
     * get the section for changing password
     * @type {Array<Element>}
     *
     */
    const changePasswordSection = document.getElementsByClassName(
      `${styles["password-box"]}`
    )[0];
    changePasswordSection.style.pointerEvents = "all";
    changePasswordSection.style.opacity = "1";
  }
};

/**
 * this function handle the event handler on cancel button on the editing email section
 * @type {function}
 * @param {*} event  it takes the click item as an event
 * @return {void} returns nothing it just an event handler
 */

const cancelButtonClick = (event) => {
  document.querySelectorAll(".error-message").forEach((element) => {
    element.style.visibility = "hidden";
    element.style.transition = "none";
  });
  /**
   * all cancel buttons
   * @type {Array<Element>}
   *
   */
  const allButtons = document.querySelectorAll(`.${styles["cancel-button"]}`);
  if (event.target === allButtons[1]) {
    document.querySelectorAll("form")[0].style.pointerEvents = "all";
    document.querySelector("#newpassword").parentElement.style.display = "none";

    document.querySelector("#confirmpassword").parentElement.style.display =
      "none";
    document.getElementsByClassName(`${styles.dots}`)[0].style.display =
      "block";
    document
      .querySelectorAll(`.${styles["password-box"]} input`)
      .forEach((element) => {
        element.classList.toggle(`${styles.hidden}`);
        // if you click on the Email or on the Edit icon the Email box will apear and the confirm password box will appear too
        // How I select this element? as regular selector .classX .classY{} then forEach one of them toggle the hidden class
      });

    document
      .getElementsByTagName("img")[1]
      .classList.toggle(`${styles.hidden}`);

    document
      .querySelector("#password-section-buttons")
      .classList.toggle(`${styles.hidden}`);
  }
  document.querySelectorAll("form >div").forEach((element) => {
    element.style.opacity = "1";
  });

  document.querySelectorAll("form >div").forEach((element) => {
    element.style.opacity = "1";
  });
};

/**
 * this function handle the click on the save button in the email section
 * @type {function}
 * @param {*} event
 * @returns {void} return nothing , it just a click event handler
 */
const formAction = (
  event,
  newPassword,
  newConfirmedPassword,
  confirmedPassword
) => {
  /**
   *  get save buttons
   * @type {Array<Element>}
   *
   */
  const saveButtons = document.getElementsByClassName(
    `${styles["save-button"]}`
  );
  var regExp = /[a-zA-Z]/g;
  if (event.target === saveButtons[1]) {
    if (confirmedPassword.length === 0) {
      document.querySelector(
        `.${styles["error-current-password"]}`
      ).style.visibility = "unset";
    } else if (newPassword.length < 10 || !regExp.test(newPassword)) {
      // one condition for test

      document.getElementsByClassName(
        `${styles["error-new-password"]}`
      )[0].style.visibility = "unset";
    } else if (newPassword !== newConfirmedPassword) {
      document.getElementsByClassName(
        `${styles["error-confirm-password"]}`
      )[0].style.visibility = "unset";
    } else {
      const sentData = {
        oldPassword: confirmedPassword,
        password: newPassword,
      };
      sendPasswordData(sentData);
    }
  }
};

export { changeInput, iconClick, cancelButtonClick, formAction };
