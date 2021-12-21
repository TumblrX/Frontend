import api from "../../../api/api";
import configureStore from "../../../redux/store";
import {
  updateEmail,
  updatePrevEmail,
  updateLetPeopleFindBlogByEmail,
} from "../../../redux/EmailSection";
const changeEmail = function (sentData) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  console.log(token);

  api
    .post("/api/user/change-email", sentData, config)
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
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

export {changeEmail, changeFindMeByEmail };
