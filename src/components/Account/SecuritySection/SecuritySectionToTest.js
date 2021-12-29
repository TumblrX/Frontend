import axios from "axios";
const changeNotifyAbout =async  function (sentData) {
  let token = localStorage.getItem("token");
  let status = 500 ; 
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response =await axios.post("/api/user/settings-save", sentData, config);
    return response.data.status ; 
  } catch (err) {
      return status ; 
  }
};

export { changeNotifyAbout };
