import axios from "axios";
import { RiTruckLine } from "react-icons/ri";
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
  let response = false;
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    await axios.post("/api/user/change-email", sentData, config);
    response = true;
  } catch (err) {}
  return response;
};

const changeFindMeByEmail = async function (sentData) {
  let token = localStorage.getItem("token");
  let response = false;
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    await axios.post("/api/user/settings-save", sentData, config);
    response = true;
  } catch (err) {}
  return response;
};

export { changeEmail, changeFindMeByEmail };
