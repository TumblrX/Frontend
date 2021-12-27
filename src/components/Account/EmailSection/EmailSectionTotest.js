import axios from "axios";
import styles from "../Account.module.css";

/**
 * Function to send the Email data to the backend and retrieve a confirmation
 * message that the email has been changed .
 * @type {function}
 * @param {void}
 * @returns {void} return nothing
 */
const changeEmail = async function (sentData) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    await axios.post("/api/user/change-email", sentData, config);
    return true 
  } catch (err) {
    return false 
  }
};

const changeFindMeByEmail = function (sentData) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  axios.post("/api/user/settings-save", sentData, config).then((respone) => {
    return true;
  });
};

export { changeEmail, changeFindMeByEmail };
