import api from "../../api/api";
import configureStore from "../../redux/store";
import {
  updateEmail,
  updatePrevEmail,
  updateLetPeopleFindBlogByEmail,
} from "../../redux/EmailSection"


const getUserInfo = function () {
  let token = localStorage.getItem("token");
  console.log(token);
  api
    .get("api/user/info", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      document.querySelectorAll('input[type="checkbox"]')[0].checked =
        response.data.settings.findMeByEmail;
      configureStore.dispatch(updateEmail(response.data.email));
      configureStore.dispatch(updatePrevEmail(response.data.email));
      configureStore.dispatch(
        updateLetPeopleFindBlogByEmail(response.data.findMeByEmail)
      );

      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getUserInfo };
