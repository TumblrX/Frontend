import api from "../../../api/api";
const changeNotifyAbout = function (sentData) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  api
    .post("/api/user/settings-save", sentData, config)
    .then((res) => {
    //   console.log(res);
    })
    .catch((err) => {
      console.log(err);
      // validations from backend .
    });
};

export { changeNotifyAbout };
