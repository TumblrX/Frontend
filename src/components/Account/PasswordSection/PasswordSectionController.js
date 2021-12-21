

import configureStore from "../../../redux/store";
import { updateConfirmedPassword,updatenewPassword,updatenewConfirmedPassword } from "../../../redux/PasswordSection";
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
    // console.log(passwordInfo);
  };


export {changeInput}