import api from "../../api/api";
import configureStore from "../../redux/store";
import {
  updateEmail,
  updatePrevEmail,
  updateLetPeopleFindBlogByEmail,
} from "../../redux/EmailSection";

import updateEmailUserAbout from "../../redux/SecuritySection";
const getUserInfo = function () {
  let token = localStorage.getItem("token");
  api
    .get("api/user/info", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      document.querySelector(".username").textContent = response.data.name;
      document.querySelectorAll('input[type="checkbox"]')[0].checked =
        response.data.settings.findMeByEmail;
      configureStore.dispatch(updateEmail(response.data.email));
      configureStore.dispatch(updatePrevEmail(response.data.email));
      configureStore.dispatch(
        updateLetPeopleFindBlogByEmail(response.data.findMeByEmail)
      );

      document.querySelectorAll('input[type="checkbox"]')[1].checked =
        response.data.settings.actionNotify;
      configureStore.dispatch(
        updateEmailUserAbout(response.data.settings.actionNotify)
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getUserInfo };
