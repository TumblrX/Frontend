import configureStore from "../../../redux/store";
import { changeNotifyAbout } from "./SecuritySectionServices";
import {
  updateEmailUserAbout,
  updateTwoFactorAuth,
} from "../../../redux/SecuritySection";
/**
 * this fucntion is just a handler for clicking on check box in the Security Section
 * @type {function}
 * @param {event} event
 *
 */
const checkBoxClick = (event, EmailUserAbout, TwoFactorAuth) => {
  console.log("I will change notify me ");
  /**
   * get all the check boxes in the security container
   * @type {Array<Element>}
   *
   */
  const boxes = document.querySelectorAll(".security-container input");
  if (event.target === boxes[0]) {
    // updateState((prevState) => ({ ...prevState, EmailUserAbout: !prevState.EmailUserAbout }));
    configureStore.dispatch(updateEmailUserAbout(event.target.checked));

    const sentData = {
      actionNotify: event.target.checked,
    };
    console.log("Yes Iam ");
    changeNotifyAbout(sentData);
  } else {
    // updateState((prevState) => ({ ...prevState, TwoFactorAuth: !prevState.TwoFactorAuth }));
    configureStore.dispatch(updateTwoFactorAuth(event.target.checked));
  }
};

export { checkBoxClick };
