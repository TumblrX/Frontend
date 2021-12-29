import api from "../../api/api";

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
      //messagingSounds
      console.log(response);
      document.querySelector(
        `[data-testid="enable-endless-scrolling-checkbox"]`
      ).checked = response.data.settings.dashBoardInfiniteScrolling;
      localStorage.setItem(
        "InfinteScrolling",
        response.data.settings.dashBoardInfiniteScrolling
      );
      document.querySelector(
        `[data-testid="messageing-sounds-checkbox"]`
      ).checked = response.data.settings.messagingSounds;
      document.querySelector(".username").textContent = response.data.name;
    })
    .catch((error) => {});
};

export { getUserInfo };
