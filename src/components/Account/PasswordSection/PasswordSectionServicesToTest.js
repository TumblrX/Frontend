import axios from "axios";
import styles from "../Account.module.css";

const sendPasswordData = async function (sentData) {

  let token = localStorage.getItem("token");
  let status = 500;
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios.post(
      "/api/user/change-password",
      sentData,
      config
    );
    return response.data.status;
  } catch (err) {
    return status;
  }
};

export { sendPasswordData };
