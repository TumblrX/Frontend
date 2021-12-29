import api from "../../../api/api";

const checkBoxClick = function (sentData) {
  let token = localStorage.getItem("token");
  localStorage.setItem("InfinteScrolling", sentData.dashBoardInfiniteScrolling);
  let config = {
    headers: {
      Authorization: token,
    },
  };
  api
    .post("/api/user/settings-save", sentData, config)
    .then((respone) => {
      console.log(respone);
    })
    .catch((err) => console.log(err));
};

export { checkBoxClick };
