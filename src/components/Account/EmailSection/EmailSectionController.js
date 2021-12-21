import { getUserInfo } from "./EmailSectionServices";
import styles from "../Account.module.css";
import { changeFindMeByEmail } from "./EmailSectionServices";
import configureStore from "../../../redux/store";
import {
  updateEmail,
  updateLetPeopleFindBlogByEmail,
  updateConfirmedPassword,
} from "../../../redux/EmailSection";
/**
 * retreive the data from the backend when the component mounted
 * @type {function}
 * @param {*} event
 * @returns {void} return nothing , it just a click event handler
 */
const componentDidMount = () => {
  getUserInfo();
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
    // let token = localStorage.getItem("token");
    // api.post("/api/user/settings-save", sentData,{headers:{
    //   Authorization: token,
    // }}).then((respone)=>{
    //   console.log(respone)
    // });
    changeFindMeByEmail(sentData);
    configureStore.dispatch(updateLetPeopleFindBlogByEmail(event.target.checked));
  }
};

export { componentDidMount, iconClick,changeInput };
