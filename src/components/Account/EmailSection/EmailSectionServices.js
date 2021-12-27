import api from "../../../api/api";
import styles from "../Account.module.css";
const changeEmail = function (sentData) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  api
    .post("/api/user/change-email", sentData, config)
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      document.getElementsByClassName(
        `${styles["error-password-message"]}`
      )[0].style.visibility = "unset";
    });
};

const changeFindMeByEmail = function (sentData) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  api.post("/api/user/settings-save", sentData, config).then((respone) => {
    console.log(respone);
  });
};

export { changeEmail, changeFindMeByEmail };
