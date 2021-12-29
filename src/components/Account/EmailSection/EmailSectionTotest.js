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
  let status = 500;
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios.post(
      "/api/user/change-email",
      sentData,
      config
    );
    return response.data.status;
  } catch (err) {
    return status;
  }
};

const changeFindMeByEmail = async function (sentData) {
  let token = localStorage.getItem("token");
  let status = 500;
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios.post(
      "/api/user/settings-save",
      sentData,
      config
    );
    return response.data.status;
  } catch (err) {
    return status;
  }
};

export { changeEmail, changeFindMeByEmail };
