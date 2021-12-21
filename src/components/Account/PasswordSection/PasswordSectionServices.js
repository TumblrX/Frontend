import api from "../../../api/api";

const sendPasswordData= function (sentData) {
  let token = localStorage.getItem("token");
  api
    .post("/api/user/change-password", sentData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      // validations from backend .
    });
};


export{sendPasswordData}