
import axios from "axios";

const sendPasswordData = async function (sentData) {
  let token = localStorage.getItem("token");
  let response = false;
  try {
    axios.post("/api/user/change-password", sentData, {
      headers: {
        Authorization: token,
      },
    });
    response = true;
  } catch {
    response = false;
  }
  return response;
};

export { sendPasswordData };
