import styles from "../Account.module.css";
import { changeFindMeByEmail, changeEmail } from "./EmailSectionServices";
import configureStore from "../../../redux/store";
import {
  updateEmail,
  updateLetPeopleFindBlogByEmail,
  updateConfirmedPassword,
} from "../../../redux/EmailSection";

/**
 * this function handle the click on the cancel button in the email section
 * @type {function}
 * @param {*} event
 * @returns {void} return nothing , it just a click event handler
 */
const cancelButtonClick = (event, previousEmail) => {
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
  configureStore.dispatch(updateEmail(previousEmail));
};

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
      .querySelectorAll(`.${styles["change-email-section"]} .${styles.hidden}`)
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
    configureStore.dispatch(updateEmail(event.target.value));
  } else if (event.target.id === "emailcurrentpassword") {
    configureStore.dispatch(updateConfirmedPassword(event.target.value));
  } else {
    const sentData = {
      findMeByEmail: event.target.checked,
    };
    changeFindMeByEmail(sentData);
    configureStore.dispatch(
      updateLetPeopleFindBlogByEmail(event.target.checked)
    );
  }
};

/**
 * this function handle the click on the save button in the email section
 * @type {function}
 * @param {*} event
 * @returns {void} return nothing , it just a click event handler
 */
const formAction = (event, email, previousEmail, confirmedPassword) => {
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
        email: email,
        password: confirmedPassword,
      };
      changeEmail(sentData);
    }
  }
};

export { iconClick, changeInput, cancelButtonClick, formAction };
