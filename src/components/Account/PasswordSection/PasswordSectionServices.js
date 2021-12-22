import api from "../../../api/api";
import styles from "../Account.module.css";

const sendPasswordData = function (sentData) {
  let token = localStorage.getItem("token");
  api
    .post("/api/user/change-password", sentData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => {
      document.querySelector(`.${styles["error-current-password"]}`).style.visibility="unset"
    });
};

export { sendPasswordData };
